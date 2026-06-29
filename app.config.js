const IS_DEV_CLIENT = process.env.EXPO_PUBLIC_USE_DEV_CLIENT !== 'false';

module.exports = {
  expo: {
    name: process.env.EXPO_PUBLIC_APP_NAME ?? 'mobile',
    slug: process.env.EXPO_PUBLIC_APP_SLUG ?? 'mobile',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      infoPlist: {
        NSCameraUsageDescription: 'Camera access is used for visual product search.',
        NSPhotoLibraryUsageDescription: 'Photo library access is used for visual product search.',
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      permissions: ['CAMERA', 'READ_MEDIA_IMAGES'],
    },
    web: {
      favicon: './assets/favicon.png',
    },
    plugins: [
      ...(IS_DEV_CLIENT ? ['expo-dev-client'] : []),
      'expo-splash-screen',
      [
        'expo-image-picker',
        {
          photosPermission: 'The app accesses your photos from your gallery.',
          cameraPermission: 'The app uses your camera for visual product search.',
        },
      ],
      'react-native-fast-tflite',
    ],
    jsEngine: 'hermes',
    extra: {
      liquidGlassDefaultEnabled: process.env.EXPO_PUBLIC_LIQUID_GLASS_ENABLED !== 'false',
      visualSearchProvider: process.env.EXPO_PUBLIC_VISUAL_SEARCH_PROVIDER ?? 'none',
    },
  },
};
