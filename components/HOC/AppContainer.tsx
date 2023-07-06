import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HEADER_HEIGHT } from '../../constants';


const AppContainer = ({ children }: any) => {
    const insets = useSafeAreaInsets()

    return (
        <View style={{
            marginTop: insets.top + HEADER_HEIGHT
        }}>
            {children}
        </View>
    );
}

export default AppContainer;