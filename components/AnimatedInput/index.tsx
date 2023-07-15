/**
 * AnimatedInput.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */


import {
  Pressable,
  TextInput,
  TextInputProps,
  View
} from 'react-native';
import React, { useRef, useEffect } from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import { useTheme, Text } from '@rneui/themed';
import { Feather } from "@expo/vector-icons";
import { styles } from './styles';

type InputTextProps = {
  placeholder?: string;
  textInputProps?: TextInputProps;
  labelTopValue?: number;
  borderColor?: string;
  borderWidth?: number;
  paddingVertical?: number;
  borderRadius?: number;
  marginBottom?: number;
  marginTop?: number;
  value: string;
  onChangeText: (value: string) => void;
  onBlur: (value: any) => void;
  placeholderBackgroundColor?: string;
  isError?: boolean;
  errorText?: string;
  style?:  {[key: string]: any};
};

const AnimatedIcon = Animated.createAnimatedComponent(Feather);

const AnimatedTextInput = (props: InputTextProps) => {
  const {
    textInputProps,
    labelTopValue = -20,
    borderColor = 'transparent',
    borderWidth = 1,
    paddingVertical = 15,
    borderRadius = 4,
    placeholder = 'Email',
    value = '',
    marginBottom = 10,
    marginTop = 0,
    onChangeText,
    onBlur,
    isError,
    errorText,
    style
  } = props;

  const labelSharedValue = useSharedValue(0);
  const iconSharedValue = useSharedValue(0);
  const { theme } = useTheme();

  const inputRef = useRef<TextInput>(null);

  const animatedLabelProps = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(
        interpolate(labelSharedValue.value, [0, 1], [16, 12])
      ),
      top: withTiming(
        interpolate(labelSharedValue.value, [0, 1], [0, labelTopValue])
      ),
    };
  });

  const animatedIconProps = useAnimatedStyle(() => {
    return {
      marginRight: 14,
      opacity: interpolate(iconSharedValue.value, [0, 1], [0, 1]),
      transform: [
        {
          translateX: interpolate(
            iconSharedValue.value,
            [0, 1],
            [8, 0]
          ),
        },
      ],
    };
  });


  const labelHandler = () => {
    labelSharedValue.value = 1;
    inputRef?.current?.focus();
  };

  useEffect(() => {
    iconSharedValue.value = withTiming(1);
  }, [labelHandler]);


  return (
    <View style={{ marginBottom, marginTop, ...style }}>
      <View style={styles(paddingVertical, borderWidth, borderRadius, isError ? theme.colors.error : borderColor).textInput}>
        <TextInput
          {...textInputProps}
          ref={inputRef}
          onFocus={() => (labelSharedValue.value = 1)}
          onBlur={onBlur}
          value={value}
          onChangeText={onChangeText}
          style={[styles().textInputStyle]}
        />
        <Animated.View style={styles().textInputLabelWrapper}>
          <Pressable onPress={labelHandler}>
            <Animated.Text
              style={[
                animatedLabelProps,
                { color: isError ? theme.colors.error : theme.colors.grey0, paddingHorizontal: 2 },
              ]}
            >
              {placeholder}
            </Animated.Text>
          </Pressable>
        </Animated.View>
        {
          isError && (
            <Animated.View style={[styles().icon, animatedIconProps]}>
              <AnimatedIcon
                name={"x"}
                size={24}
                color={theme.colors.error}
              />
            </Animated.View>
          )
        }
        {
          !isError && value && (
            <Animated.View style={[styles().icon, animatedIconProps]}>
              <AnimatedIcon
                name={"check"}
                size={24}
                color={theme.colors.success}
              />
            </Animated.View>
          )
        }
      </View>
      {isError && <Text h3 style={{ color: theme.colors.error, textAlign: 'center', marginTop: 2 }}>{errorText}</Text>}
    </View>
  );
};

export default AnimatedTextInput;
