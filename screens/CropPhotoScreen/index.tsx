/**
 * VisualSearchScreen.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */


import React, { useState } from 'react';
import { View, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useTheme, Icon } from '@rneui/themed';
import { useTranslation } from "react-i18next";
import { fetch } from "@tensorflow/tfjs-react-native";
import { styles } from './styles';
import ErrorBoundary from '../../components/HOC/ErrorBoundary';
import mobilenetClassification from '../../utils/mobilenetClassification';
import Loading from '../../components/Loading';
import DraggableResizableBox from '../../components/DraggableResizableBox';
import { resizeImage } from '../../utils/resizeImage';

const CropPhoto = ({ route, navigation }) => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
    // Initial card dimensions
    const initialWidth = screenWidth * 0.6;
    const initialHeight = screenHeight * 0.2;
    const [cardWidth, setCardWidth] = useState<number>(initialWidth);
    const [cardHeight, setCardHeight] = useState<number>(initialHeight);
    const searchImage = route.params;



    const classifyImageAsync = async (image: { uri: string}) => {
        try {
            setIsSearching(true);
            const source = await resizeImage(image.uri, { width: cardWidth, height: cardHeight });

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
            <Loading
                isVisible={isSearching}
                iconColor={theme.colors.error}
                text={ t('common:findingResults')}
                subText={!mobilenetClassification.mobilenetModel ? t('common:slowSearch') : undefined }
                color={theme.colors.black}
            />

            <View style={styles().container}>
                <View style={styles(screenHeight).imageContainer}>
                    <ImageBackground source={searchImage} resizeMode="cover" style={styles().image}>
                        <DraggableResizableBox
                            cardWidth={cardWidth}
                            cardHeight={cardHeight}
                            setCardWidth={setCardWidth}
                            setCardHeight={setCardHeight}
                        />
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