/**
 * ColorSelection.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import { Text } from '@rneui/themed';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';
import { styles } from './styles';

type ColorSelectionProps = {
  colors: [
    {
      color: string;
      selected: boolean;
    },
  ];
  onColorSelection: (index: number) => void;
  title: string;
};

const ColorSelection = (props: ColorSelectionProps) => {
  const { colors, onColorSelection, title } = props;
  const { colors: themeColors } = useAppTheme();

  return (
    <>
      <Text style={[styles.text, { color: themeColors.textPrimary }]}>{title}</Text>
      <View
        style={[
          styles.range,
          { backgroundColor: themeColors.surface, borderColor: themeColors.borderSubtle },
        ]}
      >
        <ScrollView horizontal>
          <View style={styles.horizontalContainer}>
            {colors.length &&
              colors.map((color, index) => (
                <View
                  key={index}
                  style={[
                    styles.bigCircle,
                    color.selected && [styles.selectedCircle, { borderColor: themeColors.accent }],
                  ]}
                >
                  <TouchableOpacity
                    onPress={() => onColorSelection(index)}
                    style={[styles.smallCircle, { backgroundColor: color.color }]}
                  />
                </View>
              ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default ColorSelection;
