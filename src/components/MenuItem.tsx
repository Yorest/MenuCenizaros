import type {CategoryFoodType} from "@/utils/dishesTypes";
import { DishItem } from "@/components/DishItem"

export function MenuItem({category, note, image, dishes, id} : CategoryFoodType ){


    return (
        <article
            className="w-full h-auto flex flex-col pb-4"
            key={id}
        >
            <h2
                className={`text-green-500 text-3xl font-bold mt-4 uppercase ${!note && "mb-3"}`}
                id={category}
            >
                {category}
            </h2>
            {note && (
                <p className="mb-2 text-gray-500 italic ">{note}</p>
            )}

            <div className="bg-white mb-2 rounded-lg p-4 flex flex-col gap-4 overflow-hidden">
                {dishes.map((dish) => (
                    <DishItem
                        key={dish.id}
                        name={dish.name}
                        description={dish.description}
                        price={dish.price}
                    />
                ))}

                <img
                    className="relative top-16 -mt-12"
                    src={`${image.src}`}
                    alt={image.alt}
                    title={image.title}
                />
            </div>
        </article>
    )
}