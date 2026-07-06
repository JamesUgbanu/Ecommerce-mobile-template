import { Text } from '@rneui/themed';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import ProductCard from '../../components/ProductCard';
import EmptyState from '../../components/common/EmptyState';
import { useCommerce } from '../../context/CommerceContext';
import { spacing } from '../../design-system';

const FavoritesScreen = ({ navigation }) => {
  const { favoriteProducts, isFavorite, toggleFavorite } = useCommerce();

  if (!favoriteProducts.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text h1>Favorites</Text>
        <EmptyState
          title='No saved products yet'
          description='Tap the heart on a product card to save it to your wishlist.'
          iconName='heart-outline'
        />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text h1>Favorites</Text>
      <View style={styles.productGrid}>
        {favoriteProducts.map((product) => (
          <ProductCard
            key={product.id}
            category={product.category}
            name={product.name}
            price={product.price}
            salePrice={product.salePrice}
            image={product.image}
            imageWidth={155}
            imageHeight={160}
            isFavorite={isFavorite(product.id)}
            onFavoritePress={() => toggleFavorite(product)}
            onPress={() => navigation.navigate('ProductDetails', { product })}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    gap: spacing.lg,
    padding: spacing.xl,
    paddingBottom: spacing['4xl'],
  },
  emptyContainer: {
    flex: 1,
    gap: spacing.xl,
    justifyContent: 'center',
    padding: spacing.xl,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default FavoritesScreen;
