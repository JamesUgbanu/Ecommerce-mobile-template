import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import AnimatedTextInput from '../../components/AnimatedInput';
import { validateEmail  } from '../../utils/validateEmail';

const Login = () => {
    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
            <AnimatedTextInput
                placeholder="Email"
                value={email}
                textInputProps={{
                    keyboardType: 'email-address'
                }}
                onChangeText={data => setEmail(data)}
                isValid={validateEmail(email)}
            />
            <AnimatedTextInput
                placeholder="Password"
                value={''}
                textInputProps={{
                    keyboardType: 'default',
                    secureTextEntry: true
                }}
                onChangeText={() => { }}
            />
        </View>
    );
}


export default Login;