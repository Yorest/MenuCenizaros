type Images = {
    url: string;
    alt: string
}

export type HostingType = {
    title: string;
    description: string;
    price_per_night: number;
    price_description: string;
    price_per_person: number;
    maximum_capacity: string;
    check_in: string;
    check_out: string;
    specs: string[];
    images: Images[];
};

export const hostings : HostingType[] = [
    {
        title: "Cabinas Módulos",
        description:
            "Especialmente diseñadas para parejas. El hospedaje incluye desayuno y el uso de nuestras instalaciones (a partir de las 9 a.m.).",
        price_per_night: 35000,
        price_description: "para parejas",
        price_per_person: 12000,
        maximum_capacity: "3 personas por cabina",
        check_in: "1:00 p.m.",
        check_out: "12:00 m.d.",
        specs: [
            "Terraza",
            "Aire acondicionado",
            "Pantalla",
            "Coffee maker",
            "Parqueo privado",
            "Piscinas",
            "TV cable",
        ],
        images: [
            {
                url: "images/modulos-1.jpeg",
                alt: "exterior cabinas tipo módulo",
            },
            {
                url: "images/modulos-2.jpeg",
                alt: "interior cabinas tipo módulo",
            },
            {
                url: "images/modulos-3.jpeg",
                alt: "baño cabinas tipo módulo",
            },
            {
                url: "images/modulos-4.jpeg",
                alt: "baño cabinas tipo módulo",
            },
            {
                url: "images/modulos-5.jpeg",
                alt: "exterior cabinas tipo módulo",
            },
        ],
    }
]
