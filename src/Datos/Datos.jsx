// import heineken from "../../public/assets/imagenes/Heineken.jpg";


const databaseItems = [
    {
        id: 1,
        category: "Cervezas",
        stock: 2,
        title: "Heineken",
        price: 700,
        imgurl: "../../assets/imagenes/Heineken.jpg",
        detail: "Cerveza Heineken botella de vidrio 1 litro",

    },
    {
        id: 2,
        category: "Cigarros",
        stock: 5,
        title: "Marlboro",
        price: 550,
        imgurl: "../../assets/imagenes/marlboro.png",
        detail: "Cigarrillos Marlboro de 20 Unidades",

    },
    {
        id: 3,
        category: "BebidaBlanca",
        stock: 10,
        title: "Smirnoff",
        price: 1500,
        imgurl: "../../assets/imagenes/smirnoff.jpg",
        detail: "Smirnoff (Vodka) botella de Vidrio, 1 litro",

    },
    {
        id: 4,
        category: "BebidasSinAlcohol",
        stock: 7,
        title: "Baggio",
        price: 400,
        imgurl: "../../assets/imagenes/baggio.jpg",
        detail: "Jugo Baggio de Naranja, de 1 litro",

    },
    {
        id: 5,
        category: "BebidasSinAlcohol",
        stock: 8,
        title: "Cepita",
        price: 420,
        imgurl: "../../assets/imagenes/cepita.webp",
        detail: "Cepita Multifruta, 1 litro",

    },
    {
        id: 6,
        category: "BebidasNegras",
        stock: 12,
        title: "Fernet Branca",
        price: 1600,
        imgurl: "../../assets/imagenes/Fernet.webp",
        detail: "Fernet Branca 750ml",

    },
    {
        id: 7,
        category: "BebidasSinAlcohol",
        stock: 24,
        title: "Coca-cola",
        price: 650,
        imgurl: "../../assets/imagenes/Coca-cola.jpg",
        detail: "Coca-cola 2,25 lt",

    },
    {
        id: 8,
        category: "Cervezas",
        stock: 15,
        title: "Brahma",
        price: 560,
        imgurl: "../../assets/imagenes/brahma.webp",
        detail: "Cerveza Brahma botella de vidrio 1 litro",

    },
    {
        id: 9,
        category: "BebidasNegras",
        stock: 8,
        title: "Santa Filomena",
        price: 500,
        imgurl: "../../assets/imagenes/santa filomena.png",
        detail: "Vino Santa Filomena botella de vidrio 1 litro",
    },
    {
        id: 10,
        category: "BebidaBlanca",
        stock: 14,
        title: "Cosecha Tardia",
        price: 1000,
        imgurl: "../../assets/imagenes/cosecha tardia.jpg",
        detail: "Vino Blanco Cosecha tardia, botella de vidrio 750 ml",
    },
];

export default function getItems() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(databaseItems);
        }, 0);
    });
}

export function getSingleItem(itemid) {
    let itemReq = databaseItems.find((item) => {
        return item.id === parseInt(itemid);
    });

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (itemReq !== undefined) resolve(itemReq);
            else reject("Item no encontrado ");
        }, 200);
    });
}

export function getItemsByCategory(categoryid) {
    let itemsCat = databaseItems.filter((item) => item.category === categoryid);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(itemsCat);
        }, 0);
    });
}