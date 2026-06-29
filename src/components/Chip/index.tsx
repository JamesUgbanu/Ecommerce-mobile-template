/**
 * Chip.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import { Text } from '@rneui/themed';
import React from 'react';
import GlassSurface from '../surfaces/GlassSurface';
import { styles } from './styles';

type ChipProps = {
  paddingVertical?: number;
  paddingHorizontal?: number;
  backgroundColor: string;
  color: string;
  fontSize?: number;
  text: string;
};

const Chip = (props: ChipProps) => {
  const {
    paddingVertical = 5,
    paddingHorizontal = 20,
    backgroundColor = 'black',
    color,
    text,
    fontSize,
  } = props;

  return (
    <GlassSurface
      elevated={false}
      surfaceRole='control'
      style={[styles.contentView, { paddingVertical, paddingHorizontal, backgroundColor }]}
    >
      <Text
        style={{
          color,
          fontSize,
        }}
      >
        {text}
      </Text>
    </GlassSurface>
  );
};

export default Chip;
