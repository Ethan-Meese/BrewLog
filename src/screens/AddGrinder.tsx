import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';
import { grinders } from './Grinders';


export interface Grinder{
    _grinderName?: string;
    _notes?: string;
};

export default function AddGrinder({navigation}: any) {  // ✅ default export
    
    const [grinderName, setGrinderName] = useState("");
    const [notes, setNotes] = useState("");
  
    const handleGrinderSave = () => {
        var newGrinder = {
        _grinderName: grinderName,
        _notes: notes
        };

        console.log(newGrinder);
        grinders.push(newGrinder);
        navigation.goBack();
    };
  
    return (

    <View style={styles.container}>
        <Text>Add Grinder Screen!</Text>
        
        <Text></Text>

        <Text>Grinder Name</Text>
        <TextInput value={grinderName} onChangeText={setGrinderName} placeholder='Enter grinder name...' />

        <Text></Text>

        <Text>Notes</Text>
        <TextInput value={notes} onChangeText={setNotes} placeholder='Enter any notes...' />

        <Button title='Save Grinder' onPress={handleGrinderSave}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});