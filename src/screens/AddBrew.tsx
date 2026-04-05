import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';
import { Picker } from '@react-native-picker/picker'; // dropdown


export default function AddBrew({navigation}: any) {

  const [coffeeName, setCoffeeName] = useState("")
  const [coffeeType, setCoffeeType] = useState("");
  const [brewMethod, setBrewMethod] = useState("Espresso");
  const [grinder, setGrinder] = useState("");
  const [grindSize, setGrindSize] = useState("");
  const [rating, setRating] = useState("");
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    // store brew locally later
    console.log({coffeeName, coffeeType, brewMethod, grinder, grindSize, rating, notes});
  };

  return (
    <View style={styles.container}>
      <Text>Add Brew Screen!</Text>
      <Text>Coffee Name</Text>
      <TextInput placeholder="Enter coffee name"
      value={coffeeName}
      onChangeText={setCoffeeName}
      />

      <Text>Coffee Origin</Text>
      <TextInput placeholder="Enter coffee origin"
      value={coffeeType}
      onChangeText={setCoffeeType}
      />

      <Text>Brew Method</Text> // Maybe change how list is done because styling is very limited
        <Picker selectedValue={brewMethod}
        onValueChange={(itemValue) => setBrewMethod(itemValue)} style={{width:"50%"}}>
          <Picker.Item label="Espresso" value="Espresso"/>
          <Picker.Item label="Pour-Over" value="Pour-Over"/>
          <Picker.Item label="Drip" value="Drip"/>
          <Picker.Item label="AeroPress" value="AeroPress"/>
          <Picker.Item label="French Press" value="French Press"/>
          <Picker.Item label="Chemex" value="Chemex"/>
          <Picker.Item label="Cold Brew" value="Cold Brew"/>
        </Picker>

        <Text>Grinder</Text>
        <TextInput placeholder="Grinder"
        value={grinder}
        onChangeText={setGrinder}/>

        <Text>Grind Size</Text>
        <TextInput placeholder="Enter grind size"
        value={grindSize}
        onChangeText={setGrindSize}/>

        <Text>Rating</Text> //Maybe change to do number only
        <TextInput placeholder="Enter number rating"
        value={rating}
        onChangeText={setRating}/>

        <Text>Notes</Text>
        <TextInput placeholder="Enter any notes"
        value={notes}
        onChangeText={setNotes}/>

        <Button title="Save Brew Log ☕" onPress={handleSave}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center'},
});