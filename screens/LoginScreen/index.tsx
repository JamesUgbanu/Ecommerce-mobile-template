import React, { useState } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import { Icon, useTheme, Button } from '@rneui/themed';
import { useTranslation } from "react-i18next";
import { styles } from './styles';
import AnimatedTextInput from '../../components/AnimatedInput';
import { validateEmail } from '../../utils/validateEmail';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const { theme } = useTheme();
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <AnimatedTextInput
                placeholder={t('common:email')}
                value={email}
                textInputProps={{
                    keyboardType: 'email-address'
                }}
                onChangeText={data => setEmail(data)}
                isValid={validateEmail(email)}
            />
            <AnimatedTextInput
                placeholder={t('common:password')}
                value={''}
                textInputProps={{
                    keyboardType: 'default',
                    secureTextEntry: true
                }}
                onChangeText={() => { }}
            />
            <View style={styles.linkContainer}>
                <TouchableHighlight underlayColor="transparent" onPress={() => { }}>
                    <Text>{t('common:register')}</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="transparent" onPress={() => alert('hi')}>
                    <View style={styles.link}>
                        <Text>{t('common:forgotPassword')}</Text>
                        <Icon type="material-icons" size={16} name="trending-flat" color={theme.colors.error} />
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title={t('common:login')}
                    uppercase
                    onPress={() => console.log('aye')}
                />
            </View>
        </View>
    );
}


export default Login;