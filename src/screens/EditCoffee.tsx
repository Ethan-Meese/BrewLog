import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';
import { coffees } from './Coffees';
import {brewLogs} from './BrewLogs';

export default function AddCoffee({navigation, route}: any) {
    const {currentCoffeeBeingEdited} = route.params
    const [coffeeName, setCoffeeName] = useState(coffees[currentCoffeeBeingEdited]._coffeeName);
    const [coffeeOrigin, setCoffeeOrigin] = useState(coffees[currentCoffeeBeingEdited]._coffeeOrigin);
    const [coffeeRoast, setCoffeeRoast] = useState(coffees[currentCoffeeBeingEdited]._coffeeRoast);
    const [coffeeBrand, setCoffeeBrand] = useState(coffees[currentCoffeeBeingEdited]._coffeeBrand);
    const [notes, setNotes] = useState(coffees[currentCoffeeBeingEdited]._notes);

    // Keeps current Index
    const newIndex = coffees[currentCoffeeBeingEdited]._index;

    const handleCoffeeUpdate = () => {

        var updatedCoffee = {
        _coffeeName: coffeeName,
        _coffeeOrigin: coffeeOrigin,
        _coffeeRoast: coffeeRoast,
        _coffeeBrand: coffeeBrand,
        _notes: notes,
        _index: newIndex
        };

        // updates the coffee in the brew log
        brewLogs.forEach(element => {
            if (element._coffee?._index === newIndex){
                element._coffee = updatedCoffee;
                console.log("Updated")
            }
        });

        console.log(updatedCoffee);
        coffees.splice(currentCoffeeBeingEdited,1 ,updatedCoffee);
        navigation.goBack();
    };

    return (

    <View style={styles.container}>

        <Text>Coffee Name</Text>
        <TextInput value={coffeeName} onChangeText={setCoffeeName} placeholder='Enter coffee name...' />

        <Text></Text>

        <Text>Coffee Origin</Text>
        <TextInput value={coffeeOrigin} onChangeText={setCoffeeOrigin} placeholder='Enter coffee origin...' />

        <Text></Text>

        <Text>Coffee Roast</Text>
        <TextInput value={coffeeRoast} onChangeText={setCoffeeRoast} placeholder='Enter coffee roast...' />

        <Text></Text>

        <Text>Coffee Brand</Text>
        <TextInput value={coffeeBrand} onChangeText={setCoffeeBrand} placeholder='Enter coffee brand...' />

        <Text></Text>

        <Text>Notes</Text>
        <TextInput value={notes} onChangeText={setNotes} placeholder='Enter notes...' />

        {coffeeName !== "" ?(
            <Button title='Save Coffee ☕' onPress={handleCoffeeUpdate}/>
        ) : (
            <Text>Please enter a coffee Name</Text>
        )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});