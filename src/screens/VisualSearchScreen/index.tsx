import { Text } from '@rneui/themed';
import * as ImageManipulator from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Dimensions, ImageBackground, Platform, View } from 'react-native';
import ErrorBoundary from '../../components/HOC/ErrorBoundary';
import AppButton from '../../components/common/AppButton';
import ProviderBadge from '../../components/search/ProviderBadge';
import { visualSearchBanner } from '../../data';
import { useAppTheme } from '../../hooks/useAppTheme';
import { visualSearchConfig } from '../../services/ai/config';
import { styles } from './styles';

const VisualSearch = ({ navigation }) => {
  const { t } = useTranslation();
  const screenHeight = Dimensions.get('window').height;
  const { colors } = useAppTheme();

  const openSearchPreview = async (imageUri: string) => {
    const manipResponse = await ImageManipulator.manipulateAsync(
      imageUri,
      [{ resize: { width: 900 } }],
      { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
    );

    navigation.navigate('VisualSearchPreview', { imageUri: manipResponse.uri });
  };

  const selectImageAsync = async () => {
    try {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (!response.canceled) {
        await openSearchPreview(response.assets[0].uri);
      }
    } catch (error) {
      Alert.alert('Image selection failed', 'Please try another image.');
    }
  };

  const captureImageAsync = async () => {
    try {
      const response = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!response.canceled) {
        await openSearchPreview(response.assets[0].uri);
      }
    } catch (error) {
      Alert.alert('Camera unavailable', 'Please check camera permissions and try again.');
    }
  };

  useEffect(() => {
    const getPermissionAsync = async () => {
      if (Platform.OS !== 'web') {
        const mediaPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
        if (mediaPermission.status !== 'granted' || cameraPermission.status !== 'granted') {
          Alert.alert(
            'Permissions required',
            'Camera and photo permissions are needed for visual search.'
          );
        }
      }
    };
    getPermissionAsync();
  }, []);

  return (
    <View style={styles().container}>
      <View style={styles(screenHeight).imageContainer}>
        <ImageBackground
          source={visualSearchBanner.image}
          resizeMode='cover'
          style={styles().image}
        >
          <LinearGradient
            colors={['transparent', colors.overlayStrong]}
            style={styles().gradient}
          />
          <ProviderBadge providerId={visualSearchConfig.provider} />
          <Text style={[styles().text, { color: colors.textInverse }]}>
            {visualSearchBanner.text}
          </Text>
          <AppButton
            title={t('common:takePhoto')}
            onPress={captureImageAsync}
            variant='glass'
            containerStyle={styles().button}
          />
          <AppButton
            title={t('common:uploadImage')}
            onPress={selectImageAsync}
            containerStyle={styles().button}
            variant='outline'
          />
        </ImageBackground>
      </View>
    </View>
  );
};

export default ErrorBoundary(VisualSearch);
