import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header as HeaderRNE, Icon, FullTheme, Text } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from './styles';

interface HeaderComponentProps {
    theme: FullTheme;
    navigation?: any;
    showBackIcon?: boolean;
    showSearchIcon?: boolean;
    title?: string;
    heading?: string;
};


const Header: React.FunctionComponent<HeaderComponentProps> = (props) => {
    const { theme, navigation, showBackIcon = false, showSearchIcon = false, title = '', heading } = props;

    const docsNavigate = () => {
        alert(`hi`);
    };

    return (
        <SafeAreaProvider>
            <StatusBar style="auto" />
            <HeaderRNE
                leftComponent={
                    <View style={styles.header}>
                        {showBackIcon && (
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
                            showSearchIcon && (
                                <TouchableOpacity
                                    onPress={docsNavigate}
                                >
                                    <Icon type="antdesign" name="search1" color={theme.colors.black} iconStyle={styles.icon} />
                                </TouchableOpacity>
                            )
                        }
                    </View>
                }
                centerComponent={{ text: title, style: styles.heading }}
            />
            {heading && (
                <View style={styles.title}>
                    <Text h1>{heading}</Text>
                </View>
            )}
        </SafeAreaProvider>
    );
};

export default Header;