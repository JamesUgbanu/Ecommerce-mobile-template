import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Badge, Icon, Text } from '@rneui/themed';
import { scale, verticalScale } from "react-native-size-matters";
import { styles } from './styles';

type ProductCardProps = {
    image?: any;
    imageStyle?: { [key: string]: any };
    label?: string;
    badgeStyle?: { [key: string]: any };
    ratingValue?: number;
    ratingCount?: number;
    ratingColor?: string;
    totalRating?: number;
    ratingSize?: number;
    salePrice?: number;
    price: number;
    currency?: string;
    category: string;
    name: string;
    imageWidth?: number;
    imageHeight?: number;
};

const ProductCard = (props: ProductCardProps) => {
    let {
        imageStyle,
        image,
        label = "NEW",
        badgeStyle,
        ratingValue = 0,
        ratingCount = 5,
        ratingColor = "#FFBA49",
        totalRating = 0,
        ratingSize = 15,
        salePrice,
        price,
        currency = "$",
        category,
        name,
        imageWidth = 135,
        imageHeight = 150
    } = props;

    imageWidth = scale(imageWidth);

    return (
        <View style={[styles(imageWidth).container]}>
            <View style={styles(imageWidth).imageContainer} >
                <TouchableOpacity onPress={() => { }}>
                    <Image source={image} resizeMode="cover" style={[styles(imageWidth).image, imageStyle, { height: verticalScale(imageHeight) }]} />
                    <Badge
                        status="primary"
                        value={label}
                        containerStyle={{ position: 'absolute', top: 10, left: 10 }}
                        badgeStyle={[{ backgroundColor: "#000", borderColor: 'transparent', borderRadius: 25 }, badgeStyle]}
                        textStyle={{ fontSize: 11, fontWeight: "700" }}
                    />
                    <Icon
                        raised
                        name='favorite-border'
                        type='material-icons'
                        color='#9B9B9B'
                        size={18}
                        containerStyle={{ position: 'absolute', bottom: -20, right: -10 }}
                        onPress={() => console.log('hello')} />
                </TouchableOpacity>
            </View>
            <View style={styles().productInfo}>
                <View style={styles().star}>
                    {(() => {
                        let rating = [];
                        for (let i = 1; i <= ratingCount; i++) {
                            if (i <= ratingValue && totalRating !== 0) {
                                rating.push(<Icon key={i} name="star" type="ionicons" color={ratingColor} size={ratingSize} />);
                            } else {
                                rating.push(<Icon key={i} name="star-outline" type="ionicons" color={ratingColor} size={ratingSize} />);
                            }
                        }
                        return rating;
                    })()}
                    <Text h4>({totalRating})</Text>
                </View>
                <Text style={styles().text} h4>{category}</Text>
                <Text style={styles().text}>{name}</Text>
                <View style={styles().priceContainer}>
                    <Text style={[styles().price, salePrice && { textDecorationLine: 'line-through', }]}>{price}{currency}</Text>
                    {salePrice && <Text style={styles().salePrice}>{salePrice}{currency}</Text>}
                </View>
            </View>

        </View>
    );
}


export default ProductCard;