import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { CommerceProvider, useCommerce } from '../context/CommerceContext';
import '../localization/i18n';
import StackNavigator from '../navigation/StackNavigator';
import TabNavigator from '../navigation/TabNavigator';
import { useAppThemeFactory } from './theme';

const AppContent = () => {
  const { isAuthenticated } = useCommerce();
  const appTheme = useAppThemeFactory();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider theme={appTheme}>
          {isAuthenticated ? <TabNavigator /> : <StackNavigator />}
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const App = () => (
  <CommerceProvider>
    <AppContent />
  </CommerceProvider>
);

export default App;
