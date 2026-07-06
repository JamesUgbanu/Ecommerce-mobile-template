import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { radius, spacing, typography } from '../../design-system';
import { useAppTheme } from '../../hooks/useAppTheme';

const Label = ({ text, ...restProps }) => {
  const { colors } = useAppTheme();

  return (
    <View style={[styles.root, { backgroundColor: colors.accent }]} {...restProps}>
      <Text style={[styles.text, { color: colors.textInverse }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: spacing.sm,
    borderRadius: radius.xs,
  },
  text: {
    ...typography.button,
  },
});

export default memo(Label);
