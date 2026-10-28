import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { Brew } from './AddBrew';
import { useFocusEffect } from '@react-navigation/native';

export let brewLogs:Brew[] = [];

export default function BrewLogs({navigation, route}: any) {

  const[isEditing, setEditing] = useState(false);
  const[brewLogsArr, setBrewLogsArr] = useState<Brew[]>(brewLogs);
  const[brewMethodButtons, setBrewMethodButtons] = useState<Set<string>>(() => new Set(brewLogsArr.map((brew) => brew._brewMethod)));
  const[selectedBrewMethod, setSelectedBrewMethod] = useState("Any");
  const[refresh, setRefresh] = useState(false);



  const removeBrewLog = (brewtoRemove: Brew) =>{
    setBrewLogsArr((currentLogs) => currentLogs.filter((brew) => brew !== brewtoRemove));
  };

  //Edited this
  const editBrewLog = (brewtoEdit: Brew) => {
    navigation.navigate("Edit Brew", {brewToEdit: brewtoEdit, brewLogsArr, setBrewLogsArr});
  }

  const handleBrewLogsUpdate = () =>{
    brewLogs = brewLogsArr;
    console.log(brewLogs);
    navigation.goBack();
  };

  useFocusEffect(
    useCallback(() => {
      setRefresh(prev => !prev);
      setEditing(false);
    }, [])
  );

  useEffect(() => {
    brewMethodButtons.add("Any")
  }, []);

// changed index to 
// The added code below should now display a button for each brew method. once clicked it will set the selectedBrewMethod to that brew. 
// Then below that, those brews should display instead of every brew. Editing should not be effected.
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>You have {brewLogsArr.length} brew logs!</Text>
      {(brewLogsArr.length > 0 || isEditing === true) && (
        <Button title={isEditing ? "Done" : "Edit BrewLogs"} onPress={() => setEditing(!isEditing)}/>
      )}

      {[...brewMethodButtons].map((brewMethod) =>(
        <View key={brewMethod}>
          <Button title={brewMethod} onPress={() => setSelectedBrewMethod(brewMethod)}/>
        </View>
      ))}
      
      {selectedBrewMethod != "Any" ? (
        <>
          {brewLogsArr.filter((brew) => brew._brewMethod === selectedBrewMethod).map((brew, index) => (
            <View key={index}>

              <Text>Brew Method: {brew._brewMethod}</Text>
              <Text>Coffee Name: {brew._coffee?._coffeeName}</Text>

              {brew._coffee?._coffeeBrand !== "" && (
              <Text> Coffee Brand: {brew._coffee?._coffeeBrand}</Text> 
              )}

              {brew._coffee?._coffeeOrigin !== "" && (
              <Text> Coffee Origin: {brew._coffee?._coffeeOrigin}</Text> 
              )}

              {brew._coffee?._coffeeRoast !== "" && (
              <Text> Coffee Roast: {brew._coffee?._coffeeRoast}</Text> 
              )}

              {brew._coffee?._notes !== "" && (
              <Text> Coffee Notes: {brew._coffee?._notes}</Text> 
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
                  <Button title="Remove BrewLog" onPress={() => removeBrewLog(brew)}/>
                  <Button title="Edit BrewLog" onPress={() => editBrewLog(brew)}/>
                </>
              )}
              </View>
              ))}
            </>
          ) : (
            <>
              {brewLogsArr.map((brew, index) => (
                <View key={index}>

                  <Text>Brew Method: {brew._brewMethod}</Text>
                  <Text>Coffee Name: {brew._coffee?._coffeeName}</Text>

                  {brew._coffee?._coffeeBrand !== "" && (
                  <Text> Coffee Brand: {brew._coffee?._coffeeBrand}</Text> 
                  )}

                  {brew._coffee?._coffeeOrigin !== "" && (
                  <Text> Coffee Origin: {brew._coffee?._coffeeOrigin}</Text> 
                  )}

                  {brew._coffee?._coffeeRoast !== "" && (
                  <Text> Coffee Roast: {brew._coffee?._coffeeRoast}</Text> 
                  )}

                  {brew._coffee?._notes !== "" && (
                  <Text> Coffee Notes: {brew._coffee?._notes}</Text> 
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
                      <Button title="Remove BrewLog" onPress={() => removeBrewLog(brew)}/>
                      <Button title="Edit BrewLog" onPress={() => editBrewLog(brew)}/>
                    </>
                  )}
                  </View>
                ))}
              </>
            )}

            <Text></Text>

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