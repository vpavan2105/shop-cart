
import {ProductCard} from "./ProductCard";
import { Box,  SimpleGrid, useDisclosure, useToast } from "@chakra-ui/react";

import { ReactElement, useEffect, useState } from "react";
import {  ProdData  } from "../../redux/utils/adminUtils";
import { deleteDataProduct } from "../../redux/actions/actionAdmin";
import { ProductUpdate } from "./ProductUpdate";
import Pagination from "./Pagination";
import { useAppSelector, useAppDispatch } from '../../redux/utils/Product_Utils';

const ProductList:React.FC = () :ReactElement=> {

  const [productDetails, setProductDetails] =useState<ProdData|{}>({});

  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(6); 
  const toast = useToast();
  const [currentProducts,setCurrentProducts] = useState<ProdData[]>([])

  const { productsData, isLoadingFetch, isErrorFetch } = useAppSelector(
    (state:any) => state.products
  );
  useEffect(()=>{

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = productsData.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentProducts(currentItems)
  },[productsData,currentPage])
  const editProduct = (product:ProdData) => {
    console.log(product);
    setProductDetails(product);
    onOpen();
  };

  const deleteProduct = (id:number|string,title:string) => {
    dispatch(deleteDataProduct(id));
    toast({
      title: 'Delete Product.',
      description: `Successfully deleted product : ${title}`,
      status: 'error',
      duration: 2000,
      isClosable: true,
    })
  };
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };



// console.log(isLoadingFetch);


  if (isLoadingFetch) return <div>loading</div>;
  if (isErrorFetch) return <div>error</div>;

  return (
    <>
   
      <SimpleGrid columns={[1, 2, 3]} gap={4}>
        {currentProducts?.map((product:ProdData) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              editProduct={editProduct}
              deleteProduct={deleteProduct}
            />
          );
        })}
      </SimpleGrid>
      <Box mt={4}>
        {productsData.length > itemsPerPage && (
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={productsData.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        )}
      </Box>
      {isOpen && (
        <ProductUpdate
          productDetails={productDetails}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </>
  );
};

export  {ProductList}
