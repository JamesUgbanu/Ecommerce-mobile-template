import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { radius } from '../../design-system';
import { useAppTheme } from '../../hooks/useAppTheme';

const RailSelected = () => {
  const { colors } = useAppTheme();

  return <View style={[styles.root, { backgroundColor: colors.accent }]} />;
};

export default memo(RailSelected);

const styles = StyleSheet.create({
  root: {
    height: 3,
    borderRadius: radius.xs,
  },
});
