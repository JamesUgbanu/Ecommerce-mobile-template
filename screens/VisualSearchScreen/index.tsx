/**
 * VisualSearchScreen.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */


import React, { useEffect } from 'react';
import { View, ImageBackground, Dimensions, Platform } from 'react-native';
import { Button, Text } from '@rneui/themed';
import { useTranslation } from "react-i18next";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import { styles } from './styles';
import ErrorBoundary from '../../components/HOC/ErrorBoundary';
import { visualSearchBanner } from "../../data";

const VisualSearch = ({ navigation }) => {
    const { t } = useTranslation();
    const screenHeight = Dimensions.get('window').height;

    const selectImageAsync = async () => {
        try {
          let response = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
          });

    
          if (!response.canceled) {
            // resize image to avoid out of memory crashes
            const manipResponse = await ImageManipulator.manipulateAsync(
              response.assets[0].uri,
              [{ resize: { width: 900 } }],
              { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
            );
    
            const source = { uri: manipResponse.uri };
            navigation.navigate('CropPhoto', source)
          }
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        const getPermissionAsync = async () => {
            if (Platform.OS !== "web") {
                const {
                    status,
                } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== "granted") {
                    alert("Sorry, we need camera roll permissions to make this work!");
                }
            }
        };
        getPermissionAsync();
    }, []);

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
                            onPress={selectImageAsync}
                            containerStyle={styles().button}
                            buttonStyle={styles().border}
                        />
                    </ImageBackground>
                </View>
            </View>
    );
}


export default ErrorBoundary(VisualSearch);