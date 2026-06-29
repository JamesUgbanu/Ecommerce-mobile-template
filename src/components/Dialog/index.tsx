/**
 * Dialog.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import { useTheme } from '@rneui/themed';
import React from 'react';
import { View } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

import GlassSurface from '../surfaces/GlassSurface';

type DialogProps = {
  children: React.ReactNode;
  indicatorStyle?: { [key: string]: any };
  containerStyle?: { [key: string]: any };
  actionSheetRef: any;
  style?: { [key: string]: any };
};

const Dialog = (props: DialogProps) => {
  const { theme } = useTheme();
  const {
    children,
    indicatorStyle = {
      width: 60,
      backgroundColor: theme.colors.grey0,
    },
    containerStyle = {
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      backgroundColor: 'transparent',
    },
    actionSheetRef,
    style = {
      flexGrow: 1,
      height: 352,
    },
  } = props;

  return (
    <ActionSheet
      gestureEnabled={true}
      indicatorStyle={indicatorStyle}
      containerStyle={containerStyle}
      ref={actionSheetRef}
    >
      <GlassSurface
        elevated
        surfaceRole='sheet'
        style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      >
        <View style={style}>{children}</View>
      </GlassSurface>
    </ActionSheet>
  );
};

export default Dialog;
