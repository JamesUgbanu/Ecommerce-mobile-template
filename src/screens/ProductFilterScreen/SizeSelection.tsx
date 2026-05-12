/**
 * SizeSelection.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import { Text } from '@rneui/themed';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
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

  return (
    <>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.range}>
        <ScrollView horizontal>
          <View style={styles.horizontalContainer}>
            {sizes.length &&
              sizes.map((size, index) => (
                <TouchableOpacity
                  onPress={() => onSizeSelection(index)}
                  key={index}
                  style={[styles.square, size.selected ? styles.selectedBox : styles.unSelectedBox]}
                >
                  <Text style={size.selected && { color: '#fff' }}>{size.size}</Text>
                </TouchableOpacity>
              ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default SizeSelection;
