import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { styles } from './styles';


type ChipProps = {
    paddingVertical?: number;
    paddingHorizontal?: number;
    backgroundColor: string;
    color: string;
    fontSize?: number;
    text: string;
};

const Chip = (props: ChipProps) => {
    const { paddingVertical = 5, paddingHorizontal = 20, backgroundColor = 'black', color, text, fontSize } = props;

    return (
        <View style={[styles.contentView, { paddingVertical, paddingHorizontal, backgroundColor }]}>
            <Text style={{
                color, fontSize
            }}>{text}</Text>
        </View>
    );
}


export default Chip;