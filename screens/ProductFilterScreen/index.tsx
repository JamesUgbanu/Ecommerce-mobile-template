import React, { useCallback, useState } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme, Text } from '@rneui/themed';
import { styles } from './styles';
import AppContainer from '../../components/HOC/AppContainer';
import { colors } from "../../data";
import PriceRange from './PriceRange';
import ColorSelection from './ColorSelection';

const ProductFilter = ({ route }) => {
    const { theme } = useTheme();
    const [low, setLow] = useState<number>(78);
    const [high, setHigh] = useState<number>(143);
    const [colorList, setColorList] = useState<any>(colors);


    const handleValueChange = useCallback((lowValue: number, highValue: number) => {
        setLow(lowValue);
        setHigh(highValue);
    }, []);

    const handleColorSelection = (index: number) => {
        setColorList(Object.assign([], colorList, { [index]: { color: colorList[index].color, selected: !colorList[index].selected } }));
    }

    return (
        <AppContainer>
            <View style={styles.container}>
                <PriceRange
                    title="Price range"
                    onValueChanged={handleValueChange}
                    low={low}
                    high={high}
                />
                <ColorSelection title="Colors" colors={colorList} onColorSelection={handleColorSelection} />
            </View>
        </AppContainer>
    );
}


export default ProductFilter;