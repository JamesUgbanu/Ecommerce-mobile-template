import { useColorScheme } from 'react-native';

import { type ThemeMode, designTokens, getThemeColors } from '../design-system';

export const useAppTheme = (modeOverride?: ThemeMode) => {
  const systemMode = useColorScheme();
  const mode = modeOverride ?? (systemMode === 'dark' ? 'dark' : 'light');

  return {
    colors: getThemeColors(mode),
    mode,
    tokens: designTokens,
  };
};
