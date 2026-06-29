/**
 * TabBar.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import { Text } from '@rneui/themed';
import * as Haptics from 'expo-haptics';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import SvgIcon from '../../components/SvgIcon';
import { TAB_BAR_HEIGHT } from '../../constants';
import { useAppTheme } from '../../hooks/useAppTheme';
import GlassSurface from '../surfaces/GlassSurface';
import { styles } from './styles';

type TabBarProps = {
  style?: { [key: string]: any };
  navigation?: any;
  height?: number;
  state: any;
  descriptors: any;
};

const TabBar = (props: TabBarProps) => {
  const { style, navigation, height = TAB_BAR_HEIGHT, state, descriptors } = props;
  const { colors } = useAppTheme();

  const onPress = (route, isFocused) => {
    Haptics.selectionAsync().catch(() => undefined);
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
    <GlassSurface
      surfaceRole='chrome'
      style={[styles(height).container, style]}
      contentStyle={styles().content}
    >
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
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={() => onPress(route, isFocused)}
            onLongPress={() => onLongPress(route)}
            key={index}
          >
            <View style={styles().center}>
              <SvgIcon
                name={label.toLowerCase()}
                color={isFocused ? colors.accent : colors.textSecondary}
                isFocused={isFocused}
                width={30}
                height={30}
              />
              <Text
                style={[
                  styles().navText,
                  { color: isFocused ? colors.accent : colors.textSecondary },
                ]}
              >
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </GlassSurface>
  );
};

export default TabBar;
