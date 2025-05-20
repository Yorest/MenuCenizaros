import type { Dish } from "@/utils/dishesTypes";

export function DishItem({ name, description, price }: Omit<Dish, "id">) {
    return (
        <div className="w-full flex flex-col items-start justify-center gap-1 text-[#4F3B23] border-solid border-b border-gray-300 p-0.5 ">
            <div className="w-full flex flex-row justify-between items-start">
                <div className="text-left text-lg font-bold w-9/12">{name}</div>
                <div className="text-right text-lg font-bold w-3/12">
                    ₡ {price}
                </div>
            </div>
            {description && (
                <div className="text-sm  text-justify text-gray-500 mb-2">
                    {description}
                </div>
            )}
        </div>
    );
}
