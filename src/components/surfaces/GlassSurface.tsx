import { BlurView } from 'expo-blur';
import React from 'react';
import {
  Platform,
  type StyleProp,
  StyleSheet,
  View,
  type ViewProps,
  type ViewStyle,
} from 'react-native';

import { type GlassSurfaceRole, glassTokens, radius, shadows } from '../../design-system';
import { useAppTheme } from '../../hooks/useAppTheme';
import { useGlassAvailability } from '../../hooks/useGlassAvailability';

let GlassViewComponent: React.ComponentType<any> | undefined;

try {
  GlassViewComponent = require('expo-glass-effect').GlassView;
} catch {
  GlassViewComponent = undefined;
}

type GlassSurfaceProps = ViewProps & {
  children?: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
  disableNativeGlass?: boolean;
  elevated?: boolean;
  interactive?: boolean;
  surfaceRole?: GlassSurfaceRole;
  style?: StyleProp<ViewStyle>;
};

const getFallbackColor = (role: GlassSurfaceRole, mode: 'light' | 'dark') => {
  const token = glassTokens[role];
  return mode === 'dark' ? token.darkFallbackColor : token.lightFallbackColor;
};

const getTintColor = (role: GlassSurfaceRole, mode: 'light' | 'dark') => {
  const token = glassTokens[role];
  return mode === 'dark' ? token.darkTintColor : token.lightTintColor;
};

const getBlurTint = (mode: 'light' | 'dark') => (mode === 'dark' ? 'dark' : 'light');

const GlassSurface = ({
  children,
  contentStyle,
  disableNativeGlass = false,
  elevated = true,
  interactive = false,
  surfaceRole = 'card',
  style,
  ...viewProps
}: GlassSurfaceProps) => {
  const { mode } = useAppTheme();
  const { supportsBlurFallback, supportsNativeGlass } = useGlassAvailability();
  const token = glassTokens[surfaceRole];

  const containerStyle = [
    styles.base,
    { borderColor: token.borderColor, backgroundColor: getFallbackColor(surfaceRole, mode) },
    elevated ? shadows.glass : shadows.none,
    style,
  ];

  if (!disableNativeGlass && supportsNativeGlass && GlassViewComponent) {
    return (
      <GlassViewComponent
        {...viewProps}
        colorScheme={mode}
        glassEffectStyle={token.glassEffectStyle}
        isInteractive={interactive}
        style={containerStyle}
        tintColor={getTintColor(surfaceRole, mode)}
      >
        {children ? <View style={contentStyle}>{children}</View> : null}
      </GlassViewComponent>
    );
  }

  if (supportsBlurFallback && Platform.OS !== 'android') {
    return (
      <BlurView
        {...viewProps}
        intensity={token.blurIntensity}
        style={containerStyle}
        tint={getBlurTint(mode)}
      >
        <View
          style={[StyleSheet.absoluteFill, { backgroundColor: getTintColor(surfaceRole, mode) }]}
        />
        {children ? <View style={contentStyle}>{children}</View> : null}
      </BlurView>
    );
  }

  return (
    <View {...viewProps} style={containerStyle}>
      {children ? <View style={contentStyle}>{children}</View> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.xl,
    borderWidth: StyleSheet.hairlineWidth,
    overflow: 'hidden',
  },
});

export default GlassSurface;
