import { Text } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppButton from '../../components/common/AppButton';
import EmptyState from '../../components/common/EmptyState';
import ThemedSurface from '../../components/surfaces/ThemedSurface';
import { useCommerce } from '../../context/CommerceContext';
import { spacing, typography } from '../../design-system';

const CheckoutScreen = ({ navigation }) => {
  const { cartItems, checkout, checkoutComplete, getCartTotal, resetCheckout } = useCommerce();

  if (checkoutComplete) {
    return (
      <View style={styles.container}>
        <EmptyState
          title='Order placed'
          description='This template checkout completed locally. Connect a payment/backend provider to create real orders.'
          iconName='check-circle-outline'
        />
        <AppButton
          title='Continue shopping'
          onPress={() => {
            resetCheckout();
            navigation.navigate('App', { screen: 'Home' });
          }}
        />
      </View>
    );
  }

  if (!cartItems.length) {
    return (
      <View style={styles.container}>
        <EmptyState
          title='Nothing to checkout'
          description='Add at least one product to your bag before starting checkout.'
          iconName='cart-outline'
        />
        <AppButton
          title='Browse products'
          onPress={() => navigation.navigate('App', { screen: 'Home' })}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text h1>Checkout</Text>
      <ThemedSurface style={styles.card}>
        <Text style={styles.sectionTitle}>Order summary</Text>
        {cartItems.map((product, index) => (
          <View key={`${product.id}-${index}`} style={styles.row}>
            <Text style={styles.itemName}>{product.name}</Text>
            <Text>${(product.salePrice ?? product.price).toFixed(2)}</Text>
          </View>
        ))}
        <View style={styles.totalRow}>
          <Text style={styles.sectionTitle}>Total</Text>
          <Text style={styles.total}>${getCartTotal().toFixed(2)}</Text>
        </View>
      </ThemedSurface>
      <AppButton title='Place order' onPress={checkout} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    gap: spacing.md,
    padding: spacing.xl,
  },
  container: {
    flex: 1,
    gap: spacing.lg,
    justifyContent: 'center',
    padding: spacing.xl,
  },
  itemName: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    gap: spacing.md,
    justifyContent: 'space-between',
  },
  sectionTitle: {
    ...typography.bodyStrong,
  },
  total: {
    ...typography.price,
  },
  totalRow: {
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: spacing.md,
  },
});

export default CheckoutScreen;
