/**
 * CategoreyScreen.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import { Text } from '@rneui/themed';
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
import { useAppTheme } from '../../hooks/useAppTheme';
import SortBy from './SortBy';
import { styles } from './styles';

const broadCategoryNames = ['new', 'clothing', 'shoes', 'accessories', 'baby'];

const normalizeValue = (value?: string) => value?.trim().toLowerCase() ?? '';

const Category = ({ route, navigation }) => {
  const { colors } = useAppTheme();
  const { filteredProducts, isFavorite, setSortId, sortId, toggleFavorite } = useCommerce();
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const [isGridView, setIsGridView] = useState(true);
  const currentSortIndex = Math.max(
    sortItems.findIndex((sortItem) => sortItem.id === sortId),
    0
  );
  const category: string = route.params.category;
  const department: string | undefined = route.params.department;
  const normalizedCategory = normalizeValue(category);
  const normalizedDepartment = normalizeValue(department);
  const visibleProducts = filteredProducts.filter((product) => {
    if (!normalizedCategory || normalizedCategory === 'all') return true;

    const productDepartment = normalizeValue(product.department);
    const productCategory = normalizeValue(product.category);
    const productName = normalizeValue(product.name);
    const matchesDepartment = normalizedDepartment
      ? productDepartment === normalizedDepartment
      : productDepartment === normalizedCategory;

    if (broadCategoryNames.includes(normalizedCategory)) {
      return normalizedDepartment ? matchesDepartment : true;
    }

    return (
      matchesDepartment ||
      productCategory.includes(normalizedCategory) ||
      productName.includes(normalizedCategory)
    );
  });

  const handleSort = (index: number) => {
    setSortId(sortItems[index].id as SortId);
    actionSheetRef.current?.hide();
  };

  return (
    <AppContainer>
      <View style={styles.container}>
        <View
          style={[
            styles.topBox,
            { backgroundColor: colors.surface, borderColor: colors.borderSubtle },
          ]}
        >
          <ScrollView horizontal>
            {tags.length &&
              tags.map((tag: string, index: number) => (
                <Chip
                  key={index}
                  color={colors.textInverse}
                  backgroundColor={colors.textPrimary}
                  text={tag}
                />
              ))}
          </ScrollView>
          <View style={[styles.filterContainer, { backgroundColor: colors.surfaceMuted }]}>
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
                color={colors.textPrimary}
              />
              <Text style={[styles.filterText, { color: colors.textPrimary }]}>{'Filters'}</Text>
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
                color={colors.textPrimary}
              />
              <Text style={[styles.filterText, { color: colors.textPrimary }]}>
                {sortItems[currentSortIndex].name}
              </Text>
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
                color={colors.textPrimary}
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
                buttonStyle={{ backgroundColor: colors.surface }}
                imageWidth={isGridView ? 155 : 330}
                imageHeight={160}
                isFavorite={isFavorite(product.id)}
                label={product.discount}
                badgeStyle={product.discount && { backgroundColor: colors.danger }}
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
