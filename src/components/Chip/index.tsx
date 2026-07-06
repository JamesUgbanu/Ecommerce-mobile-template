/**
 * Chip.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import { Text } from '@rneui/themed';
import React from 'react';
import { spacing, typography } from '../../design-system';
import { useAppTheme } from '../../hooks/useAppTheme';
import GlassSurface from '../surfaces/GlassSurface';
import { styles } from './styles';

type ChipProps = {
  paddingVertical?: number;
  paddingHorizontal?: number;
  backgroundColor?: string;
  color?: string;
  fontSize?: number;
  text: string;
};

const Chip = (props: ChipProps) => {
  const {
    paddingVertical = spacing.sm,
    paddingHorizontal = spacing.xl,
    backgroundColor,
    color,
    text,
    fontSize,
  } = props;
  const { colors } = useAppTheme();

  return (
    <GlassSurface
      elevated={false}
      surfaceRole='control'
      style={[
        styles.contentView,
        {
          backgroundColor: backgroundColor ?? colors.textPrimary,
          paddingHorizontal,
          paddingVertical,
        },
      ]}
    >
      <Text
        style={{
          color: color ?? colors.textInverse,
          fontSize: fontSize ?? typography.button.fontSize,
        }}
      >
        {text}
      </Text>
    </GlassSurface>
  );
};

export default Chip;
