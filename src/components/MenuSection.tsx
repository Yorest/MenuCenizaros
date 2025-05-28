
import {useMenu} from "@/hooks/useMenu";
import { MenuBottonOptions } from "@/components/MenuBottonOptions";
import { MenuList } from "@/components/MenuList";


export function MenuSection() {

  const {categorySelected, dishesCategories, handleCategorySelected, menuItems, halfItems} = useMenu();  
  
  return (
    <section className="">
      <MenuBottonOptions categories={dishesCategories} handleCategorySelected={handleCategorySelected} />
      <MenuList menuItems={menuItems} categorySelected={categorySelected} halfItems={halfItems} />
    </section>
  );
}
