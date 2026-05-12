import { Icon, IconProps, Overlay, Text } from '@rneui/themed';
import React from 'react';
import { styles } from './styles';

type ILoadingProps = {
  isVisible: boolean;
  iconColor?: string;
  iconType?: string;
  text: string;
  iconName?: string;
  iconProps?: IconProps;
  fullScreen?: boolean;
  color: string;
};

const Loading = (props: ILoadingProps) => {
  const {
    fullScreen = true,
    isVisible,
    iconColor,
    text,
    iconName = 'search',
    iconType = 'font-awesome',
    iconProps = { size: 44, name: 'search' },
    color,
  } = props;

  return (
    <Overlay fullScreen={fullScreen} isVisible={isVisible} overlayStyle={styles.searchOverlay}>
      {iconName && <Icon name={iconName} type={iconType} color={iconColor} iconProps={iconProps} />}
      <Text h1 style={[styles.searchText, { color }]}>
        {text}
      </Text>
    </Overlay>
  );
};

export default Loading;
