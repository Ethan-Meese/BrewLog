import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';
import { Picker } from '@react-native-picker/picker'; // dropdown
import {brewLogs} from './BrewLogs';
export interface Brew {
  _brewMethod:string;
  _coffeeName:string;
  _coffeeType:string;
  _coffeeDose: string;
  _water: string;
  _ratio: string | null;
  _waterTemp?: string;
  _time?: string;
  _grinder:string;
  _grindSize:string;
  _rating:string;
  _notes:string;
};

type BrewInputProps = {
  label: string;
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
  keyboardType?: "default" | "numeric";
};

function BrewInput({label, value, onChange, placeholder, keyboardType = "default"}: BrewInputProps){
  return(
    <View>
      <Text>{label}</Text>
      <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      keyboardType={keyboardType}
      />
    </View>
  );
}


export default function AddBrew({navigation}: any) {

  const [brewMethod, setBrewMethod] = useState("Espresso");
  const [coffeeName, setCoffeeName] = useState("")
  const [coffeeType, setCoffeeType] = useState("");
  const [coffeeDose, setCoffeeDose] = useState("");
  const [water, setWater] = useState("");
  // Ratio is made down below
  const [waterTemp, setWaterTemp] = useState("");
  const [time, setTime] = useState("");
  const [grinder, setGrinder] = useState("");
  const [grindSize, setGrindSize] = useState("");
  const [rating, setRating] = useState("");
  const [notes, setNotes] = useState("");


  // Making the ratio calculation and converting it to work with the Text tag
  const doseNumber: number = parseFloat(coffeeDose);
  const waterNumber: number = parseFloat(water);
  const ratio: string | null = !isNaN(doseNumber) && doseNumber > 0 && !isNaN(waterNumber) ? (waterNumber / doseNumber).toFixed(1) : null;
  console.log(ratio);


  const handleSave = () => {
    // store brew locally later
    var newBrew: Brew = {
      _brewMethod: brewMethod, 
      _coffeeName: coffeeName, 
      _coffeeType: coffeeType,
      _coffeeDose: coffeeDose,
      _water: water,
      _ratio: ratio,
      _waterTemp: waterTemp,
      _time: time,
      _grinder: grinder, 
      _grindSize: grindSize, 
      _rating: rating, 
      _notes: notes
    };
    console.log(newBrew);
    brewLogs.push(newBrew);
    navigation.goBack();

  };

  //Maybe change how list is done because styling is very limited
  //Maybe change the rating to do number input only
  return (

    <View style={styles.container}>
      <Text>Add Brew Screen!</Text>
      <Text></Text>

      <Text>Brew Method</Text> 

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

      <BrewInput label='Coffee Name' value={coffeeName} onChange={setCoffeeName} placeholder='Enter coffee name...'/>

      <BrewInput label='Coffee Origin' value={coffeeType} onChange={setCoffeeType} placeholder='Enter coffee origin...'/>

      <BrewInput label='Coffee Dose' value={coffeeDose} onChange={setCoffeeDose} placeholder='Enter coffee dose...'/>


      {brewMethod !== "Espresso" &&(
        <>
          <BrewInput label='Water Amount' value={water} onChange={setWater} placeholder='Enter water amount...' />
          <Text>{ratio !== null ? `Ratio is 1:${ratio}` : "Enter dose and water to get the ratio"}</Text>
        </>
      )}
      
      {brewMethod === "Espresso" &&(
        <>
        <BrewInput label='Espresso Yield' value={water} onChange={setWater} placeholder='Espresso yield...' />
        <Text>{ratio !== null ? `Ratio is 1:${ratio}` : "Enter dose and yield to get the ratio"}</Text>
        </>
      )}

      <BrewInput label='Water Tempature' value={waterTemp} onChange={setWaterTemp} placeholder='Enter water tempature...'/>

      <BrewInput label='Brew Time' value={time} onChange={setTime} placeholder='Enter brew time...' />

      <BrewInput label='Grinder' value={grinder} onChange={setGrinder} placeholder='Enter grinder...'/>

      <BrewInput label='Grind Size' value={grindSize} onChange={setGrindSize} placeholder='Enter grind size...'/>

      <BrewInput label='Rating' value={rating} onChange={setRating} placeholder='Enter rating...'/>

      <BrewInput label='Notes' value={notes} onChange={setNotes} placeholder='Enter notes...'/>

      <Button title="Save Brew Log ☕" onPress={handleSave}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center'},
});