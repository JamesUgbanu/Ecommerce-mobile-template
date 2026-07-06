import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';

const Notch = (props) => {
  const { colors } = useAppTheme();

  return <View style={[styles.root, { borderTopColor: colors.accent }]} {...props} />;
};

export default memo(Notch);

const styles = StyleSheet.create({
  root: {
    width: 8,
    height: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 8,
  },
});
