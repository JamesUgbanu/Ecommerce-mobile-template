import React from 'react';
import { View, ScrollView } from 'react-native';
import { useTheme } from '@rneui/themed';
import { styles } from './styles';
import ProductCard from '../../components/ProductCard';
import ErrorBoundary from '../../components/HOC/ErrorBoundary';
import AppContainer from '../../components/HOC/AppContainer';
import { products, tags } from "../../data";
import Chip from "../../components/Chip";

const Category = ({ route }) => {
    const { theme } = useTheme();
    const category: string = route.params.category;

    return (
        <AppContainer>
            <View style={styles.container}>
                <ScrollView horizontal>
                    {tags.length && tags.map((tag: string, index: number) => (
                        <Chip key={index} color={theme.colors.white} backgroundColor={theme.colors.black} text={tag} />
                    ))}
                </ScrollView>
                <View>
                    
                </View>
                <View style={styles.productContainer}>
                    {products && products.map((product, index) => (
                        <ProductCard
                            key={index}
                            category={product.category}
                            name={product.name}
                            ratingValue={product.ratingValue}
                            totalRating={product.totalRating}
                            price={product.price}
                            salePrice={product.salePrice}
                            image={product.image}
                            buttonStyle={{ backgroundColor: `${theme.colors.primary}` }}
                            imageWidth={155}
                            imageHeight={160}
                            label={product.discount}
                            badgeStyle={product.discount && { backgroundColor: theme.colors.error }}
                        />
                    ))}
                </View>
            </View>
        </AppContainer>
    );
}


export default ErrorBoundary(Category);