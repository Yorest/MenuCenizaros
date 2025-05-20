export type Dish = {
    name: string;
    description: string;
    id: string;
    price: number;
};

export type CategoryFoodType = {
    category: string;
    note: string;
    image: {
        src: string;
        alt: string;
        title: string
    }
    dishes: Dish[];
    id: string;
};