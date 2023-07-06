import React from 'react';
import { ScrollView, View, Dimensions } from 'react-native';
import { TabView, FullTheme, withTheme, Text } from '@rneui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { verticalScale } from "react-native-size-matters";
import { HEADER_HEIGHT, TAB_BAR_HEIGHT, TAB_HEIGHT } from '../../constants';
import { styles } from './styles';

type TabViewProps = {
    style?: { [key: string]: any };
    theme?: FullTheme;
    setIndex: any;
    index: number;
    items: {
        name?: string;
        subcategories?: any[]
    }[];
    animationType?: "spring" | "timing";
};
const RneTabView = (props: TabViewProps) => {
    const {
        style,
        items,
        setIndex,
        index,
        animationType = "timing"
    } = props

    const insets = useSafeAreaInsets();
    const screenHeight: number = Dimensions.get('window').height - verticalScale(insets.top + HEADER_HEIGHT + TAB_BAR_HEIGHT - TAB_HEIGHT);


    return (
        <View style={{ height: screenHeight }}>
            {
                items && items.length && (
                    <TabView value={index} onChange={setIndex} animationType={animationType}>
                        {
                            items.map((item, index) => {
                                const subcategories = item.subcategories;
     
                                const categories = subcategories.map((subcategory, index) => <Text key={index}>{subcategory}</Text>);
                                return (
                                    <TabView.Item key={index} style={style}>
                                        <ScrollView >
                                            {categories}
                                        </ScrollView>
                                    </TabView.Item>
                                )
                            }
                            )
                        }

                    </TabView>
                )
            }
        </View>
    );
}


export default withTheme(RneTabView);