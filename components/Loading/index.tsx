/**
 * Loading.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */


import React, { useEffect } from 'react';
import { Icon, Text, Overlay, IconProps } from '@rneui/themed';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { styles } from './styles';



type ILoadingProps = {
    isVisible: boolean;
    iconColor?: string;
    iconType?: string;
    text: string;
    subText?: string;
    iconName?: string;
    iconProps?: IconProps;
    fullScreen?: boolean;
    color: string;
};

const Loading = (props: ILoadingProps) => {
    const {
        fullScreen = true,
        isVisible, iconColor, text, iconName = 'search',
        iconType = 'font-awesome', iconProps = { size: 30, name: 'search' },
        color,
        subText
    } = props;

    const sharedValue = useSharedValue(1);

    useEffect(() => {
        sharedValue.value = withRepeat(withTiming(2, { duration: 1000 }), -1, true);
    }, [sharedValue]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: sharedValue.value }],
        };
    });


    return (
        <Overlay fullScreen={fullScreen} isVisible={isVisible} overlayStyle={styles.searchOverlay}>
            {iconColor && (
                <Animated.View
                    style={animatedStyle}
                >
                    <Icon
                        name={iconName}
                        type={iconType}
                        color={iconColor}
                        iconProps={iconProps}
                    />
                </Animated.View>
            )}
            <Text h1 style={[styles.searchText, { color }]}>{text}</Text>
            {subText && <Text h3 style={[styles.searchText, { color }]}>{subText}</Text>}
        </Overlay>
    );
}


export default Loading;