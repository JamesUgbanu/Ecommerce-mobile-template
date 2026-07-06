import React from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';

import { radius, shadows } from '../../design-system';
import { useAppTheme } from '../../hooks/useAppTheme';

type ThemedSurfaceProps = ViewProps & {
  children?: React.ReactNode;
  elevated?: boolean;
  muted?: boolean;
};

const ThemedSurface = ({
  children,
  elevated = true,
  muted = false,
  style,
  ...viewProps
}: ThemedSurfaceProps) => {
  const { colors } = useAppTheme();

  return (
    <View
      {...viewProps}
      style={[
        styles.surface,
        {
          backgroundColor: muted ? colors.surfaceMuted : colors.surface,
          borderColor: colors.borderSubtle,
        },
        elevated ? shadows.sm : shadows.none,
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  surface: {
    borderRadius: radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
  },
});

export default ThemedSurface;
