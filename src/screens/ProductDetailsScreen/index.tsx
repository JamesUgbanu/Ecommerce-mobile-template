import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, useTheme } from '@rneui/themed';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

import type { RootStackParamList } from '../../navigation/types';

type ProductDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'ProductDetails'>;

const ProductDetailsScreen = ({ route }: ProductDetailsScreenProps) => {
  const { theme } = useTheme();
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={product.image} style={styles.image} resizeMode='cover' />
      <View style={styles.content}>
        <Text h4 style={styles.brand}>
          {product.category}
        </Text>
        <Text h1>{product.name}</Text>
        <View style={styles.priceRow}>
          <Text style={[styles.price, product.salePrice ? styles.strikethrough : undefined]}>
            {product.currency}
            {product.price}
          </Text>
          {product.salePrice ? (
            <Text style={[styles.price, { color: theme.colors.error }]}>
              {product.currency}
              {product.salePrice}
            </Text>
          ) : null}
        </View>
        <Text h3 style={styles.description}>
          {product.description ??
            'This starter template keeps the product detail experience intentionally lightweight so it is easy to replace with real catalog data later.'}
        </Text>
        <Button title='Add to bag' onPress={() => {}} containerStyle={styles.button} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: 420,
  },
  content: {
    gap: 16,
    padding: 20,
  },
  brand: {
    color: '#9B9B9B',
  },
  priceRow: {
    flexDirection: 'row',
    gap: 12,
  },
  price: {
    fontSize: 24,
    fontWeight: '700',
  },
  strikethrough: {
    color: '#9B9B9B',
    textDecorationLine: 'line-through',
  },
  description: {
    color: '#444444',
    lineHeight: 22,
  },
  button: {
    marginTop: 8,
  },
});

export default ProductDetailsScreen;
