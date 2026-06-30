import { useEffect, useMemo, useState } from 'react';
import { AccessibilityInfo, Platform } from 'react-native';

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

export const getGlassAvailability = (isReduceTransparencyEnabled = false) => {
  const supportsNativeGlass =
    process.env.EXPO_PUBLIC_LIQUID_GLASS_ENABLED !== 'false' &&
    !isReduceTransparencyEnabled &&
    Platform.OS === 'ios' &&
    glassEffectApiAvailable &&
    liquidGlassAvailable;

  return {
    supportsNativeGlass,
    supportsBlurFallback:
      !isReduceTransparencyEnabled &&
      (Platform.OS === 'ios' || Platform.OS === 'android' || Platform.OS === 'web'),
    platform: Platform.OS,
  };
};

export const useGlassAvailability = () => {
  const [isReduceTransparencyEnabled, setIsReduceTransparencyEnabled] = useState(false);

  useEffect(() => {
    AccessibilityInfo.isReduceTransparencyEnabled().then(setIsReduceTransparencyEnabled);
    const subscription = AccessibilityInfo.addEventListener(
      'reduceTransparencyChanged',
      setIsReduceTransparencyEnabled
    );

    return () => subscription.remove();
  }, []);

  return useMemo(
    () => getGlassAvailability(isReduceTransparencyEnabled),
    [isReduceTransparencyEnabled]
  );
};
