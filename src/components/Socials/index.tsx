/**
 * Socials.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import { Text } from '@rneui/themed';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import SvgIcon from '../../components/SvgIcon';
import { spacing as spacingTokens } from '../../design-system';
import ThemedSurface from '../surfaces/ThemedSurface';
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
      <Text h3 style={styles.label}>
        {loginOrRegisterText}
      </Text>
      <View style={styles.socials}>
        <TouchableOpacity accessibilityLabel='Continue with Google' accessibilityRole='button'>
          <ThemedSurface style={styles.socialButton}>
            <SvgIcon name='google' width={width} height={height} />
          </ThemedSurface>
        </TouchableOpacity>
        <View style={{ marginHorizontal: spacing ?? spacingTokens.sm }} />
        <TouchableOpacity accessibilityLabel='Continue with Facebook' accessibilityRole='button'>
          <ThemedSurface style={styles.socialButton}>
            <SvgIcon name='facebook' width={width} height={height} />
          </ThemedSurface>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Socials;
