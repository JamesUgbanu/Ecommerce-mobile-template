import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { radius } from '../../design-system';
import { useAppTheme } from '../../hooks/useAppTheme';

const Rail = () => {
  const { colors } = useAppTheme();

  return <View style={[styles.root, { backgroundColor: colors.textSecondary }]} />;
};

export default memo(Rail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 3,
    borderRadius: radius.xs,
  },
});
