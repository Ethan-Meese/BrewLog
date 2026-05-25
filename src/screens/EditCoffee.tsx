import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';
import { Coffee } from './AddCoffee';

export default function AddCoffee({navigation, route}: any) {
    const {coffeeToEdit, coffeesArr, setCoffeesArr} = route.params
    const [coffeeName, setCoffeeName] = useState(coffeeToEdit._coffeeName);
    const [coffeeOrigin, setCoffeeOrigin] = useState(coffeeToEdit._coffeeOrigin);
    const [coffeeRoast, setCoffeeRoast] = useState(coffeeToEdit._coffeeRoast);
    const [coffeeBrand, setCoffeeBrand] = useState(coffeeToEdit._coffeeBrand);
    const [notes, setNotes] = useState(coffeeToEdit._notes);

    // Keeps current Index
    const newIndex = coffeeToEdit._index;

    const handleCoffeeEdit = () => {

        var updatedCoffee = {
        _coffeeName: coffeeName,
        _coffeeOrigin: coffeeOrigin,
        _coffeeRoast: coffeeRoast,
        _coffeeBrand: coffeeBrand,
        _notes: notes,
        _index: newIndex
        };


        console.log(updatedCoffee);

        const coffeeIndex = coffeesArr.findIndex(
              (coffee: Coffee) => coffee === coffeeToEdit
            );
        
            if (coffeeIndex !== -1) {
              const updatedBrews = [...coffeesArr];
              updatedBrews.splice(coffeeIndex, 1, updatedCoffee);
        
              setCoffeesArr(updatedBrews);
            }
            
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
            <Button title='Save Coffee ☕' onPress={handleCoffeeEdit}/>
        ) : (
            <Text>Please enter a coffee Name</Text>
        )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});