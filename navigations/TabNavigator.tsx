/**
 * TabNavigator.tsx
 * Copyright (c) 2023 James Ugbanu.
 * Licensed under the MIT License.
 */

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/HomeScreen";
import Shop from "../screens/ShopScreen";
import Bag from "../screens/RegisterScreen";
import Category from "../screens/CategoryScreen";
import ProductFilter from "../screens/ProductFilterScreen";
import Favorites from "../screens/ForgotPasswordScreen";
import Profile from "../screens/ProfileScreen";
import VisualSearch from "../screens/VisualSearchScreen";
import SearchPhoto from "../screens/SearchPhotoScreen";
import CropPhoto from "../screens/CropPhotoScreen";
import Header from '../components/Header';
import TabBar from "../components/TabBar";


const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeStack"
                component={Home}
                options={{
                    headerTransparent: true,
                    header: (properties) => (
                        <Header
                            {...properties}
                            isShowBackIcon={false}
                        />)
                }}
            />
        </HomeStack.Navigator>
    );
}

const ShopStack = createNativeStackNavigator();

const ShopStackScreen = () => {
    return (
        <ShopStack.Navigator>
            <ShopStack.Screen
                name="ShopStack"
                component={Shop}
                options={{
                    headerTransparent: true,
                    header: (properties) => (
                        <Header
                            {...properties}
                            isShowBackIcon={false}
                            isShowSearchIcon
                        />)
                }}
            />
            <ShopStack.Screen
                name="Category"
                component={Category}
                options={{
                    headerTransparent: true,
                    header: (properties) => (
                        <Header
                            {...properties}
                            isShowBackIcon
                            isShowSearchIcon
                        />)
                }}
            />
        </ShopStack.Navigator>
    );
}

const BagStack = createNativeStackNavigator();

const BagStackScreen = () => {
    return (
        <BagStack.Navigator>
            <BagStack.Screen
                name="BagStack"
                component={Bag}
                options={{
                    headerTransparent: true,
                    header: (properties) => (
                        <Header
                            {...properties}
                            isShowBackIcon={false}
                            isShowSearchIcon
                        />)
                }}
            />
        </BagStack.Navigator>
    );
}

const FavoritesStack = createNativeStackNavigator();
const FavoritesStackScreen = () => {
    return (
        <FavoritesStack.Navigator>
            <FavoritesStack.Screen
                name="FavoritesStack"
                component={Favorites}
                options={{
                    headerTransparent: true,
                    header: (properties) => (
                        <Header
                            {...properties}
                            isShowBackIcon={false}
                            isShowSearchIcon
                        />)
                }}
            />
        </FavoritesStack.Navigator>
    );
}

const ProfileStack = createNativeStackNavigator();
const ProfileStackScreen = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="ProfileStack"
                component={Profile}
                options={{
                    headerTransparent: true,
                    header: (properties) => (
                        <Header
                            {...properties}
                            isShowBackIcon={false}
                            isShowSearchIcon
                        />)
                }}
            />
        </ProfileStack.Navigator>
    );
}


const Tab = createBottomTabNavigator();

const MainTabs = () => {

    return (
        <Tab.Navigator
            tabBar={(props) => <TabBar navigation={props.navigation} state={props.state} descriptors={props.descriptors} />}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Shop"
                component={ShopStackScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Bag"
                component={BagStackScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesStackScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};


const RootStack = createNativeStackNavigator();

const App = () => (

    <RootStack.Navigator>
        <RootStack.Screen
            name="App" component={MainTabs}
            options={{ headerShown: false }}
        />
        <ShopStack.Screen
            name="ProductFilter"
            component={ProductFilter}
            options={{
                headerTransparent: true,
                header: (properties) => (
                    <Header
                        {...properties}
                        isShowBackIcon
                    />)
            }}
        />
         <HomeStack.Screen
            name="VisualSearch"
            component={VisualSearch}
            options={{
                headerTransparent: true,
                header: (properties) => (
                    <Header
                        {...properties}
                        isShowBackIcon
                    />)
            }}
        />
        <HomeStack.Screen
            name="SearchPhoto"
            component={SearchPhoto}
            options={{
                headerTransparent: true,
                header: (properties) => (
                    <Header
                        {...properties}
                        isShowBackIcon
                    />)
            }}
        />
        <HomeStack.Screen
            name="CropPhoto"
            component={CropPhoto}
            options={{
                headerTransparent: true,
                header: (properties) => (
                    <Header
                        {...properties}
                        isShowBackIcon
                    />)
            }}
        />
    </RootStack.Navigator>

);

export default App;