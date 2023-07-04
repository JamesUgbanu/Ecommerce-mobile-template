
import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigations/StackNavigator";
import TabNavigator from "./navigations/TabNavigator";
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
        fontWeight: '300',
        fontSize: 14
      },
      h4Style: {
        fontWeight: '300',
        fontSize: 11
      },
    },
    Button: {
      buttonStyle: {
        backgroundColor: '#DB3022',
        borderRadius: 25,
        paddingVertical: 15,
      },
      containerStyle: {
        height: 48,
      },
      titleStyle: {
        fontSize: 14
      }
    }
  }

});

const App = () => {
  const isAuthenticated = true;
  return (
    <NavigationContainer>
      <ThemeProvider theme={myTheme}>
        {
          isAuthenticated ? <TabNavigator /> : <StackNavigator />
        }
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
