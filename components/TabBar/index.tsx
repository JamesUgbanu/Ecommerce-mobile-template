/**
 * TabBar.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */


import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '@rneui/themed';
import { styles } from './styles';
import SvgIcon from '../../components/SvgIcon';
import { TAB_BAR_HEIGHT } from '../../constants';

type TabBarProps = {
    style?: {[key: string]: any};
    navigation?: any;
    height?: number;
    state: any;
    descriptors: any;
};

const TabBar = (props: TabBarProps) => {
    const {
        style,
        navigation,
        height = TAB_BAR_HEIGHT,
        state,
        descriptors
    } = props

    const onPress = (route, isFocused) => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
        }
    };
    const onLongPress = (route) => {
        navigation.emit({
            type: 'tabLongPress',
            target: route.key,
        });
    };


    return (
        <View style={[styles(height).container, style]}>
            <View style={styles().content}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;
                    return (
                        <TouchableOpacity
                            style={styles().navItem}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={() => onPress(route, isFocused)}
                            onLongPress={() => onLongPress(route)}
                            key={index}
                        >
                            <View style={styles().center}>
                                <SvgIcon name={label.toLowerCase()} color={isFocused ? '#DB3022' : '#9B9B9B'} isFocused={isFocused} width={30} height={30} />
                                <Text style={[styles().navText, { color: isFocused ? '#DB3022' : '#9B9B9B' }]}>
                                    {label}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    );
}


export default TabBar;