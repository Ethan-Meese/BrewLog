import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { Grinder } from './AddGrinder';

export let grinders:Grinder[] = [];


export default function Ginders({navigation}: any) {

  const handleGrindersUpdate = () =>{
    grinders = grinderList;
    console.log(grinders);
    navigation.goBack();
  }

  const [isEditing, setEditing] = useState(false);
  const [grinderList, setGrinderList] = useState<Grinder[]>(grinders);

  const removeGrinder = (index: number) =>{
    const tempGrindersArr = [...grinderList];
    tempGrindersArr.splice(index,1);
    setGrinderList(tempGrindersArr);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView>
        <Text>Grinders Screen!</Text>
        <Text>You have {grinderList.length} grinders!</Text>
        {(grinderList.length > 0 || isEditing === true)&&(
          <>
            <Button title={isEditing ? "Done" : "Edit Grinders"} onPress={() => setEditing(!isEditing)} />
            <Button title="Check edit state" onPress={() => console.log(isEditing)} />
          </>
        )}
        
        <Text></Text>

          {grinderList.map((grinder, index) => (
            <View key={index}>
              <Text>Grinder Name: {grinder._grinderName}</Text>
              <Text>Notes: {grinder._notes !== "" ? grinder._notes : "N/A"}</Text>
              {isEditing && (
                <>
                <Button title="Remove Grinder" onPress={ () => removeGrinder(index)}/>
                </>
              )}
              <Text></Text>
            </View>
          ))}

          {grinderList.length > 0 && (
            <Button title="Save" onPress={handleGrindersUpdate}/>
          )}

      </ScrollView>
    </GestureHandlerRootView>
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});