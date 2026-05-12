import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@rneui/themed';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import '../localization/i18n';
import StackNavigator from '../navigation/StackNavigator';
import TabNavigator from '../navigation/TabNavigator';
import { appTheme } from './theme';

const isAuthenticated = true;

const App = () => {
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

export default App;
