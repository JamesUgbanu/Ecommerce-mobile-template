/**
 * CategorySelection.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';
import { styles } from './styles';


type CategorySelectionProps = {
    categories: string[];
    onCategorySelection: (index: number) => void;
    title: string;
    currentCategory: number;
};

const CategorySelection = (props: CategorySelectionProps) => {
    const { categories, onCategorySelection, title, currentCategory } = props;

    return (
        <>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.range}>
                    <View style={styles.wrapContainer}>
                        {
                            categories.length && categories.map((category, index) => (
                                <TouchableOpacity
                                    onPress={() => onCategorySelection(index)}
                                    key={index} style={[styles.rectangle, currentCategory === index ? styles.selectedBox : styles.unSelectedBox]}>
                                    <Text style={currentCategory === index && { color: '#fff' }} >{category}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
            </View>
        </>
    );
}


export default CategorySelection;