import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { useTheme, Text } from '@rneui/themed';
import Slider from 'rn-range-slider';
import { styles } from './styles';
import AppContainer from '../../components/HOC/AppContainer';
import Thumb from '../../components/Slider/Thumb';
import Rail from '../../components/Slider/Rail';
import RailSelected from '../../components/Slider/RailSelected';

const ProductFilter = ({ route }) => {
    const { theme } = useTheme();
    const [low, setLow] = useState(78);
    const [high, setHigh] = useState(143);



    const renderThumb = useCallback(
        (name: 'high' | 'low') => <Thumb name={name} />,
        [],
    );
    const renderRail = useCallback(() => <Rail />, []);
    const renderRailSelected = useCallback(() => <RailSelected />, []);
    const handleValueChange = useCallback((lowValue, highValue) => {
        setLow(lowValue);
        setHigh(highValue);
    }, []);

    return (
        <AppContainer>
            <View style={styles.container}>
                <Text style={styles.text}>Price range</Text>
                <View style={styles.range}>
                    <View style={styles.horizontalContainer}>
                        <Text style={styles.valueText}>{'$'}{low}</Text>
                        <Text style={styles.valueText}>{'$'}{high}</Text>
                    </View>
                    <Slider
                        min={0}
                        max={200}
                        low={low}
                        high={high}
                        step={1}
                        renderThumb={renderThumb}
                        renderRail={renderRail}
                        renderRailSelected={renderRailSelected}
                        onValueChanged={handleValueChange}
                    />
                </View>
                <Text style={styles.text}>Colors</Text>
                <View style={styles.range}>

                </View>
            </View>
        </AppContainer>
    );
}


export default ProductFilter;