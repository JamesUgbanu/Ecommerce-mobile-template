import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';

const THUMB_RADIUS_LOW = 11;
const THUMB_RADIUS_HIGH = 11;

const Thumb = ({ name }) => {
  const { colors } = useAppTheme();

  return (
    <View
      style={[
        name === 'high' ? styles.rootHigh : styles.rootLow,
        { backgroundColor: colors.accent, borderColor: colors.accent },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  rootLow: {
    width: THUMB_RADIUS_LOW * 2,
    height: THUMB_RADIUS_LOW * 2,
    borderRadius: THUMB_RADIUS_LOW,
    borderWidth: 2,
  },
  rootHigh: {
    width: THUMB_RADIUS_HIGH * 2,
    height: THUMB_RADIUS_HIGH * 2,
    borderRadius: THUMB_RADIUS_HIGH,
    borderWidth: 2,
  },
});

export default memo(Thumb);
