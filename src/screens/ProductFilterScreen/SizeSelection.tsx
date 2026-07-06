/**
 * SizeSelection.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import { Text } from '@rneui/themed';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';
import { styles } from './styles';

type SizeSelectionProps = {
  sizes: [
    {
      size: string;
      selected: boolean;
    },
  ];
  onSizeSelection: (index: number) => void;
  title: string;
};

const SizeSelection = (props: SizeSelectionProps) => {
  const { sizes, onSizeSelection, title } = props;
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
        <ScrollView horizontal>
          <View style={styles.horizontalContainer}>
            {sizes.length &&
              sizes.map((size, index) => (
                <TouchableOpacity
                  onPress={() => onSizeSelection(index)}
                  key={index}
                  style={[
                    styles.square,
                    size.selected
                      ? { backgroundColor: colors.accent }
                      : [styles.unSelectedBox, { borderColor: colors.borderStrong }],
                  ]}
                >
                  <Text style={{ color: size.selected ? colors.textInverse : colors.textPrimary }}>
                    {size.size}
                  </Text>
                </TouchableOpacity>
              ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default SizeSelection;
