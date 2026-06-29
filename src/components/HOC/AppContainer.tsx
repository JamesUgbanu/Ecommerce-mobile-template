/**
 * AppContainer.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import React from 'react';
import { ScrollView, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HEADER_HEIGHT } from '../../constants';
import { useAppTheme } from '../../hooks/useAppTheme';

type AppContainerProps = {
  children: React.ReactNode;
  contentContainerStyle?: ViewStyle;
};

const AppContainer = ({ children, contentContainerStyle }: AppContainerProps) => {
  const insets = useSafeAreaInsets();
  const { colors } = useAppTheme();

  return (
    <ScrollView
      style={{
        backgroundColor: colors.background,
        marginTop: insets.top + HEADER_HEIGHT,
      }}
      contentContainerStyle={contentContainerStyle}
    >
      {children}
    </ScrollView>
  );
};

export default AppContainer;
