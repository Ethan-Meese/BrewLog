import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';
import { coffees } from './Coffees';
import AsyncStorage from '@react-native-async-storage/async-storage';
export interface Coffee{
    _coffeeName: string;
    _coffeeOrigin: string;
    _coffeeRoast: string
    _coffeeBrand: string;
    _notes: string;
    _index: number;
};


export default function AddCoffee({navigation}: any) {
  
    const [coffeeName, setCoffeeName] = useState("");
    const [coffeeOrigin, setCoffeeOrigin] = useState("");
    const [coffeeRoast, setCoffeeRoast] = useState("");
    const [coffeeBrand, setCoffeeBrand] = useState("");
    const [notes, setNotes] = useState("");
    const newIndex = coffees.length === 0 ? 0 :
        coffees[coffees.length - 1]._index + 1;

        // async method to save coffees
    const handleCoffeeSave = async () => {
        try{
            var newCoffee = {
            _coffeeName: coffeeName,
            _coffeeOrigin: coffeeOrigin,
            _coffeeRoast: coffeeRoast,
            _coffeeBrand: coffeeBrand,
            _notes: notes,
            _index: newIndex
            };

            console.log(newCoffee);
            coffees.push(newCoffee);

            const jsonValue = JSON.stringify(coffees);
            await AsyncStorage.setItem('coffees', jsonValue);
            console.log("Coffee added to Storage.");
            navigation.goBack();
        }
        catch(e){
            console.error(e);
        }
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
            <Button title='Save Coffee ☕' onPress={handleCoffeeSave}/>
        ) : (
            <Text>Please enter a coffee Name</Text>
        )}
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});