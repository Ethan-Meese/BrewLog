import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { Brew } from './AddBrew';

export let brewLogs:Brew[] = [];

export default function BrewLogs({navigation}: any) {

  const[isEditing, setEditing] = useState(false);
  const[brewLogsArr, setBrewLogsArr] = useState<Brew[]>(brewLogs);

  const removeBrewLog = (index: number) =>{
    const tempBrewLogsArr = [...brewLogsArr];
    tempBrewLogsArr.splice(index,1);
    setBrewLogsArr(tempBrewLogsArr);
  };

  const editBrewLog = (index: number) => {
    console.log("Edit brew button Pressed...You still need to figure out this function")
  }

  const handleBrewLogsUpdate = () =>{
    brewLogs = brewLogsArr;
    console.log(brewLogs);
    navigation.goBack();
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Brew Log Screen!</Text>
      <Text>You have {brewLogsArr.length} brew logs!</Text>
      {(brewLogsArr.length > 0 || isEditing === true) && (
        <Button title={isEditing ? "Done" : "Edit BrewLogs"} onPress={() => setEditing(!isEditing)}/>
      )}

        {brewLogsArr.map((brew, index) => (
          <View key={index}>
            <Text>Brew Method: {brew._brewMethod}</Text>
            <Text>Coffee Name: {brew._coffee?._coffeeName}</Text>

            {brew._coffee?._coffeeBrand !== "" && (
            <Text> Coffee Brand: {brew._coffee?._coffeeBrand}</Text> 
            )}

            {brew._coffee?._coffeeOrigin !== "" && (
            <Text> Coffee Brand: {brew._coffee?._coffeeOrigin}</Text> 
            )}

            {brew._coffee?._coffeeRoast !== "" && (
            <Text> Coffee Brand: {brew._coffee?._coffeeRoast}</Text> 
            )}

            {brew._coffee?._notes !== "" && (
            <Text> Coffee Brand: {brew._coffee?._notes}</Text> 
            )}


            {brew._coffeeDose !== "" && (
            <Text>Coffee Dose: {brew._coffeeDose}</Text>
            )}

            {brew._water !== "" && (
            <Text>Water Dose: {brew._water}</Text>
            )}

            {brew._ratio !== null && (
            <Text>Ratio: 1:{brew._ratio}</Text>
            )}

            {brew._waterTemp !== "" && (
            <Text>Water Tempature: {brew._waterTemp}</Text>
            )}

            {brew._time !== "" && (
            <Text>Coffee Dose: {brew._time}</Text>
            )}


            <Text>Grinder: {brew._grinder?._grinderName}</Text>

            {brew._grindSize !== "" && (
              <Text>Grind Size: {brew._grindSize}</Text>
            )}

            {brew._rating !== "" && (
              <Text>Brew Rating: {brew._rating}</Text>
            )}

            {brew._notes !== "" && (
              <Text>Notes: {brew._notes}</Text>
            )}

            {isEditing === true &&(
              <>
                <Button title="Remove BrewLog" onPress={() => removeBrewLog(index)}/>
                <Button title="Edit BrewLog" onPress={() => editBrewLog(index)}/>
              </>
            )}

            <Text></Text>

          </View>

        ))}
        {brewLogs.length > 0 &&(
          <Button title="Save" onPress={handleBrewLogsUpdate}/>
        )}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20,
  alignItems: 'center',},
});