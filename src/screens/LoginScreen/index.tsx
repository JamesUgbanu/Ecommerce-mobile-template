/**
 * HomeScreen.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import { Button, Text, useTheme } from '@rneui/themed';
import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TouchableHighlight, View } from 'react-native';
import * as yup from 'yup';
import AnimatedTextInput from '../../components/AnimatedInput';
import AppContainer from '../../components/HOC/AppContainer';
import ErrorBoundary from '../../components/HOC/ErrorBoundary';

import Socials from '../../components/Socials';
import AppIcon from '../../components/common/AppIcon';
import { useCommerce } from '../../context/CommerceContext';
import { styles } from './styles';

const Login = ({ navigation }) => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const { login } = useCommerce();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email(t('common:invalidEmail'))
      .required(t('common:textRequired', { text: t('common:email') })),
    password: yup
      .string()
      .min(6, t('common:textCharacters', { numbers: 6, text: t('common:password') }))
      .required(t('common:textRequired', { text: t('common:password') })),
  });

  return (
    <AppContainer>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text h1>{t('common:login')}</Text>
        </View>
        <View style={styles.form}>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => login(values.email)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
                <AnimatedTextInput
                  placeholder={t('common:email')}
                  value={values.email}
                  textInputProps={{
                    keyboardType: 'email-address',
                  }}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  isError={touched.email && errors.email ? true : false}
                  errorText={errors.email}
                />
                <AnimatedTextInput
                  placeholder={t('common:password')}
                  value={values.password}
                  textInputProps={{
                    keyboardType: 'default',
                    secureTextEntry: true,
                  }}
                  onChangeText={handleChange('password')}
                  isError={touched.password && errors.password ? true : false}
                  onBlur={handleBlur('password')}
                  errorText={errors.password}
                />
                <View style={styles.linkContainer}>
                  <TouchableHighlight
                    underlayColor='transparent'
                    onPress={() => navigation.navigate('Register')}
                  >
                    <Text h3>{t('common:signUp')}</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    underlayColor='transparent'
                    onPress={() => navigation.navigate('ForgotPassword')}
                  >
                    <View style={styles.link}>
                      <Text h3>{t('common:forgotYourPassword')}</Text>
                      <AppIcon
                        type='material-icons'
                        size={16}
                        name='trending-flat'
                        color={theme.colors.error}
                      />
                    </View>
                  </TouchableHighlight>
                </View>
                <View style={styles.buttonContainer}>
                  <Button title={t('common:login')} uppercase onPress={() => handleSubmit()} />
                </View>
                <View style={styles.socialContainer}>
                  <Socials spacing={5} loginOrRegisterText={t('common:loginWithSocials')} />
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </AppContainer>
  );
};

export default ErrorBoundary(Login);
