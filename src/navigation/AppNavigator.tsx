import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../screens/Dashboard';
import AddBrew from '../screens/AddBrew';
import BrewLogs from '../screens/BrewLogs';
import Settings from '../screens/Settings';
import AddGrinder from '../screens/AddGrinder';
import Grinders from '../screens/Grinders';
import AddCoffee from '../screens/AddCoffee';
import Coffees from '../screens/Coffees';
import EditBrew from '../screens/EditBrew';


const Stack = createNativeStackNavigator();

export default function AppNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Dashboard">
                <Stack.Screen name="Dashboard" component={Dashboard}/>
                <Stack.Screen name="Add Brew" component={AddBrew}/>
                <Stack.Screen name="Brew Logs" component={BrewLogs}/>
                <Stack.Screen name="Add Grinder" component={AddGrinder}/>
                <Stack.Screen name="Grinders" component={Grinders}/>
                <Stack.Screen name="Add Coffee" component={AddCoffee}/>
                <Stack.Screen name="Coffees" component={Coffees}/>
                <Stack.Screen name="Settings" component={Settings}/>
                <Stack.Screen name="Edit Brew" component={EditBrew}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}