/**
 * SortBy.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import React from 'react';
import { View } from 'react-native';
import { useTheme, Text, ListItem } from '@rneui/themed';

type SortByProps = {
    sortItems: { [key: string]: any }[];
    setCurrentSort: (index: number) => void;
    currentSortIndex: number;
};

const SortBy = (props: SortByProps) => {
    const {
        sortItems, setCurrentSort, currentSortIndex
    } = props;
    const { theme } = useTheme();

    return (
        <View style={{ marginVertical: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "500", textAlign: "center" }}>Sort by</Text>
            <View style={{ marginTop: 20 }}>
                {sortItems.length && sortItems.map((sortItem, index) => (
                    <ListItem key={index} containerStyle={[{ backgroundColor: theme.colors.white }, currentSortIndex === index && { backgroundColor: theme.colors.error }]} onPress={() => setCurrentSort(index)}>
                        <ListItem.Content>
                            <ListItem.Title style={[{ color: theme.colors.black }, currentSortIndex === index && { color: theme.colors.white }]}>{sortItem.name}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))
                }
            </View>
        </View>
    );
}


export default SortBy;