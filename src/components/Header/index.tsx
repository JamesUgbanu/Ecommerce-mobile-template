import { Header as HeaderRNE, useTheme } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { getHeaderTitle } from '../../utils/getRoute';
import AppIcon from '../common/AppIcon';
import { styles } from './styles';

interface HeaderComponentProps {
  navigation?: any;
  route?: any;
  isShowHeading?: boolean;
  isShowBackIcon?: boolean;
  isShowSearchIcon?: boolean;
}

const Header: React.FunctionComponent<HeaderComponentProps> = (props) => {
  const {
    route,
    navigation,
    isShowHeading = false,
    isShowBackIcon = true,
    isShowSearchIcon = false,
  } = props;
  const { theme } = useTheme();

  const title = getHeaderTitle(route);
  const isShowHeader = isShowBackIcon || isShowSearchIcon;

  const handleSearch = () => {
    navigation.navigate('VisualSearch');
  };

  const goBack = () => {
    navigation.canGoBack() && navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      {isShowHeader && (
        <HeaderRNE
          leftComponent={
            <View>
              {isShowBackIcon && (
                <TouchableOpacity onPress={goBack}>
                  <AppIcon
                    type='antdesign'
                    name='left'
                    color={theme.colors.black}
                    iconStyle={styles.icon}
                  />
                </TouchableOpacity>
              )}
            </View>
          }
          rightComponent={
            <View>
              {isShowSearchIcon && (
                <TouchableOpacity onPress={handleSearch}>
                  <AppIcon
                    type='fontawesome-5'
                    name='search'
                    color={theme.colors.black}
                    iconStyle={styles.icon}
                  />
                </TouchableOpacity>
              )}
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
