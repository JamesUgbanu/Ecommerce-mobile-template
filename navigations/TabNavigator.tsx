import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { withTheme } from '@rneui/themed';
import Home from "../screens/HomeScreen";
import Shop from "../screens/ShopScreen";
import Bag from "../screens/RegisterScreen";
import Favorites from "../screens/ForgotPasswordScreen";
import Profile from "../screens/ProfileScreen";
import Header from '../components/Header';
import TabBar from "../components/TabBar";

const Tab = createBottomTabNavigator();

const MainTab = (props) => {

    return (
        <Tab.Navigator
            tabBar={(props) => <TabBar navigation={props.navigation} state={props.state} descriptors={props.descriptors} />}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerTransparent: true,
                    header: (properties) => (
                        <Header
                            {...properties}
                            theme={props.theme}
                            isShowBackIcon={false}
                        />)
                }}
            />
            <Tab.Screen
                name="Shop"
                component={Shop}
                options={{
                    headerTransparent: true,
                    header: (properties) => (
                        <Header
                            {...properties}
                            theme={props.theme}
                            isShowBackIcon={false}
                            isShowSearchIcon
                        />)
                }}
            />
            <Tab.Screen
                name="Bag"
                component={Bag}
                options={{
                    headerTransparent: true,
                    header: (properties) => (
                        <Header
                            {...properties}
                            theme={props.theme}
                            isShowBackIcon={true}
                            isShowSearchIcon
                        />)
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    headerTransparent: true,
                    header: (properties) => (
                        <Header
                            {...properties}
                            theme={props.theme}
                            isShowBackIcon={false}
                            isShowSearchIcon
                        />)
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerTransparent: true,
                    header: (properties) => (
                        <Header
                            {...properties}
                            theme={props.theme}
                            isShowBackIcon={false}
                            isShowSearchIcon
                        />)
                }}
            />
        </Tab.Navigator>
    );
};

export default withTheme(MainTab);