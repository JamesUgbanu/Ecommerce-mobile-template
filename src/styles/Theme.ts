import { darkColors, lightColors } from '../design-system';

type AppColorMap = Record<keyof typeof lightColors, string>;

const toRneColors = (colors: AppColorMap) => ({
  primary: colors.surfaceMuted,
  secondary: colors.textPrimary,
  white: colors.surface,
  black: colors.textPrimary,
  grey0: colors.textSecondary,
  grey1: colors.surfaceMuted,
  grey2: colors.surfaceMuted,
  grey3: colors.surfaceMuted,
  grey4: colors.surfaceMuted,
  grey5: colors.surfaceMuted,
  greyOutline: colors.borderSubtle,
  searchBg: colors.surfaceMuted,
  success: colors.success,
  warning: colors.warning,
  error: colors.danger,
  disabled: colors.surfaceMuted,
  divider: colors.borderSubtle,
});

export const theme = {
  lightColors: toRneColors(lightColors),
  darkColors: toRneColors(darkColors),
};
