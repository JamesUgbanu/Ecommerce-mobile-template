/**
 * VisualSearchScreen.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */


import React from 'react';
import { View, ImageBackground, Dimensions } from 'react-native';
import { Button, Text, useTheme } from '@rneui/themed';
import { useTranslation } from "react-i18next";
import { scale } from "react-native-size-matters";
import { styles } from './styles';
import ErrorBoundary from '../../components/HOC/ErrorBoundary';
import { visualSearchBanner } from "../../data";

const SearchPhoto = ({ navigation }) => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const screenHeight = Dimensions.get('window').height;

    return (
        <>
            <View style={styles().container}>
                <View style={styles(screenHeight).imageContainer}>
                    <ImageBackground source={visualSearchBanner.image} resizeMode="cover" style={styles().image}>
                    </ImageBackground>
                </View>
            </View>
            <View style={styles().bottom}>
                <View style={[styles().horizontalContainer, { justifyContent: 'space-between' }]}>
                    <Button
                        onPress={() => navigation.goBack()}
                        style={{ width: scale(155) }}
                        buttonStyle={[styles().button, { borderColor: theme.colors.black }]}
                        titleStyle={{ color: theme.colors.black, fontWeight: '500' }}
                    />
                    <Button
                        onPress={() => { }}
                        style={{ width: scale(155) }}
                    />
                </View>
            </View>
        </>
    );
}


export default ErrorBoundary(SearchPhoto);