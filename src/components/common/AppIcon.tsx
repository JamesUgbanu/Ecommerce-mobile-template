import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import React from 'react';
import {
  type StyleProp,
  StyleSheet,
  type TextStyle,
  TouchableOpacity,
  View,
  type ViewStyle,
} from 'react-native';
import { radius, shadows, spacing } from '../../design-system';
import { useAppTheme } from '../../hooks/useAppTheme';

type SupportedIconType =
  | 'antdesign'
  | 'font-awesome'
  | 'fontawesome-5'
  | 'ionicons'
  | 'material-community'
  | 'material-icons';

export type AppIconProps = {
  accessibilityLabel?: string;
  name: string;
  type?: SupportedIconType | string;
  color?: string;
  size?: number;
  iconStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  disabled?: boolean;
  raised?: boolean;
  reverse?: boolean;
  reverseColor?: string;
};

const iconRegistry = {
  antdesign: AntDesign,
  'font-awesome': FontAwesome,
  'fontawesome-5': FontAwesome5,
  ionicons: Ionicons,
  'material-community': MaterialCommunityIcons,
  'material-icons': MaterialIcons,
} as const;

const AppIcon = ({
  accessibilityLabel,
  color,
  containerStyle,
  disabled = false,
  iconStyle,
  name,
  onPress,
  raised = false,
  reverse = false,
  reverseColor,
  size = 24,
  type = 'material-icons',
}: AppIconProps) => {
  const { colors } = useAppTheme();
  const IconComponent = iconRegistry[type as keyof typeof iconRegistry] ?? MaterialIcons;
  const baseColor = color ?? colors.textPrimary;
  const actualColor = reverse ? (reverseColor ?? colors.textInverse) : baseColor;

  const content = (
    <View
      style={[
        styles.container,
        reverse ? [styles.reverse, { backgroundColor: baseColor }] : null,
        raised
          ? [styles.raised, { backgroundColor: colors.surface, borderColor: colors.borderSubtle }]
          : null,
        containerStyle,
      ]}
    >
      <IconComponent name={name as never} color={actualColor} size={size} style={iconStyle} />
    </View>
  );

  if (!onPress) {
    return content;
  }

  return (
    <TouchableOpacity
      accessibilityLabel={accessibilityLabel}
      accessibilityRole='button'
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
    >
      {content}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  reverse: {
    borderRadius: radius.pill,
    padding: spacing.sm,
  },
  raised: {
    borderRadius: radius.pill,
    borderWidth: StyleSheet.hairlineWidth,
    padding: spacing.sm,
    ...shadows.sm,
  },
});

export default AppIcon;
