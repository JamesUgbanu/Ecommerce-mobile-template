/**
 * CategorySelection.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import { Text } from '@rneui/themed';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';
import { styles } from './styles';

type CategorySelectionProps = {
  categories: string[];
  onCategorySelection: (index: number) => void;
  title: string;
  currentCategory: number;
};

const CategorySelection = (props: CategorySelectionProps) => {
  const { categories, onCategorySelection, title, currentCategory } = props;
  const { colors } = useAppTheme();

  return (
    <>
      <Text style={[styles.text, { color: colors.textPrimary }]}>{title}</Text>
      <View
        style={[
          styles.range,
          { backgroundColor: colors.surface, borderColor: colors.borderSubtle },
        ]}
      >
        <View style={styles.wrapContainer}>
          {categories.length &&
            categories.map((category, index) => (
              <TouchableOpacity
                onPress={() => onCategorySelection(index)}
                key={index}
                style={[
                  styles.rectangle,
                  currentCategory === index
                    ? { backgroundColor: colors.accent }
                    : [styles.unSelectedBox, { borderColor: colors.borderStrong }],
                ]}
              >
                <Text
                  style={{
                    color: currentCategory === index ? colors.textInverse : colors.textPrimary,
                  }}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
      </View>
    </>
  );
};

export default CategorySelection;
