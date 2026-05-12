/**
 * VisualSearchScreen.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */


import React, { useState } from 'react';
import { View, ImageBackground, Dimensions, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useTheme, Icon } from '@rneui/themed';
import { useTranslation } from "react-i18next";
import "@tensorflow/tfjs-react-native";
import { fetch } from "@tensorflow/tfjs-react-native";
import { styles } from './styles';
import ErrorBoundary from '../../components/HOC/ErrorBoundary';
import mobilenetClassification from '../../utils/mobilenetClassification';

const CropPhoto = ({ route }) => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const [isSearching, setIsSearching] = useState(false);
    const searchImage = route.params;
    const screenHeight = Dimensions.get('window').height;



    const classifyImageAsync = async (source) => {
        try {
            setIsSearching(true);
            const imageAssetPath = Image.resolveAssetSource(source);
            const response = await fetch(imageAssetPath.uri, {}, { isBinary: true });
            const rawImageData = await response.arrayBuffer();
            const newPredictions = await await mobilenetClassification.classify(
                rawImageData
              );;
            console.log(newPredictions);
            setIsSearching(false);
        } catch (error) {
            setIsSearching(false);
            alert("Image cannot be classified");
        }
    };

    return (
        <>
            <View style={styles().container}>
                <View style={styles(screenHeight).imageContainer}>
                    <ImageBackground source={searchImage} resizeMode="cover" style={styles().image}>
                        {isSearching && (
                            <ActivityIndicator size="large" color="#fff" />
                        )}
                    </ImageBackground>
                </View>
            </View>
            <View style={styles().bottom}>
                <View style={[styles().horizontalContainer]}>
                    <TouchableOpacity onPress={() => classifyImageAsync(searchImage)}>
                        <Icon
                            reverse
                            name='search'
                            type='font-awesome'
                            color={theme.colors.error}
                            disabled={isSearching}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}


export default ErrorBoundary(CropPhoto);