/**
 * PriceRange.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */


import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import Slider from 'rn-range-slider';
import { styles } from './styles';
import Thumb from '../../components/Slider/Thumb';
import Rail from '../../components/Slider/Rail';
import RailSelected from '../../components/Slider/RailSelected';


type PriceRangeProps = {
    title: string;
    low: number;
    high: number;
    onValueChanged: (lowValue: number, highValue: number) => void;
    min?: number;
    max?: number;
};

const PriceRange = (props: PriceRangeProps) => {
    const { title, onValueChanged, low, high, min = 0, max = 200 } = props;



    const renderThumb = useCallback(
        (name: 'high' | 'low') => <Thumb name={name} />,
        [],
    );
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => <RailSelected />, []);

    return (
        <>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.range}>
                <View style={[styles.horizontalContainer, { justifyContent: 'space-between' }]}>
                    <Text style={styles.valueText}>{'$'}{low}</Text>
                    <Text style={styles.valueText}>{'$'}{high}</Text>
                </View>
                <Slider
                    min={min}
                    max={max}
                    low={low}
                    high={high}
                    step={1}
                    renderThumb={renderThumb}
                    renderRail={renderRail}
                    renderRailSelected={renderRailSelected}
                    onValueChanged={onValueChanged}
                />
            </View>
        </>
    );
}


export default PriceRange;