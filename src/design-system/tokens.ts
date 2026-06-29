export type ThemeMode = 'light' | 'dark';

export type GlassSurfaceRole = 'chrome' | 'card' | 'overlay' | 'sheet' | 'control';

const palette = {
  red500: '#DB3022',
  red600: '#B82218',
  green500: '#2AA952',
  amber500: '#FFBA49',
  neutral0: '#FFFFFF',
  neutral50: '#F8F8FA',
  neutral100: '#F2F2F2',
  neutral200: '#E5E5EA',
  neutral300: '#D1D1D6',
  neutral500: '#9B9B9B',
  neutral700: '#444444',
  neutral900: '#222222',
  black: '#000000',
} as const;

export const lightColors = {
  background: palette.neutral0,
  backgroundMuted: palette.neutral50,
  surface: palette.neutral0,
  surfaceRaised: 'rgba(255, 255, 255, 0.92)',
  surfaceMuted: palette.neutral100,
  textPrimary: palette.neutral900,
  textSecondary: palette.neutral500,
  textMuted: palette.neutral700,
  accent: palette.red500,
  accentPressed: palette.red600,
  success: palette.green500,
  warning: palette.amber500,
  danger: palette.red500,
  borderSubtle: 'rgba(34, 34, 34, 0.08)',
  borderStrong: 'rgba(34, 34, 34, 0.18)',
  scrim: 'rgba(0, 0, 0, 0.24)',
};

export const darkColors = {
  background: '#111113',
  backgroundMuted: '#18181B',
  surface: '#1F1F23',
  surfaceRaised: 'rgba(31, 31, 35, 0.92)',
  surfaceMuted: '#2A2A2F',
  textPrimary: palette.neutral0,
  textSecondary: '#B4B4BB',
  textMuted: palette.neutral300,
  accent: '#FF5A4D',
  accentPressed: '#FF746A',
  success: '#48D16F',
  warning: palette.amber500,
  danger: '#FF5A4D',
  borderSubtle: 'rgba(255, 255, 255, 0.12)',
  borderStrong: 'rgba(255, 255, 255, 0.22)',
  scrim: 'rgba(0, 0, 0, 0.46)',
};

export const spacing = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
};

export const radius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  '2xl': 32,
  pill: 999,
};

export const typography = {
  display: { fontSize: 48, lineHeight: 50, fontWeight: '900' as const },
  titleLarge: { fontSize: 34, lineHeight: 40, fontWeight: '700' as const },
  title: { fontSize: 22, lineHeight: 28, fontWeight: '700' as const },
  body: { fontSize: 16, lineHeight: 22, fontWeight: '400' as const },
  bodyStrong: { fontSize: 16, lineHeight: 22, fontWeight: '700' as const },
  caption: { fontSize: 12, lineHeight: 16, fontWeight: '500' as const },
  button: { fontSize: 14, lineHeight: 18, fontWeight: '700' as const },
  price: { fontSize: 24, lineHeight: 30, fontWeight: '700' as const },
};

export const motion = {
  fast: 140,
  base: 220,
  slow: 360,
  glass: 500,
  springSoft: {
    damping: 18,
    stiffness: 180,
  },
  springSnappy: {
    damping: 14,
    stiffness: 260,
  },
};

export const shadows = {
  none: {
    shadowOpacity: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: palette.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  md: {
    shadowColor: palette.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 6,
  },
  glass: {
    shadowColor: palette.black,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.14,
    shadowRadius: 24,
    elevation: 8,
  },
};

export const glassTokens = {
  chrome: {
    glassEffectStyle: 'regular',
    blurIntensity: 72,
    tint: 'systemMaterial',
    lightTintColor: 'rgba(255, 255, 255, 0.54)',
    darkTintColor: 'rgba(25, 25, 28, 0.62)',
    lightFallbackColor: 'rgba(255, 255, 255, 0.88)',
    darkFallbackColor: 'rgba(31, 31, 35, 0.88)',
    borderColor: 'rgba(255, 255, 255, 0.34)',
  },
  card: {
    glassEffectStyle: 'regular',
    blurIntensity: 40,
    tint: 'light',
    lightTintColor: 'rgba(255, 255, 255, 0.34)',
    darkTintColor: 'rgba(31, 31, 35, 0.56)',
    lightFallbackColor: 'rgba(255, 255, 255, 0.94)',
    darkFallbackColor: 'rgba(31, 31, 35, 0.92)',
    borderColor: 'rgba(255, 255, 255, 0.28)',
  },
  overlay: {
    glassEffectStyle: 'clear',
    blurIntensity: 56,
    tint: 'prominent',
    lightTintColor: 'rgba(255, 255, 255, 0.3)',
    darkTintColor: 'rgba(0, 0, 0, 0.34)',
    lightFallbackColor: 'rgba(255, 255, 255, 0.82)',
    darkFallbackColor: 'rgba(0, 0, 0, 0.58)',
    borderColor: 'rgba(255, 255, 255, 0.36)',
  },
  sheet: {
    glassEffectStyle: 'regular',
    blurIntensity: 64,
    tint: 'systemMaterial',
    lightTintColor: 'rgba(255, 255, 255, 0.62)',
    darkTintColor: 'rgba(31, 31, 35, 0.74)',
    lightFallbackColor: 'rgba(255, 255, 255, 0.96)',
    darkFallbackColor: 'rgba(31, 31, 35, 0.96)',
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  control: {
    glassEffectStyle: 'regular',
    blurIntensity: 50,
    tint: 'light',
    lightTintColor: 'rgba(255, 255, 255, 0.42)',
    darkTintColor: 'rgba(31, 31, 35, 0.64)',
    lightFallbackColor: 'rgba(255, 255, 255, 0.9)',
    darkFallbackColor: 'rgba(31, 31, 35, 0.9)',
    borderColor: 'rgba(255, 255, 255, 0.32)',
  },
} as const;

export const designTokens = {
  colors: {
    light: lightColors,
    dark: darkColors,
  },
  glass: glassTokens,
  motion,
  radius,
  shadows,
  spacing,
  typography,
};

export const getThemeColors = (mode: ThemeMode) => (mode === 'dark' ? darkColors : lightColors);
