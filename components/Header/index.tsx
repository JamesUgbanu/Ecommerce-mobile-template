import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header as HeaderRNE, Icon, FullTheme, Text } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTranslation } from "react-i18next";
import { styles } from './styles';
import { getRouteName, getHeaderTitle } from '../../utils/getRoute';

interface HeaderComponentProps {
    theme: FullTheme;
    navigation?: any;
    route?: any;
};


const Header: React.FunctionComponent<HeaderComponentProps> = (props) => {
    const { t } = useTranslation();
    const { theme, route, navigation } = props;

    const isShowBackIcon = getHeaderTitle(route) !== t("common:home");
    const isShowSearchIcon = getRouteName(route) === t("common:categories");
    const isShowHeader = getRouteName(route) !== t("common:home");
    const title = getHeaderTitle(route);
    const heading = getHeaderTitle(route);

    const docsNavigate = () => {
        alert(`hi`);
    };

    return (

        <SafeAreaProvider>
            {
                isShowHeader && (
                    <>
                        <StatusBar style="auto" />
                        <HeaderRNE
                            leftComponent={
                                <View style={styles.header}>
                                    {isShowBackIcon && (
                                        <TouchableOpacity
                                            onPress={() => navigation.canGoBack() && navigation.goBack()}
                                        >
                                            <Icon type="antdesign" name="left" color={theme.colors.black} iconStyle={styles.icon} />
                                        </TouchableOpacity>
                                    )}
                                </View>
                            }
                            rightComponent={
                                <View style={styles.header}>
                                    {
                                        isShowSearchIcon && (
                                            <TouchableOpacity
                                                onPress={docsNavigate}
                                            >
                                                <Icon type="antdesign" name="search1" color={theme.colors.black} iconStyle={styles.icon} />
                                            </TouchableOpacity>
                                        )
                                    }
                                </View>
                            }
                            centerComponent={{ text: title, style: styles.title }}
                        />
                        {heading && (
                            <View style={styles.heading}>
                                <Text h1>{heading}</Text>
                            </View>
                        )}
                    </>
                )
            }
        </SafeAreaProvider>
    );
};

export default Header;