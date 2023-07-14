/**
 * VisualSearchScreen.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */


import React from 'react';
import { ScrollView, View, ImageBackground, Dimensions } from 'react-native';
import { Button, Text, useTheme } from '@rneui/themed';
import { useTranslation } from "react-i18next";
import { styles } from './styles';
import ErrorBoundary from '../../components/HOC/ErrorBoundary';
import { visualSearchBanner } from "../../data";

const VisualSearch = ({ navigation }) => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const screenHeight = Dimensions.get('window').height;

    return (
            <View style={styles().container}>
                <View style={styles(screenHeight).imageContainer}>
                    <ImageBackground source={visualSearchBanner.image} resizeMode="cover" style={styles().image}>
                        <Text style={styles().text}>{visualSearchBanner.text}</Text>
                        <Button
                            uppercase
                            title="TAKE A PHOTO"
                            onPress={() => navigation.navigate('SearchPhoto')}
                            containerStyle={styles().button}
                        />
                        <Button
                            uppercase
                            title="UPLOAD AN IMAGE"
                            onPress={() => { }}
                            containerStyle={styles().button}
                            buttonStyle={styles().border}
                        />
                    </ImageBackground>
                </View>
            </View>
    );
}


export default ErrorBoundary(VisualSearch);