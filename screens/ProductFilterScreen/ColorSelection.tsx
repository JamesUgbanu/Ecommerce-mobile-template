/**
 * ColorSelection.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';
import { styles } from './styles';


type ColorSelectionProps = {
    colors: [{
        color: string;
        selected: boolean;
    }];
    onColorSelection: (index: number) => void;
    title: string;
};

const ColorSelection = (props: ColorSelectionProps) => {
    const { colors, onColorSelection, title } = props;

    return (
        <>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.range}>
                <ScrollView horizontal>
                    <View style={styles.horizontalContainer}>
                        {
                            colors.length && colors.map((color, index) => (
                                <View key={index} style={[styles.bigCircle, color.selected && styles.selectedCircle]}>
                                    <TouchableOpacity onPress={() => onColorSelection(index)} style={[styles.smallCircle, { backgroundColor: color.color }]} />
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        </>
    );
}


export default ColorSelection;