import { useState, useEffect } from "react";
import { dishesItems } from "@/utils/dishes";
import type { CategoryFoodType } from "@/utils/dishesTypes";
import useEvent from "@/hooks/useEvent";

const InitialState = [...dishesItems];

export function useMenu() {
    const [menuItems, setMenuItems] =
        useState<CategoryFoodType[]>(InitialState);
    const halfItems = Math.ceil(InitialState.length / 2);
    const [categorySelected, setCategorySelected] = useState("Todos");
    const dishesCategories = dishesItems.map(({ category, id }) => {
        return { category, id };
    });

    useEffect(() => {
        if (categorySelected === "Todos") {
            setMenuItems(InitialState);
        } else {
            const filteredMenu = InitialState.filter(
                (item) => item.category === categorySelected,
            );
            setMenuItems(filteredMenu);
        }
    }, [categorySelected]);

    const handleCategorySelected = useEvent((category: string) => {
        setCategorySelected(category);
    });

    return {
        categorySelected,
        dishesCategories,
        handleCategorySelected,
        menuItems,
        halfItems,
    };
}
