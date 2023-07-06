import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Text } from '@rneui/themed';
import { useTranslation } from "react-i18next";
import { styles } from './styles';
import { images } from "../../constants";
import Tab from "../../components/Tab";
import ErrorBoundary from '../../components/HOC/ErrorBoundary';
import AppContainer from '../../components/HOC/AppContainer';

const Shop = ({ navigation }) => {
    const { t } = useTranslation();

    return (
        <AppContainer>
            <ScrollView>
                <View style={styles.container}>
                    <Tab />
                </View>
            </ScrollView>
        </AppContainer>
    );
}


export default ErrorBoundary(Shop);