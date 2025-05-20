// import { useState } from "react";
import {useMenu} from "@/hooks/useMenu";
import { MenuBottonOptions } from "@/components/MenuBottonOptions";
import { MenuList } from "@/components/MenuList";
// import { dishesItems } from "@/utils/dishes";

export function MenuSection() {

  const {categorySelected, dishesCategories, handleCategorySelected, menuItems, halfItems} = useMenu();

  // const [categorySelected,setCategorySelected] = useState("Todos");
  // const dishesCategories = dishesItems.map(({ category, id }) => {
  //   return { category, id };
  // });
  // const dishes = [...dishesItems];

  // const handleCategorySelected = (category: string) => {
  //   setCategorySelected(category);
  // }

  
  
  return (
    <section className="">
      <MenuBottonOptions categories={dishesCategories} handleCategorySelected={handleCategorySelected} />
      <MenuList menuItems={menuItems} categorySelected={categorySelected} halfItems={halfItems} />
    </section>
  );
}
