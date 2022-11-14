import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/LoginScreen';
import WelcomeScreen from '../screen/WelcomeScreen';
import TabNavigators from './TabNavigators';
import PantryScreen from '../screen/PantryScreen';
import RecipeDetails from '../screen/RecipeDetails';
import HomeScreen from '../screen/HomeScreen';
import AddToLunchBox from '../screen/AddToLunchBox';
import ProfileScreen from '../screen/ProfileScreen';
import Profile from '../screen/Profile';
import ChildTabNavigators from './ChildTabNavigation';
import ChildScreen from '../screen/ChildScreen';
import AddKidScreen from '../screen/AddKidScreen';
import ForgotPassword from '../screen/ForgotPassword';


const StackNavigators = () => {
    const Stack = createNativeStackNavigator();
    // const StackNavigators = () => {
    //     const [splash, setSplash] = useState(true)
    //     useEffect(() => {
    //         setTimeout(() => {
    //             setSplash(false)
    //         }, 4000)
    //     })
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'login'}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="Child" component={ChildScreen} />
                <Stack.Screen name="welcome" component={WelcomeScreen} />
                <Stack.Screen name="Pantry" component={PantryScreen} />
                <Stack.Screen name="TabNavigators" component={TabNavigators} />
                <Stack.Screen name="ChildTabNavigators" component={ChildTabNavigators} />
                <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
                <Stack.Screen name="AddToLunchBox" component={AddToLunchBox} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="AddKid" component={AddKidScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}


export default StackNavigators;