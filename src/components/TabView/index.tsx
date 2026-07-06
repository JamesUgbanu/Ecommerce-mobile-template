/**
 * TabView.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import { FullTheme, TabView, withTheme } from '@rneui/themed';
import React from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { verticalScale } from 'react-native-size-matters';
import { HEADER_HEIGHT, TAB_BAR_HEIGHT, TAB_HEIGHT } from '../../constants';
import CategoryCard from '../CategoryCard';
import { styles } from './styles';

type TabViewProps = {
  style?: { [key: string]: any };
  theme?: FullTheme;
  setIndex: any;
  index: number;
  items: {
    name?: string;
    subcategories?: any[];
  }[];
  animationType?: 'spring' | 'timing';
  onPress: (name: string, parentName?: string) => void;
};
const RneTabView = (props: TabViewProps) => {
  const { style, items, setIndex, index, animationType = 'timing', onPress } = props;

  const insets = useSafeAreaInsets();
  const screenHeight: number =
    Dimensions.get('window').height -
    verticalScale(insets.top + HEADER_HEIGHT + TAB_BAR_HEIGHT + TAB_HEIGHT + insets.bottom);

  return (
    <View style={styles(screenHeight).container}>
      {items && items.length && (
        <TabView value={index} onChange={setIndex} animationType={animationType}>
          {items.map((item, index) => {
            const subcategories = item.subcategories;

            const categories = subcategories.map((subcategory, index) => (
              <CategoryCard
                key={index}
                name={subcategory.name}
                image={subcategory.image}
                onPress={() => onPress(subcategory.name, item.name)}
              />
            ));
            return (
              <TabView.Item key={index} style={style}>
                <ScrollView>{categories}</ScrollView>
              </TabView.Item>
            );
          })}
        </TabView>
      )}
    </View>
  );
};

export default withTheme(RneTabView);
