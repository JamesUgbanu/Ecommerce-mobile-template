/**
 * Header.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */


import React, { Dispatch } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSelector, useDispatch } from 'react-redux';
import { Header as HeaderRNE, Icon, useTheme } from '@rneui/themed';
import { styles } from './styles';
import { getHeaderTitle } from '../../utils/getRoute';
import { IRootState } from '../../store';
import { reset } from "../../store/productSlice";

interface HeaderComponentProps {
    navigation?: any;
    route?: any;
    isShowHeading?: boolean;
    isShowBackIcon?: boolean;
    isShowSearchIcon?: boolean;
};


const Header: React.FunctionComponent<HeaderComponentProps> = (props) => {
    const { route, navigation, isShowHeading = false, isShowBackIcon = true, isShowSearchIcon = false } = props;
    const productState: any = useSelector((state: IRootState) => state.product);
    const dispatch: Dispatch<any> = useDispatch();
    const { theme } = useTheme();

    let title = getHeaderTitle(route);
    const isShowHeader = isShowBackIcon || isShowSearchIcon;
    title = title ? title : productState.category;

    const handleSearch = () => {
        navigation.navigate('VisualSearch');
    };

    const goBack = () => {
        navigation.canGoBack() && navigation.goBack()
        dispatch(reset())
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {isShowHeader && (
                <HeaderRNE
                    leftComponent={
                        <View>
                            {isShowBackIcon && (
                                <TouchableOpacity
                                    onPress={goBack}
                                >
                                    <Icon type="antdesign" name="left" color={theme.colors.black} iconStyle={styles.icon} />
                                </TouchableOpacity>
                            )}
                        </View>
                    }
                    rightComponent={
                        <View>
                            {
                                isShowSearchIcon && (
                                    <TouchableOpacity
                                        onPress={handleSearch}
                                    >
                                        <Icon type="fontawesome-5" name="search" color={theme.colors.black} iconStyle={styles.icon} />
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                    }
                    centerComponent={{ text: title, style: styles.title }}
                    backgroundColor={!isShowHeading && theme.colors.white}
                />
            )}
        </View>
    );
};

export default Header;