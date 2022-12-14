import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen';
import LunchBoxScreen from '../screen/LunchBoxScreen';
import ShoppingListScreen from '../screen/ShoppingList';
import RatingScreen from '../screen/RatingScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PantryScreen from '../screen/PantryScreen';
import ChildLunchBox from '../screen/ChildLunchBox';


const Tab = createBottomTabNavigator();
const ChildTabNavigators = () => {
    return (
        <Tab.Navigator
            initialRouteName='ChildLunchBox'
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name="ChildLunchBox"
                component={ChildLunchBox}
                options={{
                    tabBarIcon: ({ tintColor, focused }) => (
                        <AntDesign size={20} color="black" name="home" />
                    )
                }}
            />
            <Tab.Screen
                name="History List"
                component={RatingScreen}
                options={{
                    tabBarIcon: ({ tintColor, focused }) => (
                        <AntDesign size={20} color="black" name="appstore-o" />
                    )
                }}

            />
          
        </Tab.Navigator>
    );
}
export default ChildTabNavigators;