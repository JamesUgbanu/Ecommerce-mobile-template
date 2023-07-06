import React, { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from "react-i18next";
import { styles } from './styles';
import Tab from "../../components/Tab";
import TabView from "../../components/TabView";
import ErrorBoundary from '../../components/HOC/ErrorBoundary';
import AppContainer from '../../components/HOC/AppContainer';
import { categories } from "../../data";

const Shop = ({ navigation }) => {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);

    return (
        <AppContainer>
            <View style={styles.container}>
                <Tab items={categories} index={index} setIndex={setIndex} />
                <TabView items={categories} index={index} setIndex={setIndex} />
            </View>
        </AppContainer>
    );
}


export default ErrorBoundary(Shop);