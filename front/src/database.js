import { data } from "jquery"

const database = [
    // CAMISETAS
    {
        "id": 1,
        "name": "Tee Fresh Black",
        "description": "Oversized, estampa fresh em alto relevo.",
        "price": "189",
        "images": [
            "1_1", "1_2", "1_3"
        ]
    },
    {
        "id": 2,
        "name": "Tee Spiderman Black",
        "description": "Oversized, estampa silk na frente e atrás.",
        "price": "199",
        "images": [
            "2_1", "2_2", "2_3"
        ]
    },
    {
        "id": 3,
        "name": "Tee Iceberg Navy",
        "description": "Oversized, estampa silk nas costas.",
        "price": "189",
        "images": [
            "3_1", "3_2", "3_3"
        ]
    },
    {
        "id": 4,
        "name": "Tee Script Wine",
        "description": "Oversized, estampa silk.",
        "price": "199",
        "images": [
            "4_1", "4_2", "4_3"
        ]
    },
    {
        "id": 5,
        "name": "Tee DVD Black",
        "description": "Oversized, estampa silk na frente e atrás.",
        "price": "189",
        "images": [
            "5_1", "5_2", "5_3"
        ]
    },
    {
        "id": 6,
        "name": "Dyed Tee Bubbly Black",
        "description": "Oversized, 100% algodão, bordada.",
        "price": "167.3",
        "images": [
            "6_1", "6_2", "6_3"
        ]
    },

    // CALÇAS
    {
        "id": 7,
        "name": "Carpenter Pants Coast Blue",
        "description": "Costura reta, estilo carpinteiro.",
        "price": "459",
        "images": [
            "7_1", "7_2", "7_3"
        ]
    },
    {
        "id": 8,
        "name": "Smokey Pants Black",
        "description": "Costura reta, bolsos cargo, elástico na barra.",
        "price": "539",
        "images": [
            "8_1", "8_2", "8_3"
        ]
    },
    {
        "id": 9,
        "name": "Smokey Pants Grey",
        "description": "Costura reta, bolsos cargo, elástico na barra.",
        "price": "539",
        "images": [
            "9_1", "9_2", "9_3"
        ]
    },
    {
        "id": 10,
        "name": "Jeans Pants Logo Line Purple",
        "description": "Costura reta, etiqueta de couro, patch h-line no bolso traseiro.",
        "price": "479",
        "images": [
            "10_1", "10_2", "10_3"
        ]
    },
    {
        "id": 11,
        "name": "Rust Denim Pants Black",
        "description": "Costura reta, lavagem personalizada, patch no bolso.",
        "price": "539",
        "images": [
            "11_1", "11_2", "11_3"
        ]
    },
    {
        "id": 12,
        "name": "Ghost Rider Jeans Pants Black",
        "description": "Costura reta, lavagem personalizada, corrente removível.",
        "price": "609",
        "images": [
            "12_1", "12_2", "12_3"
        ]
    },
    
    // MOLETONS
    {
        "id": 13,
        "name": "Bleached Hoodie Logo Green",
        "description": "100% algodão, pintura personalizada..",
        "price": "412",
        "images": [
            "13_1", "13_2", "13_3"
        ]
    },
    {
        "id": 14,
        "name": "Crewneck Hammer Black",
        "description": "Gráfico bordado, toque confortável.",
        "price": "409",
        "images": [
            "14_1", "14_2", "14_3"
        ]
    },
    {
        "id": 15,
        "name": "Hoodie Maps Black",
        "description": "Estampa silk, capuz com regulagem, toque confortável.",
        "price": "359",
        "images": [
            "15_1", "15_2", "15_3"
        ]
    },
    {
        "id": 16,
        "name": "Hoodie Picasso Black",
        "description": "Gráfico bordado, capuz com regulagem.",
        "price": "379",
        "images": [
            "16_1", "16_2", "16_3"
        ]
    },
    {
        "id": 17,
        "name": "Hoodie Due Black/Green",
        "description": "Capuz colorido, bolso canguru.",
        "price": "429",
        "images": [
            "17_1", "17_2", "17_3"
        ]
    },
    {
        "id": 18,
        "name": "Hoodie Draco Black",
        "description": "Gráfico bordado, capuz com regulagem, bolso canguru.",
        "price": "279.3",
        "images": [
            "18_1", "18_2", "18_3"
        ]
    },
    
    // SHORTS
    {
        "id": 19,
        "name": "Shorts Sensi Blue",
        "description": "Estampa silk, mini patch bordado, bolso embutido",
        "price": "319",
        "images": [
            "19_1", "19_2", "19_3"
        ]
    },
    {
        "id": 20,
        "name": "Jeans Shorts Hustle Blue",
        "description": "Lavagem estonada, costura personalizada.",
        "price": "309",
        "images": [
            "20_1", "20_2", "20_3"
        ]
    },
    {
        "id": 21,
        "name": "Shorts Blink Black",
        "description": "Bolsos lateiras, bolso traseiro, bordado.",
        "price": "479",
        "images": [
            "21_1", "21_2", "21_3"
        ]
    },
    {
        "id": 22,
        "name": "Shorts Logo Line Purple",
        "description": "Sem forro, bolsos lateiras, patch h-line frontal.",
        "price": "349",
        "images": [
            "22_1", "22_2", "22_3"
        ]
    },
    {
        "id": 23,
        "name": "Shorts Daystar Brown",
        "description": "Bolsos cargo, cinto de fita, gráfico silk.",
        "price": "349",
        "images": [
            "23_1", "23_2", "23_3"
        ]
    },
    {
        "id": 24,
        "name": "Shorts Colored Grey",
        "description": "Bolso com fole lateral, costuras coloridas.",
        "price": "279",
        "images": [
            "24_1", "24_2", "24_3"
        ]
    },
]

export default database;