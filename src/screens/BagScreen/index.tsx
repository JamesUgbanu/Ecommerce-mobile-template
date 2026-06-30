import { Text } from '@rneui/themed';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import ProductCard from '../../components/ProductCard';
import AppButton from '../../components/common/AppButton';
import EmptyState from '../../components/common/EmptyState';
import { useCommerce } from '../../context/CommerceContext';
import { spacing, typography } from '../../design-system';

const BagScreen = ({ navigation }) => {
  const { cartItems, clearCart, getCartTotal } = useCommerce();

  if (!cartItems.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text h1>Bag</Text>
        <EmptyState
          title='Your bag is empty'
          description='Add products from Home, Shop, or Product Details to start a checkout.'
          iconName='shopping-outline'
        />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text h1>Bag</Text>
      <View style={styles.productGrid}>
        {cartItems.map((product, index) => (
          <ProductCard
            key={`${product.id}-${index}`}
            category={product.category}
            name={product.name}
            price={product.price}
            salePrice={product.salePrice}
            image={product.image}
            imageWidth={155}
            imageHeight={160}
            onPress={() => navigation.navigate('ProductDetails', { product })}
          />
        ))}
      </View>
      <View style={styles.summary}>
        <Text style={styles.summaryLabel}>Total</Text>
        <Text style={styles.summaryTotal}>${getCartTotal().toFixed(2)}</Text>
      </View>
      <AppButton title='Checkout' onPress={() => navigation.navigate('Checkout')} />
      <AppButton title='Clear bag' variant='outline' onPress={clearCart} />
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
  summary: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryLabel: {
    ...typography.bodyStrong,
  },
  summaryTotal: {
    ...typography.price,
  },
});

export default BagScreen;
