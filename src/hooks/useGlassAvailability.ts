import { useMemo } from 'react';
import { Platform } from 'react-native';

let glassEffectApiAvailable = false;
let liquidGlassAvailable = false;

try {
  const glassEffect = require('expo-glass-effect');
  glassEffectApiAvailable =
    typeof glassEffect.isGlassEffectAPIAvailable === 'function'
      ? glassEffect.isGlassEffectAPIAvailable()
      : false;
  liquidGlassAvailable =
    typeof glassEffect.isLiquidGlassAvailable === 'function'
      ? glassEffect.isLiquidGlassAvailable()
      : false;
} catch {
  glassEffectApiAvailable = false;
  liquidGlassAvailable = false;
}

export const getGlassAvailability = () => {
  const supportsNativeGlass =
    Platform.OS === 'ios' && glassEffectApiAvailable && liquidGlassAvailable;

  return {
    supportsNativeGlass,
    supportsBlurFallback:
      Platform.OS === 'ios' || Platform.OS === 'android' || Platform.OS === 'web',
    platform: Platform.OS,
  };
};

export const useGlassAvailability = () => useMemo(getGlassAvailability, []);
