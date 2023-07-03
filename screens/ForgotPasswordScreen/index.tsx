import React from 'react';
import { View } from 'react-native';
import { Button, Text} from '@rneui/themed';
import { useTranslation } from "react-i18next";
import { Formik } from 'formik';
import * as yup from 'yup';
import AnimatedTextInput from '../../components/AnimatedInput';
import { styles } from './styles';

const ForgotPassword = () => {
    const { t } = useTranslation();

    const validationSchema = yup.object().shape({
        email: yup.string().email(t('common:invalidEmail')).required(t('common:textRequired', { text: t('common:email') })),
    });

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: '' }}
                validationSchema={validationSchema}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <>
                    <Text h3>Please, enter your email address. You will receive a link to create a new password via email.</Text>
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
                            style={{marginTop: 10}}
                        />
                        <View style={styles.buttonContainer}>
                            <Button
                                title={t('common:send')}
                                uppercase
                                onPress={() => handleSubmit()}
                            />
                        </View>
                    </>
                )}
            </Formik>
        </View>
    );
}


export default ForgotPassword;