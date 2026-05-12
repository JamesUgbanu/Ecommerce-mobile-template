/**
 * ForgotPasswordScreen.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import { Button, Text } from '@rneui/themed';
import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import * as yup from 'yup';
import AnimatedTextInput from '../../components/AnimatedInput';
import AppContainer from '../../components/HOC/AppContainer';
import ErrorBoundary from '../../components/HOC/ErrorBoundary';
import { styles } from './styles';

const ForgotPassword = () => {
  const { t } = useTranslation();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email(t('common:invalidEmail'))
      .required(t('common:textRequired', { text: t('common:email') })),
  });

  return (
    <AppContainer>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text h1>{t('common:forgotPassword')}</Text>
        </View>
        <View style={styles.form}>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
                <Text h3>
                  Please, enter your email address. You will receive a link to create a new password
                  via email.
                </Text>
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
                  style={{ marginTop: 10 }}
                />
                <View style={styles.buttonContainer}>
                  <Button title={t('common:send')} uppercase onPress={() => handleSubmit()} />
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </AppContainer>
  );
};

export default ErrorBoundary(ForgotPassword);
