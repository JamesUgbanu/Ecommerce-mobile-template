import { createTheme } from '@rneui/themed';

import { designTokens, lightColors } from '../design-system';
import { theme } from '../styles/Theme';

export const appTheme = createTheme({
  ...theme,
  mode: 'light',
  components: {
    Text: {
      h1Style: {
        ...designTokens.typography.titleLarge,
      },
      h2Style: {
        fontWeight: '500',
      },
      h3Style: {
        fontWeight: '400',
        fontSize: 14,
      },
      h4Style: {
        ...designTokens.typography.caption,
      },
    },
    Button: {
      buttonStyle: {
        backgroundColor: lightColors.accent,
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
