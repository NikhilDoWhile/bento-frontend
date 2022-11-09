import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen';
import LunchBoxScreen from '../screen/LunchBoxScreen';
import ShoppingListScreen from '../screen/ShoppingList';
import RatingScreen from '../screen/RatingScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Tab = createBottomTabNavigator();
const TabNavigators = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ tintColor, focused }) => (
                        <AntDesign size={20} color="black" name="home" />
                    )
                }}
            />
            <Tab.Screen
                name="LunchBox"
                component={LunchBoxScreen}
                options={{
                    tabBarIcon: ({ tintColor, focused }) => (
                        <AntDesign size={20} color="black" name="appstore-o" />
                    )
                }}

            />
            <Tab.Screen
                name="ShoppingList"
                component={ShoppingListScreen}
                options={{
                    tabBarIcon: ({ tintColor, focused }) => (
                        <AntDesign size={20} color="black" name="shoppingcart" />
                    )
                }}

            />
            <Tab.Screen
                name="Rating"
                component={RatingScreen}
                options={{
                    tabBarIcon: ({ tintColor, focused }) => (
                        <AntDesign size={20} color="black" name="staro" />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
export default TabNavigators;