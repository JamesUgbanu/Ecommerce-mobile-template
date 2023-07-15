/**
 * Tab.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */


import React from 'react';
import { Tab, FullTheme, withTheme } from '@rneui/themed';
import { styles } from './styles';
import { TAB_HEIGHT } from '../../constants';

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
    const {
        style,
        items,
        setIndex,
        index
    } = props


    return (
        <>
            {
                items && items.length && (
                    <Tab
                        value={index}
                        onChange={setIndex}
                        dense
                        indicatorStyle={styles(props.theme.colors.error).indicatorStyle}
                        containerStyle={[styles().container, style, { height: TAB_HEIGHT}]}
                        scrollable={items.length > MAXIMUM_NUMBER_OF_ITEMS && true}
                    >
                        {
                            items.map((item, index) => (
                                <Tab.Item key={index} title={item.name} />
                            ))
                        }
                    </Tab>

                )
            }
        </>
    );
}


export default withTheme(RneTab);