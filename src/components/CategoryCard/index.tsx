/**
 * CategoryCard.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import { Text } from '@rneui/themed';
import React from 'react';
import { Dimensions, Image, TouchableOpacity, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { useAppTheme } from '../../hooks/useAppTheme';
import { styles } from './styles';

type CategoryCardProps = {
  image?: any;
  imageStyle?: { [key: string]: any };
  name: string;
  imageWidth?: number;
  imageHeight?: number;
  onPress: () => void;
};

const CategoryCard = (props: CategoryCardProps) => {
  let { imageStyle, image, name, imageWidth = 160, imageHeight = 85, onPress } = props;
  const { colors } = useAppTheme();

  const screenWidth = Dimensions.get('window').width - scale(20);

  imageWidth = scale(imageWidth);
  imageHeight = verticalScale(imageHeight);

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.surface,
            borderColor: colors.borderSubtle,
            width: screenWidth,
          },
        ]}
      >
        <Text style={[styles.text, { color: colors.textPrimary }]}>{name}</Text>
        <Image
          source={image}
          resizeMode='cover'
          style={[styles.image, imageStyle, { height: imageHeight, width: imageWidth }]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
