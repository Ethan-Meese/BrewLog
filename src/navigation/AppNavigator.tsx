import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import Dashboard from '../screens/Dashboard';
import AddBrew from '../screens/AddBrew';

const Stack = createNativeStackNavigator();

export default function AppNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name ="Signup" component={SignupScreen}/>
                <Stack.Screen name="Dashboard" component={Dashboard}/>
                <Stack.Screen name="Add Brew" component={AddBrew}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}