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
            {
                url: "images/modulos-6.jpeg",
                alt: "exterior cabinas tipo módulo",
            },
            {
                url: "images/modulos-7.jpeg",
                alt: "desayunador frontal cabinas tipo módulo",
            },
            {
                url: "images/modulos-8.jpeg",
                alt: "desayunador cabinas tipo módulo",
            },
        ],
    },
    {
        title: "Cabaña equipada",
        description:
            "Especialmente diseñadas para grupo de amigos o familias. El hospedaje incluye el uso de nuestras instalaciones (a partir de las 9 a.m.).",
        price_per_night: 60000,
        price_description: "para 5 personas",
        price_per_person: 12000,
        maximum_capacity: "8 personas por cabaña",
        check_in: "1:00 p.m.",
        check_out: "12:00 m.d.",
        specs: [
            "Aire acondicionado",
            "Pantalla",
            "TV cable",
            "Refrigerador",
            "coffee maker",
            "Sartén eléctrico",
            "Vajilla",
            "Olla arrocera",
            "Piscinas",
            "Parqueo privado",
        ],
        images: [
            {
                url: "images/cabaña-1.jpeg",
                alt: "exterior cabaña",
            },
            {
                url: "images/cabaña-2.jpeg",
                alt: "interior cabaña",
            },
            {
                url: "images/cabaña-3.jpeg",
                alt: "cocina cabaña",
            },
            {
                url: "images/cabaña-4.jpeg",
                alt: "cuarto cabaña",
            },
            {
                url: "images/cabaña-6.jpeg",
                alt: "comedor cabaña",
            },
        ],
    },
    {
        title: "Casa equipada",
        description:
            "Especialmente para grupo de amigos o familias. El hospedaje incluye el uso de nuestras instalaciones (a partir de las 9 a.m.).",
        price_per_night: 96000,
        price_description: "para 8 personas",
        price_per_person: 12000,
        maximum_capacity: "10 personas por casa",
        check_in: "1:00 p.m.",
        check_out: "12:00 m.d.",
        specs: [
            "3 habitaciones",
            "Cocina equipada",
            "Sala equipada",
            "Baño",
            "Corredores",
            "Aire acondicionado",
            "WIFI",
        ],
        images: [
            {
                url: "images/casa-1.jpeg",
                alt: "exterior casa",
            },
            {
                url: "images/casa-2.jpeg",
                alt: "interior casa",
            },
            {
                url: "images/casa-3.jpeg",
                alt: "cocina casa",
            },
            {
                url: "images/casa-4.jpeg",
                alt: "baño casa",
            },
        ],
    }
]
