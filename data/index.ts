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
    image: images.product2,
    discount: '-20%'
}, {
    name: "Sport Dress",
    category: "Dorothy Perkins",
    price: 14,
    currency: "$",
    image: images.product3
}, {
    name: "Light Blouse",
    category: "Dorothy Perkins",
    ratingValue: 4,
    totalRating: 50,
    price: 12,
    currency: "$",
    image: images.product3,
    discount: '-20%'
}]

export const banner = {
    image: images.bigBanner,
    text: "Fashion Sale",
    buttonText: "check"
}

export const visualSearchBanner = {
    image: images.visualBanner,
    text: "Search for an outfit by taking a photo or uploading an image",
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

export const tags = ["T-shirts", "Crop tops", "Blouses", "sport", "Light dress"]

export const sortItems = [{
    id: "popularity",
    name: "Popular"
}, {
    id: "newest",
    name: "Newest"
}, {
    id: "review",
    name: "Customer review"
}, {
    id: "asc",
    name: "Price: lowest to high"
}, {
    id: "desc",
    name: "Price: highest to low"
}]

export const colors = [{
    color: 'black',
    selected: true
},
{
    color: 'grey',
    selected: false
}, {
    color: 'red',
    selected: false
}, {
    color: 'green',
    selected: false
}, {
    color: 'gold',
    selected: true
},
{
    color: 'blue',
    selected: false
}];

export const sizes = [{
    size: 'XS',
    selected: false
},
{
    size: 'S',
    selected: true
}, {
    size: 'M',
    selected: true
}, {
    size: 'L',
    selected: false
}, {
    size: 'XL',
    selected: false
}];

export const productCategories = ["All", "Women", "Men", "Boys", "Girls"];
