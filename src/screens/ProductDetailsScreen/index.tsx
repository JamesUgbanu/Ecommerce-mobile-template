import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, useTheme } from '@rneui/themed';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import AppButton from '../../components/common/AppButton';
import GlassSurface from '../../components/surfaces/GlassSurface';
import { useCommerce } from '../../context/CommerceContext';
import { radius, shadows, spacing, typography } from '../../design-system';
import { useAppTheme } from '../../hooks/useAppTheme';
import type { RootStackParamList } from '../../navigation/types';

type ProductDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'ProductDetails'>;

const ProductDetailsScreen = ({ route }: ProductDetailsScreenProps) => {
  const { theme } = useTheme();
  const { colors } = useAppTheme();
  const { addToCart } = useCommerce();
  const { product } = route.params;

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.hero}>
        <Image source={product.image} style={styles.image} contentFit='cover' transition={180} />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.56)']}
          style={StyleSheet.absoluteFill}
        />
        <GlassSurface surfaceRole='overlay' style={styles.heroBadge}>
          <Text style={styles.heroBadgeText}>{product.category}</Text>
        </GlassSurface>
      </View>
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
        <AppButton
          title='Add to bag'
          onPress={() => addToCart(product)}
          containerStyle={styles.button}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hero: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 420,
  },
  content: {
    gap: spacing.lg,
    padding: spacing.xl,
  },
  brand: {
    color: '#9B9B9B',
  },
  heroBadge: {
    borderRadius: radius.pill,
    bottom: spacing.xl,
    left: spacing.xl,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    position: 'absolute',
  },
  heroBadgeText: {
    color: '#FFFFFF',
    ...typography.caption,
  },
  priceRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  price: {
    ...typography.price,
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
    ...shadows.md,
  },
});

export default ProductDetailsScreen;
