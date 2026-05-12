/**
 * ShopScreen.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import React, { useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import AppContainer from '../../components/HOC/AppContainer';
import ErrorBoundary from '../../components/HOC/ErrorBoundary';
import Tab from '../../components/Tab';
import TabView from '../../components/TabView';
import { HEADER_HEIGHT } from '../../constants';
import { categories, categoryBanner } from '../../data';
import { styles } from './styles';

const Shop = ({ navigation }) => {
  const screenWidth = Dimensions.get('window').width - scale(20);
  const screenHeight = verticalScale(85);
  const [index, setIndex] = useState(0);

  const updateCategory = (catgeory: string) => {
    navigation.navigate('Category', { category: catgeory });
  };

  return (
    <AppContainer>
      <View style={{ marginTop: HEADER_HEIGHT }}>
        <Tab items={categories} index={index} setIndex={setIndex} />
        <View style={[styles.banner, { width: screenWidth, height: screenHeight }]}>
          <Text style={styles.title}>{categoryBanner.title}</Text>
          <Text style={styles.subText}>{categoryBanner.subTitle}</Text>
        </View>
        <TabView
          items={categories}
          index={index}
          setIndex={setIndex}
          onPress={(category) => updateCategory(category)}
        />
      </View>
    </AppContainer>
  );
};

export default ErrorBoundary(Shop);
