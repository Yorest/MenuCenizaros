import type { CategoryFoodType } from "@/utils/dishesTypes";
import { MenuItem } from "@/components/MenuItem";

type MenuListProps = {
    menuItems: CategoryFoodType[];
    categorySelected: string;
    halfItems: number
};

export function MenuList({ menuItems, categorySelected,halfItems }: MenuListProps) {
    // const [menuItems, setMenuItems] = useState<CategoryFoodType[]>(InitialState);

        // const halfItems = Math.ceil(InitialState.length / 2);

    // useEffect(() => {
    //     if (categorySelected === "Todos") {
    //         setMenuItems(InitialState);
    //     } else {
    //         const filteredMenu = InitialState.filter(
    //             (item) => item.category === categorySelected,
    //         );
    //         setMenuItems(filteredMenu);
    //     }
    // }, [categorySelected]);


    return categorySelected === "Todos" ? (
        <div className="px-6 py-10 flex flex-col lg:flex-row bg-gray-100 h-full lg:gap-8">
            <div className="w-full lg:w-1/2 flex flex-col items-start">
                {menuItems
                    .slice(0, halfItems)
                    .map(({ category, note, image, dishes, id }) => (
                        <MenuItem
                            key={id}
                            category={category}
                            note={note}
                            image={image}
                            dishes={dishes}
                            id={id}
                        />
                    ))}
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-start">
                {menuItems
                    .slice(halfItems)
                    .map(({ category, note, image, dishes, id }) => (
                        <MenuItem
                            key={id}
                            category={category}
                            note={note}
                            image={image}
                            dishes={dishes}
                            id={id}
                        />
                    ))}
            </div>
        </div>
    ) : (
        <div className="px-6 py-10 flex flex-col lg:flex-row bg-gray-100 h-full lg:gap-8">
            <div className="w-full lg:w-1/2 flex flex-col items-start">
        
                {menuItems.map(({ category, note, image, dishes, id }) => (
            <MenuItem
                key={id}
                category={category}
                note={note}
                image={image}
                dishes={dishes}
                id={id}
            />  
                ))}
            </div>
        </div>
    );
}
