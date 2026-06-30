import { createTheme } from '@rneui/themed';
import { useMemo } from 'react';
import { useColorScheme } from 'react-native';

import { darkColors, designTokens, lightColors } from '../design-system';
import { theme } from '../styles/Theme';

export const createAppTheme = (mode: 'light' | 'dark') => {
  const colors = mode === 'dark' ? darkColors : lightColors;

  return createTheme({
    ...theme,
    mode,
    components: {
      Text: {
        style: {
          color: colors.textPrimary,
        },
        h1Style: {
          ...designTokens.typography.titleLarge,
          color: colors.textPrimary,
        },
        h2Style: {
          color: colors.textPrimary,
          fontWeight: '500',
        },
        h3Style: {
          color: colors.textMuted,
          fontWeight: '400',
          fontSize: 14,
        },
        h4Style: {
          ...designTokens.typography.caption,
          color: colors.textSecondary,
        },
      },
      Button: {
        buttonStyle: {
          backgroundColor: colors.accent,
          borderRadius: designTokens.radius.pill,
          paddingVertical: designTokens.spacing.md,
        },
        containerStyle: {
          height: 48,
        },
        titleStyle: {
          ...designTokens.typography.button,
        },
      },
    },
  });
};

export const useAppThemeFactory = () => {
  const colorScheme = useColorScheme();
  const mode = colorScheme === 'dark' ? 'dark' : 'light';

  return useMemo(() => createAppTheme(mode), [mode]);
};
