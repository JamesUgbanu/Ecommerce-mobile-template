/**
 * SortBy.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import { ListItem, Text } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { spacing, typography } from '../../design-system';
import { useAppTheme } from '../../hooks/useAppTheme';

type SortByProps = {
  sortItems: { [key: string]: any }[];
  setCurrentSort: (index: number) => void;
  currentSortIndex: number;
};

const SortBy = (props: SortByProps) => {
  const { sortItems, setCurrentSort, currentSortIndex } = props;
  const { colors } = useAppTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.textPrimary }]}>Sort by</Text>
      <View style={styles.list}>
        {sortItems.length &&
          sortItems.map((sortItem, index) => (
            <ListItem
              key={index}
              containerStyle={[
                { backgroundColor: colors.surface },
                currentSortIndex === index && { backgroundColor: colors.accent },
              ]}
              onPress={() => setCurrentSort(index)}
            >
              <ListItem.Content>
                <ListItem.Title
                  style={[
                    { color: colors.textPrimary },
                    currentSortIndex === index && { color: colors.textInverse },
                  ]}
                >
                  {sortItem.name}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.md,
  },
  list: {
    marginTop: spacing.xl,
  },
  title: {
    ...typography.bodyStrong,
    textAlign: 'center',
  },
});

export default SortBy;
