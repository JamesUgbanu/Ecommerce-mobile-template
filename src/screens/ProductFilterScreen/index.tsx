/**
 * ProductFilterScreen.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { scale } from 'react-native-size-matters';
import AppContainer from '../../components/HOC/AppContainer';
import AppButton from '../../components/common/AppButton';
import GlassSurface from '../../components/surfaces/GlassSurface';
import { useCommerce } from '../../context/CommerceContext';
import { colors, productCategories, sizes } from '../../data';
import CategorySelection from './CategorySelection';
import ColorSelection from './ColorSelection';
import PriceRange from './PriceRange';
import SizeSelection from './SizeSelection';
import { styles } from './styles';

const syncColorSelections = (selectedColors: string[]) =>
  colors.map((item) => ({
    ...item,
    selected: selectedColors.includes(item.color),
  }));

const syncSizeSelections = (selectedSizes: string[]) =>
  sizes.map((item) => ({
    ...item,
    selected: selectedSizes.includes(item.size),
  }));

const ProductFilter = ({ navigation }) => {
  const { t } = useTranslation();
  const { applyFilters, filters, resetFilters } = useCommerce();
  const [low, setLow] = useState<number>(filters.low);
  const [high, setHigh] = useState<number>(filters.high);
  const [colorList, setColorList] = useState<any>(() => syncColorSelections(filters.colors));
  const [sizeList, setSizeList] = useState<any>(() => syncSizeSelections(filters.sizes));
  const [currentCategory, setCurrentCategory] = useState<number>(
    Math.max(productCategories.indexOf(filters.category), 0)
  );

  const handleValueChange = useCallback((lowValue: number, highValue: number) => {
    setLow(lowValue);
    setHigh(highValue);
  }, []);

  const handleColorSelection = (index: number) => {
    setColorList(
      Object.assign([], colorList, {
        [index]: { color: colorList[index].color, selected: !colorList[index].selected },
      })
    );
  };

  const handleSizeSelection = (index: number) => {
    setSizeList(
      Object.assign([], sizeList, {
        [index]: { size: sizeList[index].size, selected: !sizeList[index].selected },
      })
    );
  };

  return (
    <>
      <AppContainer>
        <View style={styles.container}>
          <PriceRange
            title={t('common:priceRange')}
            onValueChanged={handleValueChange}
            low={low}
            high={high}
          />
          <ColorSelection
            title={t('common:colors')}
            colors={colorList}
            onColorSelection={handleColorSelection}
          />
          <SizeSelection
            title={t('common:sizes')}
            sizes={sizeList}
            onSizeSelection={handleSizeSelection}
          />
          <CategorySelection
            title={t('common:category')}
            categories={productCategories}
            currentCategory={currentCategory}
            onCategorySelection={setCurrentCategory}
          />
        </View>
      </AppContainer>
      <GlassSurface surfaceRole='chrome' style={styles.bottom}>
        <View style={[styles.horizontalContainer, { justifyContent: 'space-between' }]}>
          <AppButton
            title={t('common:discard')}
            onPress={() => {
              resetFilters();
              navigation.goBack();
            }}
            style={{ width: scale(155) }}
            variant='outline'
          />
          <AppButton
            title={t('common:apply')}
            onPress={() => {
              applyFilters({
                category: productCategories[currentCategory],
                colors: colorList.filter((item) => item.selected).map((item) => item.color),
                high,
                low,
                sizes: sizeList.filter((item) => item.selected).map((item) => item.size),
              });
              navigation.goBack();
            }}
            style={{ width: scale(155) }}
          />
        </View>
      </GlassSurface>
    </>
  );
};

export default ProductFilter;
