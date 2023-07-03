import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { Icon, useTheme, Button, Text } from '@rneui/themed';
import { useTranslation } from "react-i18next";
import { Formik } from 'formik';
import * as yup from 'yup';
import { styles } from './styles';
import AnimatedTextInput from '../../components/AnimatedInput';
import Socials from '../../components/Socials';

const Register = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    const validationSchema = yup.object().shape({
        email: yup.string().email(t('common:invalidEmail')).required(t('common:textRequired', {text: t('common:email')})),
        password: yup.string().min(6, t('common:textCharacters', {numbers: 6, text: t('common:password')})).required(t('common:textRequired', {text: t('common:password')})),
        name: yup.string().min(6, t('common:textCharacters', {numbers: 6, text: t('common:name')})).required(t('common:textRequired', {text: t('common:name')})),
    });

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <>
                        <AnimatedTextInput
                            placeholder={t('common:name')}
                            value={values.name}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            isError={touched.name && errors.name ? true : false}
                            errorText={errors.name}
                        />
                        <AnimatedTextInput
                            placeholder={t('common:email')}
                            value={values.email}
                            textInputProps={{
                                keyboardType: 'email-address'
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
                                secureTextEntry: true
                            }}
                            onChangeText={handleChange('password')}
                            isError={touched.password && errors.password ? true : false}
                            onBlur={handleBlur('password')}
                            errorText={errors.password}
                        />
                        <View style={styles.linkContainer}>
                            <TouchableHighlight underlayColor="transparent" onPress={() => alert('hi')}>
                                <View style={styles.link}>
                                    <Text h3>{t('common:forgotPassword')}</Text>
                                    <Icon type="material-icons" size={16} name="trending-flat" color={theme.colors.error} />
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button
                                title={t('common:register')}
                                uppercase
                                onPress={() => handleSubmit()}
                            />
                        </View>
                        <View style={styles.socialContainer}>
                            <Socials spacing={5}  loginOrRegisterText={t('common:registerWithSocials')} />
                        </View>
                    </>
                )}
            </Formik>
        </View>
    );
}


export default Register;