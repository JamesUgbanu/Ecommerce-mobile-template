import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header as HeaderRNE, Icon, Text, useTheme } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';
import { getRouteName, getHeaderTitle } from '../../utils/getRoute';

interface HeaderComponentProps {
    navigation?: any;
    route?: any;
    isShowHeading?: boolean;
    isShowBackIcon?: boolean;
    isShowSearchIcon?: boolean;
};


const Header: React.FunctionComponent<HeaderComponentProps> = (props) => {
    const { route, navigation, isShowHeading = false, isShowBackIcon = true, isShowSearchIcon = false } = props;
    const { theme } = useTheme();

    const title = getHeaderTitle(route);
    const heading = getRouteName(route);
    const isShowHeader = isShowBackIcon || isShowSearchIcon;

    const docsNavigate = () => {
        alert(`hi`);
    };

    const goBack = () => {
        navigation.canGoBack() && navigation.goBack()
    }

    return (

        <>
            {
                isShowHeader && (
                    <View>
                        <StatusBar style="auto" />
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
                                                onPress={docsNavigate}
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
                        {isShowHeading && heading && (
                            <View style={styles.heading}>
                                <Text h1>{heading}</Text>
                            </View>
                        )}
                    </View>
                )
            }
        </>
    );
};

export default Header;