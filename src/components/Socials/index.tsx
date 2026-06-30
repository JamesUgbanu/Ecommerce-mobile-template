/**
 * Socials.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import SvgIcon from '../../components/SvgIcon';
import { styles } from './styles';

type SocialsProps = {
  spacing?: number;
  width?: number;
  height?: number;
  loginOrRegisterText?: string;
};

const Socials = (props: SocialsProps) => {
  const { width = 24, height = 24, spacing = 10, loginOrRegisterText } = props;

  return (
    <View>
      <Text>{loginOrRegisterText}</Text>
      <View style={styles.socials}>
        <TouchableOpacity
          accessibilityLabel='Continue with Google'
          accessibilityRole='button'
          style={styles.socialButton}
        >
          <SvgIcon name='google' width={width} height={height} />
        </TouchableOpacity>
        <View style={{ marginHorizontal: spacing }} />
        <TouchableOpacity
          accessibilityLabel='Continue with Facebook'
          accessibilityRole='button'
          style={styles.socialButton}
        >
          <SvgIcon name='facebook' width={width} height={height} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Socials;
