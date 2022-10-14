import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/LoginScreen';
import WelcomeScreen from '../screen/WelcomeScreen';
import TabNavigators from './TabNavigators';


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
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="welcome" component={WelcomeScreen} />
                <Stack.Screen name="TabNavigators" component={TabNavigators} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}


export default StackNavigators;