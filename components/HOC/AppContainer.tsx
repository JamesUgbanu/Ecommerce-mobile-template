import React from 'react';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HEADER_HEIGHT } from '../../constants';


const AppContainer = ({ children }: any) => {
    const insets = useSafeAreaInsets()

    return (
        <ScrollView style={{
            marginTop: insets.top
        }}>
            {children}
        </ScrollView>
    );
}

export default AppContainer;