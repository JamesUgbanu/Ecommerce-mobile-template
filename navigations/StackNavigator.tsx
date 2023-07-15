/**
 * StackNavigator.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";
import Login from "../screens/LoginScreen";
import Register from "../screens/RegisterScreen";
import ForgotPassword from "../screens/ForgotPasswordScreen";
import Header from '../components/Header';

const Stack = createStackNavigator();


const AppStack = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Login"}
        component={Login}
        options={{
          headerTransparent: true,
          header: (properties) => (
              <Header
                  {...properties}
                  isShowHeading
                  isShowBackIcon={false}     

              />)
      }}
      />
      <Stack.Screen
        name={"Register"}
        component={Register}
        options={{
          headerTransparent: true,
          header: (properties) => (
              <Header
                  {...properties}
                  isShowBackIcon
                  isShowHeading      

              />)
      }}
      />
      <Stack.Screen
        name={"ForgotPassword"}
        component={ForgotPassword}
        options={{
          headerTransparent: true,
          header: (properties) => (
            <Header
                {...properties}
                isShowBackIcon
                isShowHeading      

            />)
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;