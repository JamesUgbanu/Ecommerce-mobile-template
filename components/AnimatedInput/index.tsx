import {
  Pressable,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import React, { useRef, useEffect } from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import { useTheme } from '@rneui/themed';
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
  value: string;
  onChangeText: (value: string) => void;
  placeholderBackgroundColor?: string;
  isValid?: boolean;
};

const AnimatedIcon = Animated.createAnimatedComponent(Feather);

const AnimatedTextInput = (props: InputTextProps) => {
  const {
    textInputProps,
    labelTopValue = -20,
    borderColor = 'transparent',
    borderWidth = 1,
    paddingVertical = 18,
    borderRadius = 4,
    placeholder = 'Email',
    value = '',
    marginBottom = 10,
    onChangeText,
    isValid
  } = props;

  const labelSharedValue = useSharedValue(0);
  const iconSharedValue = useSharedValue(value === "" ? 0 : 1);
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
    iconSharedValue.value = withTiming(value === "" ? 0 : 1);
  }, [labelHandler, value]);

  return (
    <View style={styles(paddingVertical, borderWidth, borderRadius, isValid === false && value ? theme.colors.error : borderColor, marginBottom).textInput}>
      <TextInput
        {...textInputProps}
        ref={inputRef}
        onFocus={() => (labelSharedValue.value = 1)}
        onBlur={() => {
          if (!value) labelSharedValue.value = 0;
        }}
        value={value}
        onChangeText={onChangeText}
        style={[styles().textInputStyle]}
      />
      <Animated.View style={styles().textInputLabelWrapper}>
        <Pressable onPress={labelHandler}>
          <Animated.Text
            style={[
              animatedLabelProps,
              { color: theme.colors.grey0, paddingHorizontal: 2 },
            ]}
          >
            {placeholder}
          </Animated.Text>
        </Pressable>
      </Animated.View>
        <Animated.View style={[styles().icon, animatedIconProps]}>
          <AnimatedIcon
            name={isValid ? "check" : "x"}
            size={24}
            color={isValid ? theme.colors.success : theme.colors.error}
          />
        </Animated.View>
    </View>
  );
};

export default AnimatedTextInput;
