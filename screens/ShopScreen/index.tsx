import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Text } from '@rneui/themed';
import { useTranslation } from "react-i18next";
import { styles } from './styles';
import { images } from "../../constants";

const Shop = ({ navigation }) => {
    const { t } = useTranslation();

    return (
        <ScrollView>
            <View style={styles.container}>
            </View>
        </ScrollView>
    );
}


export default Shop;