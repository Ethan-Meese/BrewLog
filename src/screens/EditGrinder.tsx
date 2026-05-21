import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';
import { grinders } from './Grinders';
import { Grinder } from './AddGrinder';
import { brewLogs } from './BrewLogs';


export default function EditGrinder({navigation, route}: any) {
    const {grinderToEdit, grindersArr, setGrinderArr} = route.params;
    const [grinderName, setGrinderName] = useState(grinderToEdit._grinderName);
    const [notes, setNotes] = useState(grinderToEdit._notes);
    
    // Keeps the same index
    const newIndex = grinderToEdit._index;
  
    const handleGrinderUpdate = () => {
        var updatedGrinder = {
        _grinderName: grinderName,
        _notes: notes,
        _index: newIndex
        };

        // updates the coffee in the brew log
        brewLogs.forEach(element => {
            if (element._grinder?._index === newIndex){
                element._grinder = updatedGrinder;
                console.log("Updated")
            }
        });

        console.log(updatedGrinder);

        const grinderIndex = grindersArr.findIndex(
              (grinder: Grinder) => grinder === grinderToEdit
            );
        
            if (grinderIndex !== -1) {
              const updatedBrews = [...grindersArr];
              updatedBrews.splice(grinderIndex, 1, updatedGrinder);
        
              setGrinderArr(updatedBrews);
            }
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