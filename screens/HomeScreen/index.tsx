import React from 'react';
import { ScrollView, View, ImageBackground, TouchableHighlight, Dimensions } from 'react-native';
import { Button, Text } from '@rneui/themed';
import { useTranslation } from "react-i18next";
import { styles } from './styles';
import { images } from "../../constants";
import ProductCard from '../../components/ProductCard';

const Home = ({ navigation }) => {
    const { t } = useTranslation();
    const screenHeight = Dimensions.get('window').height;
    const sixtyFivePercentOfScreenHeight = screenHeight * 0.65;

    return (
        <ScrollView>
            <View style={styles().container}>
                <View style={styles(sixtyFivePercentOfScreenHeight).imageContainer}>
                    <ImageBackground source={images.bigBanner} resizeMode="cover" style={styles().image}>
                        <Text style={styles().text}>{t('common:fashionSale')}</Text>
                        <Button
                            size="sm"
                            title={t('common:check')}
                            onPress={() => { }}
                            containerStyle={styles().button}
                        />
                    </ImageBackground>
                </View>
                <View style={styles().titleContainer}>
                    <View>
                        <Text h1>{t('common:new')}</Text>
                        <Text h3 style={styles().subTitle}>{t('common:homeSubTitle')}</Text>
                    </View>
                    <TouchableHighlight underlayColor="transparent" onPress={() => navigation.navigate('Profile')}>
                        <Text h3>{t('common:viewAll')}</Text>
                    </TouchableHighlight>
                </View>
                <ScrollView horizontal>
                    <View style={styles().productContainer}>
                        <ProductCard category="Dorothy Perkins" name="Evening Dress" ratingValue={3} totalRating={10} />
                    </View>
                </ScrollView>
            </View>
        </ScrollView>
    );
}


export default Home;