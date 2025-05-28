import type { CategoryFoodType } from "@/utils/dishesTypes";
import { DishItem } from "@/components/DishItem";

export function MenuItem({
    category,
    note,
    image,
    dishes,
    id,
}: CategoryFoodType) {
    return (
        <article className="w-full h-auto flex flex-col pb-4" key={id}>
            <h2
                className={`text-green-500 text-3xl font-bold mt-4 uppercase ${!note && "mb-3"}`}
                id={category}
            >
                {category}
            </h2>
            {note && <p className="mb-2 text-gray-500 italic ">{note}</p>}

            <div className="bg-white mb-2 rounded-lg p-4 flex flex-col gap-4 overflow-hidden lg:flex-row">
                <div className="lg:w-2/3">
                    {dishes.map((dish) => (
                        <DishItem
                            key={dish.id}
                            name={dish.name}
                            description={dish.description}
                            price={dish.price}
                        />
                    ))}
                </div>
                <img
                    className="relative top-16 -mt-12 lg:top-0 lg:mt-0 lg:w-1/3 lg:object-cover lg:object-left lg:max-h-[250px]"
                    src={`${image.src}`}
                    alt={image.alt}
                    title={image.title}
                />
            </div>
        </article>
    );
}
