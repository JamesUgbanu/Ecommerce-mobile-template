
import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigations/StackNavigator";
import { theme } from './styles/Theme';
import './localization/i18n';

const myTheme = createTheme({
  ...theme, 
  mode: 'light',
  components: {
    Text: {
      h1Style: {
        fontWeight: '700',
        fontSize: 34
      },
      h2Style: {
        fontWeight: '300',
      },
      h3Style: {
        fontWeight: '100',
      },
    }
  }
  
});

const App = () => {
  return (
        <NavigationContainer>
          <ThemeProvider theme={myTheme}>
            <StackNavigator />
          </ThemeProvider>
      </NavigationContainer>
  );
};

export default App;
