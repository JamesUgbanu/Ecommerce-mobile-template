/**
 * Tab.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import { FullTheme, Tab, withTheme } from '@rneui/themed';
import React from 'react';
import { TAB_HEIGHT } from '../../constants';
import { useAppTheme } from '../../hooks/useAppTheme';
import { styles } from './styles';

type TabProps = {
  style?: { [key: string]: any };
  theme?: FullTheme;
  setIndex: any;
  index: number;
  items: {
    name?: string;
  }[];
};
const MAXIMUM_NUMBER_OF_ITEMS: number = 4;
const RneTab = (props: TabProps) => {
  const { style, items, setIndex, index } = props;
  const { colors } = useAppTheme();

  return (
    <>
      {items && items.length && (
        <Tab
          value={index}
          onChange={setIndex}
          dense
          indicatorStyle={styles(colors.accent).indicatorStyle}
          containerStyle={[
            styles().container,
            { backgroundColor: colors.background },
            style,
            { height: TAB_HEIGHT },
          ]}
          scrollable={items.length > MAXIMUM_NUMBER_OF_ITEMS && true}
        >
          {items.map((item, index) => (
            <Tab.Item key={index} title={item.name} />
          ))}
        </Tab>
      )}
    </>
  );
};

export default withTheme(RneTab);
