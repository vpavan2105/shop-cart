import React, { useState } from "react";
import { Card } from "@chakra-ui/react";
import { NavLink } from "./ProductNav";

import { addToFilteredProducts } from "../../redux/actions/actions";
import {
  useAppDispatch,

} from "../../redux/utils/Product_Utils";


export const Fashion = [
  "men's clothing",
  "women's clothing",
  "skincare",
  "fragrances",
];

export const Electronics = [
    "laptops",
    "smartphones",
    "smart watch",
    "Monitor",
    "storage device",
    "head phones"
];

interface SubCategoriesProps {
  category: string;
}

const SubCategories: React.FC<SubCategoriesProps> = ({
  category,
}: SubCategoriesProps) => {
  const [ _,setSelectedSubcategory] = useState<string | null>(
    null
  );
  const dispatch = useAppDispatch();
  // const selectedCategory: any = useAppSelector(
  //   (state: RootState) => state.category
  // );

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    dispatch(addToFilteredProducts(subcategory));
  };

  // let subCategories: string[] = [];
  //
  // if (selectedCategory === "Fashion") {
  //   subCategories = Fashion;
  // }

  return (
    <>
      {category === "Fashion" && (
          <Card position="absolute" top="80px" zIndex="1" p={2}>
            {Fashion.map((link) => (
                <NavLink key={link} onclick={() => handleSubcategoryClick(link)}>
                  {link}
                </NavLink>
            ))}
          </Card>
      )}
      {category === "Electronics" && (
          <Card position="absolute" top="80px" zIndex="1" p={2}>
            {Electronics.map((link) => (
                <NavLink key={link} onclick={() => handleSubcategoryClick(link)}>
                  {link}
                </NavLink>
            ))}
          </Card>
      )}
    </>
  );
};

export default SubCategories;
