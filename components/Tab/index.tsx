import React, { useState } from 'react';
import { View, } from 'react-native';
import { Text, Tab } from '@rneui/themed';
import { styles } from './styles';

type TabProps = {
    style?: { [key: string]: any };
};

const RneTab = (props: TabProps) => {
    const {
        style,
    } = props

    const [index, setIndex] = useState(0);


    return (
        <Tab value={index} onChange={setIndex} dense>
            <Tab.Item>Tab</Tab.Item>
            <Tab.Item>Tab</Tab.Item>
        </Tab>
    );
}


export default RneTab;