import { Header as HeaderRNE, useTheme } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { getHeaderTitle } from '../../utils/getRoute';
import AppIcon from '../common/AppIcon';
import GlassSurface from '../surfaces/GlassSurface';
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

  if (!isShowHeader) {
    return (
      <View style={styles.hiddenContainer}>
        <StatusBar style='auto' />
      </View>
    );
  }

  return (
    <GlassSurface
      elevated={!isShowHeading}
      surfaceRole='chrome'
      style={[styles.container, isShowHeading && styles.transparentContainer]}
    >
      <StatusBar style='auto' />
      <View style={styles.headerClip}>
        <HeaderRNE
          leftComponent={
            <View style={styles.side}>
              {isShowBackIcon && (
                <TouchableOpacity
                  accessibilityRole='button'
                  onPress={goBack}
                  style={styles.iconButton}
                >
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
            <View style={styles.side}>
              {isShowSearchIcon && (
                <TouchableOpacity
                  accessibilityRole='button'
                  onPress={handleSearch}
                  style={styles.iconButton}
                >
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
          backgroundColor='transparent'
          containerStyle={styles.rneContainer}
        />
      </View>
    </GlassSurface>
  );
};

export default Header;
