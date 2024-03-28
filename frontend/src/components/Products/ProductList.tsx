import { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "./ProductCard";
import { Heading, Stack } from "@chakra-ui/react";
import { CardSkeleton } from "./Skeleton";
import { ProductNav } from "./ProductNav";

export interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
    rating: {
        rate: number;
    };
}

const MAX_DESCRIPTION_LENGTH: number = 40;
const MAX_TITLE_LENGTH: number = 30;

// API URL
export const url: string = "http://localhost:8000/products";

// Function to fetch data from the API
export async function getData(): Promise<Product[]> {
    try {
        let res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export function ProductList(): ReactElement {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchData() {
            try {
                let res = await getData();
                setProducts(res);
                setLoading(false);
                console.log(res);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    // Function to truncate description
    const truncateDescription = (description: string): string => {
        if (description.length > MAX_DESCRIPTION_LENGTH) {
            return description.slice(0, MAX_DESCRIPTION_LENGTH) + "...";
        }
        return description;
    };

    // Function to truncate title
    const truncateTitle = (title: string): string => {
        if (title.length > MAX_TITLE_LENGTH) {
            return title.slice(0, MAX_TITLE_LENGTH) + "...";
        }
        return title;
    };

    return (
        <>
            <Heading>Product page</Heading>
            <ProductNav />
            {loading ? (
                <Stack direction={['row']} flexWrap='wrap' spacing='24px'>
                {[...Array(12)].map((_,index) => <CardSkeleton key={index}/>)}
                </Stack>
            ) : (
                <Stack direction={['row']} flexWrap='wrap' spacing='24px'>
                    {products.map(prod => (
                        <ProductCard
                            key={prod.id}
                            prod={prod}
                            truncateDescription={truncateDescription}
                            truncateTitle={truncateTitle}
                        />
                    ))}
                </Stack>
            )}
        </>
    );
}
