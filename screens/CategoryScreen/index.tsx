import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme, Text, Icon } from '@rneui/themed';
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
                <View style={styles.topBox}>
                    <ScrollView horizontal>
                        {tags.length && tags.map((tag: string, index: number) => (
                            <Chip key={index} color={theme.colors.white} backgroundColor={theme.colors.black} text={tag} />
                        ))}
                    </ScrollView>
                    <View style={styles.filterContainer}>
                        <TouchableOpacity style={styles.row} onPress={() => console.log('hi')}>
                            <Icon type="material-icons" size={25} name="filter-list" color={theme.colors.black} />
                            <Text style={styles.filterText}>{'Filters'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.row}>
                            <Icon type="material-icons" size={25} name="swap-vert" color={theme.colors.black} />
                            <Text style={styles.filterText}>{'Price: lowest to high'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.row}>
                            <Icon type="material-icons" size={25} name="view-list" color={theme.colors.black} />
                        </TouchableOpacity>
                    </View>
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