/**
 * ProductCard.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import { Badge, Text, useTheme } from '@rneui/themed';
import { Image } from 'expo-image';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import AppIcon from '../common/AppIcon';
import GlassSurface from '../surfaces/GlassSurface';
import { styles } from './styles';

type ProductCardProps = {
  image?: any;
  imageStyle?: { [key: string]: any };
  label?: string;
  badgeStyle?: { [key: string]: any };
  buttonStyle?: { [key: string]: any };
  ratingValue?: number;
  ratingCount?: number;
  totalRating?: number;
  ratingSize?: number;
  salePrice?: number;
  price: number;
  currency?: string;
  category: string;
  name: string;
  imageWidth?: number;
  imageHeight?: number;
  button?: {
    iconName?: string;
    iconType?: string;
    iconColor?: string;
    iconSize?: number;
  };
  isFavorite?: boolean;
  onFavoritePress?: () => void;
  onPress?: () => void;
};

const ProductCard = (props: ProductCardProps) => {
  const { theme } = useTheme();
  let {
    imageStyle,
    image,
    label,
    badgeStyle,
    buttonStyle = {
      backgroundColor: '#fff',
    },
    ratingValue = 0,
    ratingCount = 5,
    totalRating = 0,
    ratingSize = 15,
    salePrice,
    price,
    currency = '$',
    category,
    name,
    imageWidth = 135,
    imageHeight = 150,
    button = {
      iconName: 'favorite-border',
      iconType: 'material-icons',
      iconColor: '#9B9B9B',
      iconSize: 18,
    },
    isFavorite = false,
    onFavoritePress,
    onPress,
  } = props;

  imageWidth = scale(imageWidth);

  return (
    <View style={[styles(imageWidth).container]}>
      <View style={styles(imageWidth).imageContainer}>
        <TouchableOpacity
          accessibilityLabel={`Open ${name} details`}
          accessibilityRole='button'
          onPress={onPress}
        >
          <Image
            source={image}
            contentFit='cover'
            transition={180}
            style={[styles(imageWidth).image, imageStyle, { height: verticalScale(imageHeight) }]}
          />
          <Badge
            status='primary'
            value={label ? label : ''}
            containerStyle={{ position: 'absolute', top: 10, left: 8 }}
            badgeStyle={[
              label && {
                backgroundColor: '#000',
                borderColor: 'transparent',
                borderRadius: 25,
                paddingHorizontal: 2,
                height: 24,
              },
              badgeStyle,
            ]}
            textStyle={{ fontSize: 11, fontWeight: '700' }}
          />
          <GlassSurface surfaceRole='control' style={[styles().favoriteButton, buttonStyle]}>
            <AppIcon
              name={button.iconName}
              type={button.iconType}
              color={isFavorite ? theme.colors.error : button.iconColor}
              size={button.iconSize}
              accessibilityLabel={
                isFavorite ? `Remove ${name} from favorites` : `Save ${name} to favorites`
              }
              onPress={onFavoritePress}
            />
          </GlassSurface>
        </TouchableOpacity>
      </View>
      <View style={styles().productInfo}>
        <View style={styles().star}>
          {(() => {
            const rating = [];
            for (let i = 1; i <= ratingCount; i++) {
              if (i <= ratingValue && totalRating !== 0) {
                rating.push(
                  <AppIcon
                    key={i}
                    name='star'
                    type='ionicons'
                    color={theme.colors.warning}
                    size={ratingSize}
                  />
                );
              } else {
                rating.push(
                  <AppIcon
                    key={i}
                    name='star-outline'
                    type='ionicons'
                    color={theme.colors.grey0}
                    size={ratingSize}
                  />
                );
              }
            }
            return rating;
          })()}
          <Text h4>({totalRating})</Text>
        </View>
        <Text style={styles().text} h4>
          {category}
        </Text>
        <Text style={styles().text}>{name}</Text>
        <View style={styles().priceContainer}>
          <Text style={[styles().price, salePrice && { textDecorationLine: 'line-through' }]}>
            {price}
            {currency}
          </Text>
          {salePrice && (
            <Text style={styles().salePrice}>
              {salePrice}
              {currency}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
