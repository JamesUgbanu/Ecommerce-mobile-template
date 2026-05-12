/**
 * CategoreyScreen.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import { Text, useTheme } from '@rneui/themed';
import React, { useRef, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { ActionSheetRef } from 'react-native-actions-sheet';

import Chip from '../../components/Chip';
import Dialog from '../../components/Dialog';
import AppContainer from '../../components/HOC/AppContainer';
import ErrorBoundary from '../../components/HOC/ErrorBoundary';
import ProductCard from '../../components/ProductCard';
import AppIcon from '../../components/common/AppIcon';
import { products, sortItems, tags } from '../../data';
import SortBy from './SortBy';
import { styles } from './styles';

const Category = ({ route, navigation }) => {
  const { theme } = useTheme();
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const [currentSortIndex, setCurrentSort] = useState(3);
  const category: string = route.params.category;

  return (
    <AppContainer>
      <View style={styles.container}>
        <View style={styles.topBox}>
          <ScrollView horizontal>
            {tags.length &&
              tags.map((tag: string, index: number) => (
                <Chip
                  key={index}
                  color={theme.colors.white}
                  backgroundColor={theme.colors.black}
                  text={tag}
                />
              ))}
          </ScrollView>
          <View style={styles.filterContainer}>
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigation.navigate('ProductFilter')}
            >
              <AppIcon
                type='material-icons'
                size={25}
                name='filter-list'
                color={theme.colors.black}
              />
              <Text style={styles.filterText}>{'Filters'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.row} onPress={() => actionSheetRef.current?.show()}>
              <AppIcon
                type='material-icons'
                size={25}
                name='swap-vert'
                color={theme.colors.black}
              />
              <Text style={styles.filterText}>{sortItems[currentSortIndex].name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.row}>
              <AppIcon
                type='material-icons'
                size={25}
                name='view-list'
                color={theme.colors.black}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.productContainer}>
          {products &&
            products.map((product, index) => (
              <ProductCard
                key={index}
                category={product.category}
                name={product.name}
                ratingValue={product.ratingValue}
                totalRating={product.totalRating}
                price={product.price}
                salePrice={product.salePrice}
                image={product.image}
                buttonStyle={{ backgroundColor: `${theme.colors.primary}` }}
                imageWidth={155}
                imageHeight={160}
                label={product.discount}
                badgeStyle={product.discount && { backgroundColor: theme.colors.error }}
                onPress={() => navigation.navigate('ProductDetails', { product })}
              />
            ))}
        </View>
      </View>
      <Dialog actionSheetRef={actionSheetRef}>
        <SortBy
          sortItems={sortItems}
          setCurrentSort={setCurrentSort}
          currentSortIndex={currentSortIndex}
        />
      </Dialog>
    </AppContainer>
  );
};

export default ErrorBoundary(Category);
