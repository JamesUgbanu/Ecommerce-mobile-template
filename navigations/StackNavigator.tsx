import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { withTheme } from '@rneui/themed';
import { useTranslation } from "react-i18next";
import Login from "../screens/LoginScreen";
import Header from '../components/Header';

const Stack = createStackNavigator();

const AppStack = (props) => {
  const {t} = useTranslation();

    return (
        <Stack.Navigator
          screenOptions={({ route }) => ({
          header: ({ navigation }) => (
            <Header
              theme={props.theme}
              navigation={navigation}
              showBackIcon
              showSearchIcon
              heading={t('common:login')}
            />
          ),
        })}
        >
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{
            headerTransparent: true,
            // headerShown: false
          }}
          />
      </Stack.Navigator>
    );
  };
  
  export default withTheme(AppStack);