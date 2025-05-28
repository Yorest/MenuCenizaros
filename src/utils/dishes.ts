import type { CategoryFoodType } from "@/utils/dishesTypes";

export const dishesItems: CategoryFoodType[] = [
    {
        category: "Del potrero",
        note: "Todos incluyen papas en gajo y ensalada.",
        image: {
            src: "images/Rib_Eyes.png",
            alt: "Corte de Res Rib Eyes",
            title: "Corte de Res Rib Eyes",
        },
        dishes: [
            {
                name: "Corte de res Rib Eyes Angus",
                description: "",
                id: "Rib_eyes",
                price: 11600,
            },
            {
                name: "Lomito de res",
                description: "",
                id: "Lomito_res",
                price: 9400,
            },
            {
                name: "Lomito mignon",
                description: "",
                id: "Lomito_mignon",
                price: 9400,
            },
        ],
        id: "delpotrero",
    },
    {
        category: "Especiales",
        note: "",
        image: {
            src: "images/Especiales.png",
            alt: "Especiales",
            title: "Especiales",
        },
        dishes: [
            {
                name: "Canasta de chicharrones mixta",
                description: "",
                id: "Canasta_chicharrones",
                price: 6900,
            },
            {
                name: "Costilla La Choza a la parilla",
                description: "",
                id: "Costilla_parilla",
                price: 6900,
            },
            {
                name: "Lomo de cerdo a la parrillla",
                description: "",
                id: "Lomo_cerdo_parrilla",
                price: 7900,
            },
            {
                name: "Costilla de cerdo frita",
                description: "",
                id: "Costilla_cerdo_frita",
                price: 6400,
            },
            {
                name: "Vigorón de costilla frita",
                description: "",
                id: "Vigoron_costilla_frita",
                price: 6400,
            },
            {
                name: "Vigorón mixto (concha y carne)",
                description: "",
                id: "Vigoron_mixto",
                price: 4900,
            },
            {
                name: "Mega chifrijo de costilla de cerdo",
                description: "",
                id: "Mega_chifrijo",
                price: 6200,
            },
            {
                name: "Chifrijo Mixto Mediano",
                description: "",
                id: "Chifrijo_mixto_mediano",
                price: 4300,
            },
            {
                name: "Chifrijo Mixto Grande",
                description: "",
                id: "Chifrijo_mixto_grande",
                price: 5700,
            },
        ],
        id: "especiales",
    },
    {
        category: "Mariscos",
        note: "",
        image: {
            src: "images/Mariscos.png",
            alt: "Mariscos",
            title: "Mariscos",
        },
        dishes: [
            {
                name: "Pargo entero",
                description: "Según peso",
                id: "Pargo_entero",
                price: 0,
            },
            {
                name: "Mariscada al ajillo o crema de coco",
                description: "",
                id: "Mariscada_ajillo",
                price: 8200,
            },
            {
                name: "Camarones pinky",
                description: "(al ajo o empanizados)",
                id: "Camarones_pinky",
                price: 6900,
            },
            {
                name: "Canastas de patacones con camarones al ajillo",
                description: "",
                id: "Canastas_patacones",
                price: 6900,
            },
            {
                name: "Filet de corvina al gusto",
                description: "(empanizado, al ajo o plancha)",
                id: "Filet_corvina",
                price: 6700,
            },
            {
                name: "Sopa de mariscos",
                description: "(agua o leche)",
                id: "Sopa_mariscos",
                price: 6900,
            },
            {
                name: "Filet de corvina con camarones",
                description: "(salsa roja, blanca o ajillo)",
                id: "Filet_corvina_camarones",
                price: 9600,
            },
            {
                name: "Dedos de pescado",
                description: "",
                id: "Dedos_pescado",
                price: 4900,
            },
        ],
        id: "mariscos",
    },
    {
        category: "Ceviches",
        note: "Todos incluyen 2 patacones",
        image: {
            src: "images/Ceviches.png",
            alt: "Ceviches",
            title: "Ceviches",
        },
        dishes: [
            {
                name: "Ceviche de pescado",
                description: "(marlin blanco)",
                id: "Ceviche_pescado",
                price: 6400,
            },
            {
                name: "Ceviche mixto",
                description: "(pescado y camarón)",
                id: "Ceviche_mixto",
                price: 6900,
            },
            {
                name: "Ceviche vuelve a la vida",
                description: "(pescado, pulpo, calamar, camarón)",
                id: "Ceviche_vuelve_vida",
                price: 8700,
            },
        ],
        id: "ceviches",
    },
    {
        category: "Surtidos",
        note: "",
        image: {
            src: "images/Surtidos.png",
            alt: "Surtidos",
            title: "Surtidos",
        },
        dishes: [
            {
                name: "Surtido Parrillero",
                description:
                    "(4 personas) - Costilla de cerdo, corte de res, pollo, lomo de cerdo, chorizo parrillero, chimichurri argentino, pico de gallo, vinagreta de bananito, tortillas tostadas, papas fritas y yuca frita.",
                id: "Surtido_parrillero",
                price: 25000,
            },
            {
                name: "Surtido Mar y Tierra ",
                description:
                    "(6 personas) - Costilla de cerdo, pollo, corte de res, lomo de cerdo, mariscada al ajo, patacones, chimichurri argentino, vinagreta de bananito , pico de gallo, papas fritas y yuca frita.",
                id: "Surtido_mar_tierra",
                price: 33000,
            },
        ],
        id: "surtidos",
    },
    {
        category: "Pollo",
        note: "Todos incluyen papas fritas y ensalada",
        image: {
            src: "images/Pollo.png",
            alt: "Pollo",
            title: "Pollo",
        },
        dishes: [
            {
                name: "Filet de pollo",
                description: "",
                id: "Filet_pollo",
                price: 4900,
            },
            {
                name: "Dedos de pollo",
                description: "",
                id: "Dedos_pollo",
                price: 4900,
            },
            {
                name: "Alitas de pollo",
                description: "(BBQ o Bufalo)",
                id: "Alitas_pollo",
                price: 4500,
            },
            {
                name: "Filet de pollo en salsa blanca",
                description: "",
                id: "Filet_pollo_blanca",
                price: 5900,
            },
            {
                name: "Fajitas mixtas",
                description: "(pollo y res)",
                id: "Fajitas_mixtas",
                price: 6900,
            },
        ],
        id: "pollo",
    },
    {
        category: "Arroces",
        note: "Todos incluyen papas fritas y ensalada",
        image: {
            src: "images/Arroces.png",
            alt: "Arroces",
            title: "Arroces",
        },
        dishes: [
            {
                name: "Arroz con pollo",
                description: "",
                id: "Arroz_pollo",
                price: 4200,
            },
            {
                name: "Arroz con camarones",
                description: "",
                id: "Arroz_camarones",
                price: 6900,
            },
            {
                name: "Arroz con mariscos",
                description: "",
                id: "Arroz_mariscos",
                price: 6300,
            },
            {
                name: "Arroz la choza",
                description: "(pollo, 2 chicharrones y jamón)",
                id: "Arroz_la_choza",
                price: 4900,
            },
            {
                name: "Camarones con arroz",
                description: "",
                id: "Camarones_arroz",
                price: 9500,
            },
        ],
        id: "arroces",
    },
    {
        category: "Comidas Rápidas",
        note: "",
        image: {
            src: "images/ComidasRapidas.png",
            alt: "Comidas Rápidas",
            title: "Comidas Rápidas",
        },
        dishes: [
            {
                name: "Nachos",
                description: "",
                id: "Nachos",
                price: 4700,
            },
            {
                name: "Salchipapicarne",
                description: "",
                id: "Salchipapicarne",
                price: 4300,
            },
            {
                name: "Papicarne",
                description: "",
                id: "Papicarne",
                price: 3500,
            },
            {
                name: "Orden de papas fritas",
                description: "",
                id: "Orden_papas_fritas",
                price: 1900,
            },
            {
                name: "Hamburguesa sencilla",
                description: "",
                id: "Hamburguesa_sencilla",
                price: 3300,
            },
            {
                name: "Hamburguesa Cenízaro",
                description: "",
                id: "Hamburguesa_Cenizaro",
                price: 4800,
            },
            {
                name: "Salchipapas",
                description: "",
                id: "Salchipapas",
                price: 3200,
            },
            {
                name: "Casados",
                description:
                    "Opciones: Chicharrones, filet de pollo, carne en salsa, bistec de res. Acompañamientos: Arroz, frijoles, queso y ensalada.",
                id: "Casados",
                price: 3900,
            },
        ],
        id: "comidas_rapidas",
    },
    {
        category: "Cocteles",
        note: "",
        image: {
            src: "images/Cocteles.png",
            alt: "Cocteles",
            title: "Cocteles",
        },
        dishes: [
            {
                name: "Piña colada",
                description: "",
                id: "Piña_colada",
                price: 3500,
            },
            {
                name: "Daiquiri fresa",
                description: "",
                id: "Daiquiri_fresa",
                price: 3500,
            },
            {
                name: "Mojito",
                description: "",
                id: "Mojito",
                price: 3500,
            },
            {
                name: "Margarita",
                description: "",
                id: "Margarita",
                price: 3500,
            },
        ],
        id: "cocteles",
    },
    {
        category: "Batidos",
        note: "",
        image: {
            src: "images/Batidos.png",
            alt: "Batidos",
            title: "Batidos",
        },
        dishes: [
            {
                name: "Fresa en leche",
                description: "",
                id: "Fresa_leche",
                price: 2200,
            },
            {
                name: "Guanabana en leche",
                description: "",
                id: "Guanabana_leche",
                price: 2200,
            },
            {
                name: "Limonada en agua",
                description: "",
                id: "Limonada_agua",
                price: 1800,
            },
            {
                name: "Limonada con hierbabuena en agua",
                description: "",
                id: "Limonada_hierbabuena_agua",
                price: 1800,
            },
            {
                name: "Piña",
                description: "",
                id: "Piña",
                price: 1800,
            },
            {
                name: "Frutas en agua",
                description: "",
                id: "Frutas",
                price: 1800,
            },
            {
                name: "Fresa en agua",
                description: "",
                id: "Fresa_agua",
                price: 1800,
            },
            {
                name: "Guanabana en agua",
                description: "",
                id: "Guanabana_agua",
                price: 1800,
            },
            {
                name: "Sandía en agua",
                description: "",
                id: "Sandia_agua",
                price: 1800,
            },
        ],
        id: "batidos",
    },
];
