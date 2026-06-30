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
  color = '#222222',
  containerStyle,
  disabled = false,
  iconStyle,
  name,
  onPress,
  raised = false,
  reverse = false,
  reverseColor = '#FFFFFF',
  size = 24,
  type = 'material-icons',
}: AppIconProps) => {
  const IconComponent = iconRegistry[type as keyof typeof iconRegistry] ?? MaterialIcons;
  const actualColor = reverse ? reverseColor : color;

  const content = (
    <View
      style={[
        styles.container,
        reverse ? [styles.reverse, { backgroundColor: color }] : null,
        raised ? styles.raised : null,
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
    borderRadius: 999,
    padding: 10,
  },
  raised: {
    backgroundColor: '#FFFFFF',
    borderRadius: 999,
    elevation: 3,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
  },
});

export default AppIcon;
