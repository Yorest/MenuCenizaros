import { Button, Carousel } from "flowbite-react";
import type { HostingType } from "@/utils/hosting";
import { SiWhatsapp } from "react-icons/si";

export const HostingItem = ({
    title,
    description,
    price_per_night,
    price_description,
    price_per_person,
    maximum_capacity,
    check_in,
    check_out,
    specs,
    images,
}: HostingType) => {
    return (
        <>           
            <article
                key={`${title}_h`}
                className="gap-16 items-center  px-6 mx-auto max-w-screen-xl grid-col-1 lg:grid lg:grid-cols-2 lg:px-6"
            >
                <div className="font-base text-gray-500 sm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-green-500">
                        {title}
                    </h2>
                    <p className="mb-4">{description}</p>
                    <div className="mb-4 w-fit ">
                        <div className="flex flex-col items-start mb-4 bg-green-50 text-green-500 font-bold p-3 text-xl rounded-lg">
                            <div className="flex fle-row gap-2">
                                <span className="">{`Precio: ₡ ${price_per_night}`}</span>                              
                                <p className="font-normal text-base flex items-center">
                                    precio por noche
                                </p>
                            </div>
                            <p className="font-normal text-base flex items-center">
                                {price_description}
                            </p>
                        </div>
                        <p className="text-gray-400">
                            {`₡ ${price_per_person} adicional por persona -`}
                            <span className="font-semibold">
                                capacidad máxima: {maximum_capacity}
                            </span>
                        </p>
                        <p className="text-gray-500 font-bold">
                            Check in: {check_in} • Check out: {check_out}
                        </p>

                        <Button
                            className="mt-4"
                            color="green"
                            onClick={() => {
                                window.open("https://wa.me/50660560060");
                            }}
                        >
                            <SiWhatsapp className="mr-2 h-5 w-5" />
                            Consultar disponibilidad
                        </Button>
                    </div>

                    <div className="pt-2 space-y-4">
                        <h3 className="mb-2 text-lg font-semibold text-green-400 ">
                            Equipadas con:
                        </h3>
                        <div className="grid grid-cols-2">
                            <ul className="max-w-md space-y-1 text-gray-500 list-inside ">
                                {specs
                                    .slice(0, Math.ceil(specs.length / 2))
                                    .map((spec) => (
                                        <li
                                            key={spec}
                                            className="flex items-center"
                                        >
                                            <svg
                                                className="w-3.5 h-3.5 me-2 text-green-500  shrink-0"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            {spec}
                                        </li>
                                    ))}
                            </ul>
                            <ul className="max-w-md space-y-1 text-gray-500 list-inside ">
                                {specs
                                    .slice(Math.ceil(specs.length / 2))
                                    .map((spec) => (
                                        <li
                                            key={spec}
                                            className="flex items-center"
                                        >
                                            <svg
                                                className="w-3.5 h-3.5 me-2 text-green-500  shrink-0"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            {spec}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full h-64 lg:h-[500px] overflow-hidden mt-8 lg:mt-0 rounded-lg">
                    <Carousel slide={false}>
                        {images.map((image) => (
                            <img
                                className="relative"
                                src={`${image.url}`}
                                alt={image.alt}
                            />
                        ))}
                    </Carousel>
                </div>
            </article>
           
        </>
    );
};
