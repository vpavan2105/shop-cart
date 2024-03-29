import React, { useEffect, useState } from "react";
import { Card } from "@chakra-ui/react";
import { NavLink } from "./ProductNav";
import { RootState } from "../../redux/reducers/ProductReducer";
import FilteredProducts from "./FilterProduccts";
import { addToFilteredProducts } from "../../redux/actions/actions";
import { useAppDispatch, useAppSelector } from "../../redux/utils/Product_Utils";


export const Fashion = [
    "men's clothing",
    "women's clothing",
    "jewelery",
    "fragrances",
    "shoes",
  ];


interface SubCategoriesProps {
  category: string;
}

const SubCategories: React.FC<SubCategoriesProps> = ({
  category,
}: SubCategoriesProps) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const dispatch = useAppDispatch();
  const selectedCategory: any = useAppSelector(
    (state: RootState) => state.category
  );

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    dispatch(addToFilteredProducts(subcategory));
  };

  let subCategories: string[] = [];

  if (selectedCategory === "Fashion") {
    subCategories = Fashion;
  }

  // useEffect(() =>{
  //   dispatch()
  // },[])

  return (
    <>
    <Card position="absolute" top="47px" zIndex="1" p={2}>
      {category === "Fashion" &&
        Fashion.map((link) => (
          <NavLink key={link} onclick={() => handleSubcategoryClick(link)}>
            {link}
          </NavLink>
        ))}
    </Card>
    {/* {selectedSubcategory && (
        <FilteredProducts category={selectedSubcategory} />
      )} */}
    </>
  );
};

export default SubCategories;
