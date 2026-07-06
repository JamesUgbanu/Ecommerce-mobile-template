import { StyleSheet } from 'react-native';

import { radius, shadows, spacing, typography } from '../../design-system';

export const styles = (width?) =>
  StyleSheet.create({
    container: {
      flexBasis: '44%',
      borderRadius: radius.lg,
      width,
      ...shadows.sm,
      marginHorizontal: spacing.md,
      marginVertical: spacing.md,
      justifyContent: 'flex-start',
    },
    favoriteButton: {
      alignItems: 'center',
      borderRadius: radius.pill,
      bottom: -20,
      height: 44,
      justifyContent: 'center',
      position: 'absolute',
      right: -10,
      width: 44,
    },
    imageContainer: {
      flex: 1,
      width,
    },
    image: {
      borderRadius: radius.md,
      width,
    },
    productInfo: {
      marginTop: spacing.md,
    },
    star: {
      flexDirection: 'row',
      alignContent: 'center',
    },
    text: {
      marginTop: spacing.xxs,
      ...typography.bodyStrong,
    },
    priceContainer: {
      flexDirection: 'row',
    },
    price: {
      fontSize: typography.caption.fontSize,
      marginRight: spacing.xs,
    },
    salePrice: {
      ...typography.caption,
    },
    strikethrough: {
      textDecorationLine: 'line-through',
    },
  });
