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
import EmptyState from '../../components/common/EmptyState';
import { type SortId, useCommerce } from '../../context/CommerceContext';
import { products, sortItems, tags } from '../../data';
import SortBy from './SortBy';
import { styles } from './styles';

const Category = ({ route, navigation }) => {
  const { theme } = useTheme();
  const { filteredProducts, isFavorite, setSortId, sortId, toggleFavorite } = useCommerce();
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const [isGridView, setIsGridView] = useState(true);
  const currentSortIndex = Math.max(
    sortItems.findIndex((sortItem) => sortItem.id === sortId),
    0
  );
  const category: string = route.params.category;
  const visibleProducts = filteredProducts;

  const handleSort = (index: number) => {
    setSortId(sortItems[index].id as SortId);
    actionSheetRef.current?.hide();
  };

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
              accessibilityLabel='Open filters'
              accessibilityRole='button'
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
            <TouchableOpacity
              accessibilityLabel='Open sort options'
              accessibilityRole='button'
              style={styles.row}
              onPress={() => actionSheetRef.current?.show()}
            >
              <AppIcon
                type='material-icons'
                size={25}
                name='swap-vert'
                color={theme.colors.black}
              />
              <Text style={styles.filterText}>{sortItems[currentSortIndex].name}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              accessibilityLabel={isGridView ? 'Switch to list view' : 'Switch to grid view'}
              accessibilityRole='button'
              style={styles.row}
              onPress={() => setIsGridView((value) => !value)}
            >
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
          {visibleProducts.length ? (
            visibleProducts.map((product, index) => (
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
                imageWidth={isGridView ? 155 : 330}
                imageHeight={160}
                isFavorite={isFavorite(product.id)}
                label={product.discount}
                badgeStyle={product.discount && { backgroundColor: theme.colors.error }}
                onFavoritePress={() => toggleFavorite(product)}
                onPress={() => navigation.navigate('ProductDetails', { product })}
              />
            ))
          ) : (
            <EmptyState
              title='No matching products'
              description='Adjust your filters or discard them to see the full catalog again.'
              iconName='filter-off-outline'
            />
          )}
        </View>
      </View>
      <Dialog actionSheetRef={actionSheetRef}>
        <SortBy
          sortItems={sortItems}
          setCurrentSort={handleSort}
          currentSortIndex={currentSortIndex}
        />
      </Dialog>
    </AppContainer>
  );
};

export default ErrorBoundary(Category);
