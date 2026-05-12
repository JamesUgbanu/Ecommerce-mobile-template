import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Header from '../components/Header';
import TabBar from '../components/TabBar';
import Bag from '../screens/BagScreen';
import Category from '../screens/CategoryScreen';
import Favorites from '../screens/FavoritesScreen';
import Home from '../screens/HomeScreen';
import ProductDetails from '../screens/ProductDetailsScreen';
import ProductFilter from '../screens/ProductFilterScreen';
import Profile from '../screens/ProfileScreen';
import Shop from '../screens/ShopScreen';
import VisualSearchPreview from '../screens/VisualSearchPreviewScreen';
import VisualSearch from '../screens/VisualSearchScreen';
import type { MainTabParamList, RootStackParamList } from './types';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='HomeStack'
        component={Home}
        options={{
          headerTransparent: true,
          header: (properties) => <Header {...properties} isShowBackIcon={false} />,
        }}
      />
    </HomeStack.Navigator>
  );
};

const ShopStack = createNativeStackNavigator();

const ShopStackScreen = () => {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen
        name='ShopStack'
        component={Shop}
        options={{
          headerTransparent: true,
          header: (properties) => (
            <Header {...properties} isShowBackIcon={false} isShowSearchIcon />
          ),
        }}
      />
      <ShopStack.Screen
        name='Category'
        component={Category}
        options={{
          headerTransparent: true,
          header: (properties) => <Header {...properties} isShowBackIcon isShowSearchIcon />,
        }}
      />
    </ShopStack.Navigator>
  );
};

const BagStack = createNativeStackNavigator();

const BagStackScreen = () => {
  return (
    <BagStack.Navigator>
      <BagStack.Screen
        name='BagStack'
        component={Bag}
        options={{
          headerTransparent: true,
          header: (properties) => (
            <Header {...properties} isShowBackIcon={false} isShowSearchIcon />
          ),
        }}
      />
    </BagStack.Navigator>
  );
};

const FavoritesStack = createNativeStackNavigator();
const FavoritesStackScreen = () => {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen
        name='FavoritesStack'
        component={Favorites}
        options={{
          headerTransparent: true,
          header: (properties) => (
            <Header {...properties} isShowBackIcon={false} isShowSearchIcon />
          ),
        }}
      />
    </FavoritesStack.Navigator>
  );
};

const ProfileStack = createNativeStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name='ProfileStack'
        component={Profile}
        options={{
          headerTransparent: true,
          header: (properties) => (
            <Header {...properties} isShowBackIcon={false} isShowSearchIcon />
          ),
        }}
      />
    </ProfileStack.Navigator>
  );
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => (
        <TabBar navigation={props.navigation} state={props.state} descriptors={props.descriptors} />
      )}
    >
      <Tab.Screen name='Home' component={HomeStackScreen} options={{ headerShown: false }} />
      <Tab.Screen name='Shop' component={ShopStackScreen} options={{ headerShown: false }} />
      <Tab.Screen name='Bag' component={BagStackScreen} options={{ headerShown: false }} />
      <Tab.Screen
        name='Favorites'
        component={FavoritesStackScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen name='Profile' component={ProfileStackScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => (
  <RootStack.Navigator>
    <RootStack.Screen name='App' component={MainTabs} options={{ headerShown: false }} />
    <RootStack.Screen
      name='ProductFilter'
      component={ProductFilter}
      options={{
        headerTransparent: true,
        header: (properties) => <Header {...properties} isShowBackIcon />,
      }}
    />
    <RootStack.Screen
      name='VisualSearch'
      component={VisualSearch}
      options={{
        headerTransparent: true,
        header: (properties) => <Header {...properties} isShowBackIcon />,
      }}
    />
    <RootStack.Screen
      name='ProductDetails'
      component={ProductDetails}
      options={{
        headerTransparent: true,
        header: (properties) => <Header {...properties} isShowBackIcon />,
      }}
    />
    <RootStack.Screen
      name='VisualSearchPreview'
      component={VisualSearchPreview}
      options={{
        headerTransparent: true,
        header: (properties) => <Header {...properties} isShowBackIcon />,
      }}
    />
  </RootStack.Navigator>
);

export default App;
