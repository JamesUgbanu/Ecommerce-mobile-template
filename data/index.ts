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