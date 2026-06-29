import * as Haptics from 'expo-haptics';
import React from 'react';
import {
  Pressable,
  type PressableProps,
  type StyleProp,
  StyleSheet,
  Text,
  type TextStyle,
  View,
  type ViewStyle,
} from 'react-native';

import { radius, spacing, typography } from '../../design-system';
import { useAppTheme } from '../../hooks/useAppTheme';
import GlassSurface from '../surfaces/GlassSurface';

type AppButtonVariant = 'solid' | 'outline' | 'ghost' | 'glass';

type AppButtonProps = PressableProps & {
  icon?: React.ReactNode;
  title: string;
  variant?: AppButtonVariant;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const AppButton = ({
  containerStyle,
  disabled,
  icon,
  onPress,
  style,
  textStyle,
  title,
  variant = 'solid',
  ...pressableProps
}: AppButtonProps) => {
  const { colors } = useAppTheme();
  const isGlass = variant === 'glass';

  const handlePress: PressableProps['onPress'] = (event) => {
    Haptics.selectionAsync().catch(() => undefined);
    onPress?.(event);
  };

  const pressable = (
    <Pressable
      {...pressableProps}
      disabled={disabled}
      onPress={handlePress}
      style={({ pressed }) => [
        styles.button,
        variant === 'solid' && { backgroundColor: colors.accent },
        variant === 'outline' && {
          backgroundColor: 'transparent',
          borderColor: colors.textPrimary,
          borderWidth: StyleSheet.hairlineWidth,
        },
        variant === 'ghost' && { backgroundColor: 'transparent' },
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        style as StyleProp<ViewStyle>,
      ]}
    >
      <View style={styles.content}>
        {icon}
        <Text
          style={[
            styles.text,
            { color: variant === 'solid' ? '#FFFFFF' : colors.textPrimary },
            textStyle,
          ]}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  );

  if (isGlass) {
    return (
      <GlassSurface
        elevated
        interactive
        surfaceRole='control'
        style={[styles.glassContainer, containerStyle]}
      >
        {pressable}
      </GlassSurface>
    );
  }

  return <View style={containerStyle}>{pressable}</View>;
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: radius.pill,
    justifyContent: 'center',
    minHeight: 48,
    paddingHorizontal: spacing['2xl'],
    paddingVertical: spacing.md,
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.48,
  },
  glassContainer: {
    borderRadius: radius.pill,
  },
  pressed: {
    opacity: 0.78,
    transform: [{ scale: 0.98 }],
  },
  text: {
    ...typography.button,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default AppButton;
