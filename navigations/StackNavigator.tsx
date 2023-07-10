import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";
import Login from "../screens/LoginScreen";
import Register from "../screens/RegisterScreen";
import ForgotPassword from "../screens/ForgotPasswordScreen";
import Header from '../components/Header';

const Stack = createStackNavigator();


const AppStack = (props) => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={() => ({
        header: (properties) => (
          <Header
            {...properties}
            isShowHeading
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

export default AppStack;