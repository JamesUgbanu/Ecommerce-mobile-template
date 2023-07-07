import React, { useState } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { useTranslation } from "react-i18next";
import { scale, verticalScale } from "react-native-size-matters";
import { styles } from './styles';
import Tab from "../../components/Tab";
import TabView from "../../components/TabView";
import ErrorBoundary from '../../components/HOC/ErrorBoundary';
import AppContainer from '../../components/HOC/AppContainer';
import { categories, categoryBanner } from "../../data";

const Shop = ({ navigation }) => {
    const { t } = useTranslation();
    const screenWidth = Dimensions.get("window").width - scale(20);
    const screenHeight = verticalScale(85);
    const [index, setIndex] = useState(0);

    return (
        <AppContainer>
            <View>
                <Tab items={categories} index={index} setIndex={setIndex} />
                <View style={[styles.banner, { width: screenWidth, height: screenHeight }]}>
                    <Text style={styles.title}>{categoryBanner.title}</Text>
                    <Text style={styles.subText}>{categoryBanner.subTitle}</Text>
                </View>
                <TabView items={categories} index={index} setIndex={setIndex} onPress={(e) => console.log(e)} />
            </View>
        </AppContainer>
    );
}


export default ErrorBoundary(Shop);