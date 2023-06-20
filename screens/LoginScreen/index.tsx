import React from 'react';
import { View } from 'react-native';
import { Input, Button } from '@rneui/base';
import { styles } from './styles';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Input
                placeholder="Email"
                // value={'teghh'}
                inputStyle={styles.inputContainer}
                label="Email"
            />
        </View>
    );
}


export default Login;