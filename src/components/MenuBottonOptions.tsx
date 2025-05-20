import { Button } from "flowbite-react";

type category = {
    category: string;
    id: string
}

type MenuBottonOptionsProps = {
    categories: category[];
    handleCategorySelected: (category: string) => void
}

export function MenuBottonOptions( {categories, handleCategorySelected} : MenuBottonOptionsProps) {     
    
    return (
        <div className="sticky top-0 z-[999]  py-3 bg-green-300 px-3 w-screen max-w-screen-xl">
            <h2 className="text-4xl font-bold text-green-800 px-3">Menú</h2>
            <div className=" flex flex-nowrap gap-3 pt-2 pb-4 px-3 overflow-x-scroll scroll-smooth snap-x scroll-p-0 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-green-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white ">
                <Button color="green"  className="snap-start h-14 uppercase" onClick={() => handleCategorySelected("Todos")}>
                    Todos
                </Button>

                {categories.map((category) => (
                    <Button color="green" className="snap-start h-14 uppercase" key={category.id} onClick={() => handleCategorySelected(category.category)} >
                        {category.category} 
                    </Button>
                ))}
            </div>
        </div>
    );
}
