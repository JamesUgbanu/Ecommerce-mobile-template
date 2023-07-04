import React from 'react';
import { View, ImageBackground, Dimensions } from 'react-native';
import { Button, Text } from '@rneui/themed';
import { useTranslation } from "react-i18next";
import { styles } from './styles';
import { images } from "../../constants";

const Home = () => {
    const { t } = useTranslation();
    const screenHeight = Dimensions.get('window').height;
    const sixtyFivePercentOfScreenHeight = screenHeight * 0.65;

    return (
        <View style={styles().container}>
            <View style={styles(sixtyFivePercentOfScreenHeight).imageContainer}>
                <ImageBackground source={images.bigBanner} resizeMode="cover" style={styles().image}>
                    <Text style={styles().text}>Fashion sale</Text>
                    <Button
                        size="sm"
                        title={t('common:check')}
                        onPress={() => { }}
                        containerStyle={styles().button}
                    />
                </ImageBackground>
            </View>
        </View>
    );
}


export default Home;