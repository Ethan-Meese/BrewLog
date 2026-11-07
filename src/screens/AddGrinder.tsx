import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';
import { grinders } from './Grinders';
import AsyncStorage from '@react-native-async-storage/async-storage';


export interface Grinder{
    _grinderName: string;
    _notes: string;
    _index: number;
};

export default function AddGrinder({navigation}: any) {
    
    const [grinderName, setGrinderName] = useState("");
    const [notes, setNotes] = useState("");
    
    const newIndex = grinders.length === 0 ? 0 :
            grinders[grinders.length - 1]._index + 1;
  
    const handleGrinderSave = async () => {
        
        try {
            var newGrinder = {
            _grinderName: grinderName,
            _notes: notes,
            _index: newIndex
            };

            console.log(newGrinder);
            grinders.push(newGrinder);

            const jsonValue = JSON.stringify(grinders);
            await AsyncStorage.setItem('grinders', jsonValue);
            console.log("Grinder added to Storage.");
            navigation.goBack();
        }catch(e){
            console.error(e);
        } 
    };
  
    return (
    <View style={styles.container}>

        <Text>Grinder Name</Text>
        <TextInput value={grinderName} onChangeText={setGrinderName} placeholder='Enter grinder name...' />

        <Text></Text>

        <Text>Notes</Text>
        <TextInput value={notes} onChangeText={setNotes} placeholder='Enter any notes...' />

        {grinderName !== "" ? (
        <Button title='Save Grinder' onPress={handleGrinderSave}/>
        ) : (
            <Text>Please enter a grinder name</Text>
        )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});