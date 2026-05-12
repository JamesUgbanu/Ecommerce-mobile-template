import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Header from '../components/Header';
import ForgotPassword from '../screens/ForgotPasswordScreen';
import Login from '../screens/LoginScreen';
import Register from '../screens/RegisterScreen';
import type { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Login'}
        component={Login}
        options={{
          headerTransparent: true,
          header: (properties) => <Header {...properties} isShowHeading isShowBackIcon={false} />,
        }}
      />
      <Stack.Screen
        name={'Register'}
        component={Register}
        options={{
          headerTransparent: true,
          header: (properties) => <Header {...properties} isShowBackIcon isShowHeading />,
        }}
      />
      <Stack.Screen
        name={'ForgotPassword'}
        component={ForgotPassword}
        options={{
          headerTransparent: true,
          header: (properties) => <Header {...properties} isShowBackIcon isShowHeading />,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
