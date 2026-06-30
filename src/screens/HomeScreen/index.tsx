/**
 * HomeScreen.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import { Text, useTheme } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, ImageBackground, ScrollView, TouchableHighlight, View } from 'react-native';
import ErrorBoundary from '../../components/HOC/ErrorBoundary';
import ProductCard from '../../components/ProductCard';
import AppButton from '../../components/common/AppButton';
import SectionHeader from '../../components/common/SectionHeader';
import { useCommerce } from '../../context/CommerceContext';
import { banner, products } from '../../data';
import { useAppTheme } from '../../hooks/useAppTheme';
import { styles } from './styles';

const Home = ({ navigation }) => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { colors } = useAppTheme();
  const { isFavorite, toggleFavorite } = useCommerce();
  const screenHeight = Dimensions.get('window').height;
  const sixtyFivePercentOfScreenHeight = screenHeight * 0.67;

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <View style={styles().container}>
        <View style={styles(sixtyFivePercentOfScreenHeight).imageContainer}>
          <ImageBackground source={banner.image} resizeMode='cover' style={styles().image}>
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.68)']}
              style={styles().heroGradient}
            />
            <Text style={styles().text}>{banner.text}</Text>
            <AppButton
              title={banner.buttonText}
              onPress={() => navigation.navigate('Shop')}
              variant='glass'
              containerStyle={styles().button}
            />
          </ImageBackground>
        </View>
        <SectionHeader
          title={t('common:new')}
          subtitle={t('common:homeSubTitle')}
          actionLabel={t('common:viewAll')}
          onActionPress={() => navigation.navigate('Shop')}
        />
        <ScrollView horizontal>
          <View style={styles().productContainer}>
            {products &&
              products.map((product, index) => (
                <ProductCard
                  key={index}
                  category={product.category}
                  name={product.name}
                  ratingValue={product.ratingValue}
                  totalRating={product.totalRating}
                  price={product.price}
                  salePrice={product.salePrice}
                  image={product.image}
                  buttonStyle={{ backgroundColor: `${theme.colors.primary}` }}
                  isFavorite={isFavorite(product.id)}
                  label='NEW'
                  onFavoritePress={() => toggleFavorite(product)}
                  onPress={() => navigation.navigate('ProductDetails', { product })}
                />
              ))}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default ErrorBoundary(Home);
