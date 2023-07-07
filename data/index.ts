import { images } from "../constants";

export const products = [{
    name: "Evening Dress",
    category: "Dorothy Perkins",
    ratingValue: 3,
    totalRating: 10,
    salePrice: 12,
    price: 15,
    currency: "$",
    image: images.product1
}, {
    name: "Sport Dress",
    category: "Sitily",
    ratingValue: 5,
    totalRating: 2,
    salePrice: 22,
    price: 19,
    currency: "$",
    image: images.product2
}, {
    name: "Sport Dress",
    category: "Dorothy Perkins",
    ratingValue: 3,
    totalRating: 1,
    price: 14,
    currency: "$",
    image: images.product3
}]

export const banner = {
    image: images.bigBanner,
    text: "Fashion Sale",
    buttonText: "check"
}

export const categories = [
    {
        "name": "Women",
        "subcategories": [{
            "name": "New",
            "image": images.image4
        },
        {
            "name": "Clothing",
            "image": images.image1
        },
        {
            "name": "Shoes",
            "image": images.image2
        },
        {
            "name": "Accessories",
            "image": images.image3
        },
        ]
    },
    {
        "name": "Men",
        "subcategories": [
            {
                "name": "New",
                "image": null
            },
            {
                "name": "Clothing",
                "image": null
            },
            {
                "name": "Shoes",
                "image": null
            },
            {
                "name": "Accessories",
                "image": null
            }
        ]
    },
    {
        "name": "Kids",
        "subcategories": [
            {
                "name": "New",
                "image": null
            },
            {
                "name": "Boys",
                "image": null
            },
            {
                "name": "Girls",
                "image": null
            },
            {
                "name": "Baby",
                "image": null
            },
        ]
    }
];

export const categoryBanner = {
    title: "SUMMER SALES",
    subTitle: "Up to 50% off"
}
