import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';
import { grinders } from './Grinders';


export default function EditGrinder({navigation, route}: any) {
    const {currentGrinderBeingEdited} = route.params;
    const [grinderName, setGrinderName] = useState(grinders[currentGrinderBeingEdited]._grinderName);
    const [notes, setNotes] = useState(grinders[currentGrinderBeingEdited]._notes);
    
    // Keeps the same index
    const newIndex = grinders[currentGrinderBeingEdited]._index;
  
    const handleGrinderUpdate = () => {
        var updateGrinder = {
        _grinderName: grinderName,
        _notes: notes,
        _index: newIndex
        };

        console.log(updateGrinder);
        grinders.splice(currentGrinderBeingEdited, 1, updateGrinder);
        navigation.goBack();
    };
  
    return (
    <View style={styles.container}>

        <Text>Grinder Name</Text>
        <TextInput value={grinderName} onChangeText={setGrinderName} placeholder='Enter grinder name...' />

        <Text></Text>

        <Text>Notes</Text>
        <TextInput value={notes} onChangeText={setNotes} placeholder='Enter any notes...' />

        {grinderName !== "" ? (
        <Button title='Save Grinder' onPress={handleGrinderUpdate}/>
        ) : (
            <Text>Please enter a grinder name</Text>
        )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});