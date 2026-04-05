import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../screens/Dashboard';
import AddBrew from '../screens/AddBrew';
import BrewLogs from '../screens/BrewLogs';
import Settings from '../screens/Settings';

const Stack = createNativeStackNavigator();

export default function AppNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Dashboard">
                <Stack.Screen name="Dashboard" component={Dashboard}/>
                <Stack.Screen name="Add Brew" component={AddBrew}/>
                <Stack.Screen name="Brew Logs" component={BrewLogs}/>
                <Stack.Screen name="Settings" component={Settings}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}