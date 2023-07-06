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
            screenOptions={{
                header: (properties) => (
                    <Header
                        {...properties}
                        theme={props.theme}
                    />)
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerTransparent: true,
                  }}
            />
            <Tab.Screen
                name="Shop"
                component={Shop}
                options={{
                    headerTransparent: true,
                  }}
            />
            <Tab.Screen
                name="Bag"
                component={Bag}
                options={{
                    headerTransparent: true,
                  }}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    headerTransparent: true,
                  }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerTransparent: true,
                  }}
            />
        </Tab.Navigator>
    );
};

export default withTheme(MainTab);