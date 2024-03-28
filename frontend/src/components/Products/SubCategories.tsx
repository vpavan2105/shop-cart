import { Card } from "@chakra-ui/react";
import { Electronics, Fashion, NavLink } from "./ProductNav";
import { memo, useState } from "react";
import FilteredProducts from "./FilterProduccts";

interface subcategoriesProp {
  category: string;
}

export const SubCategories = memo(({ category }: subcategoriesProp) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const handleSubcategoryClick = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <Card mb="10px" position="absolute" top="87px" zIndex="1" p={2}>
      {category === "Fashion" &&
        Fashion.map((link) => (
          <NavLink key={link} onclick={() => handleSubcategoryClick(link)}>
            {link}
          </NavLink>
        ))}
      {category === "Electronics" &&
        Electronics.map((link) => (
          <NavLink key={link} onclick={() => handleSubcategoryClick(link)}>
            {link}
          </NavLink>
        ))}
      {selectedSubcategory && <FilteredProducts category={selectedSubcategory} />}
    </Card>
  );
});
