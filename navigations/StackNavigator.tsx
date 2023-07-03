import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { withTheme } from '@rneui/themed';
import { useTranslation } from "react-i18next";
import Login from "../screens/LoginScreen";
import Register from "../screens/RegisterScreen";
import ForgotPassword from "../screens/ForgotPasswordScreen";
import Header from '../components/Header';
import { getHeaderTitle } from '../utils/getHeaderTitle';

const Stack = createStackNavigator();

const AppStack = (props) => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: ({ navigation }) => (
          <Header
            theme={props.theme}
            navigation={navigation}
            showBackIcon
            showSearchIcon
            heading={getHeaderTitle(route)}
          />
        ),
      })}
    >
      <Stack.Screen
        name={t("common:login")}
        component={Login}
        options={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name={t("common:register")}
        component={Register}
        options={{
          headerTransparent: true,
        }}
      />
       <Stack.Screen
        name={t("common:forgotPassword")}
        component={ForgotPassword}
        options={{
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default withTheme(AppStack);