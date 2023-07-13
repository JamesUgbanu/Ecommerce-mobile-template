/**
 * CategoryCard.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import React from 'react';
import { View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Text, withTheme } from '@rneui/themed';
import { scale, verticalScale } from "react-native-size-matters";
import { styles } from './styles';

type CategoryCardProps = {
    image?: any;
    imageStyle?: { [key: string]: any };
    name: string;
    imageWidth?: number;
    imageHeight?: number;
    onPress: () => void;
    theme?: any;
};

const CategoryCard = (props: CategoryCardProps) => {
    let {
        imageStyle,
        image,
        name,
        imageWidth = 160,
        imageHeight = 85,
        onPress,
        theme
    } = props;

    const screenWidth = Dimensions.get("window").width - scale(20);

    imageWidth = scale(imageWidth);
    imageHeight = verticalScale(imageHeight);

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles(theme.colors.white).container, { width: screenWidth }]}>
                <Text style={styles(undefined, theme.colors.secondary).text}>{name}</Text>
                <Image source={image} resizeMode="cover" style={[styles().image, imageStyle, { height: imageHeight, width: imageWidth }]} />
            </View>
        </TouchableOpacity>
    );
}


export default withTheme(CategoryCard);