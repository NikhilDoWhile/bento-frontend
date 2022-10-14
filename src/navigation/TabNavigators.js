import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen';


const Tab = createBottomTabNavigator();
const TabNavigators = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{ headerShown: false }}
            tabBarOptions={{
                activeTintColor: '#F79489',
                inactiveTintColor: 'black',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />

        </Tab.Navigator>
    );
}
export default TabNavigators;