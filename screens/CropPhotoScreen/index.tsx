/**
 * VisualSearchScreen.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */


import React, { useRef, useState, useEffect, useCallback } from 'react';
import { View, ImageBackground, Dimensions, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useTheme, Icon, Text } from '@rneui/themed';
import { useTranslation } from "react-i18next";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as jpeg from "jpeg-js";
import { fetch } from "@tensorflow/tfjs-react-native";
import { styles } from './styles';
import ErrorBoundary from '../../components/HOC/ErrorBoundary';

const CropPhoto = ({ route, navigation }) => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const [isModelReady, setIsModelReady] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [isTfReady, setIsTfReady] = useState(false);
    const searchImage = route.params;
    const screenHeight = Dimensions.get('window').height;
    const model = useRef(null);


    const initializeTfAsync = async () => {
        await tf.ready();
        setIsTfReady(true);
    };

    const initializeModelAsync = useCallback(async () => {
        model.current = await mobilenet.load();
        setIsModelReady(true);
    }, []);

    useEffect(() => {
        initializeTfAsync();
        initializeModelAsync();
    }, []);


    const classifyImageAsync = async (source) => {
        try {
            setIsSearching(true);
            const imageAssetPath = Image.resolveAssetSource(source);
            const response = await fetch(imageAssetPath.uri, {}, { isBinary: true });
            const rawImageData = await response.arrayBuffer();
            const imageTensor = imageToTensor(rawImageData);
            const newPredictions = await model.current.classify(imageTensor);
            console.log(newPredictions);
            setIsSearching(false);
        } catch (error) {
            console.log("Exception Error: ", error);
        }
    };

    const imageToTensor = (rawImageData) => {
        const { width, height, data } = jpeg.decode(rawImageData, {
            useTArray: true,
        }); // return as Uint8Array

        // Drop the alpha channel info for mobilenet
        const buffer = new Uint8Array(width * height * 3);
        let offset = 0; // offset into original data
        for (let i = 0; i < buffer.length; i += 3) {
            buffer[i] = data[offset];
            buffer[i + 1] = data[offset + 1];
            buffer[i + 2] = data[offset + 2];

            offset += 4;
        }

        return tf.tensor3d(buffer, [height, width, 3]);
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
                    <TouchableOpacity onPress={isModelReady ? () => classifyImageAsync(searchImage) : undefined}>
                        <Icon
                            reverse
                            name='search'
                            type='font-awesome'
                            color={theme.colors.error}
                            disabled={isSearching || !isModelReady}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}


export default ErrorBoundary(CropPhoto);