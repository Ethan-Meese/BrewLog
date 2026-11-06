import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { coffees } from './Coffees';
let welcomeMessege:string[] = ["Welcome", "Goodmorning!", "Another day another coffee!", 
                              "What are we feeling today?", "It's coffee time!", "I hope you're doing well!", 
                              "Todays a good day!", "Lets be honest...Nothing beats coffee"];
                              
function getRandomNumber(): number{
  return Math.floor(Math.random() * welcomeMessege.length)
}

export default function Dashboard({navigation}: any) {

    const [refresh, setRefresh] = useState(false);

    const getAllCoffeeData = async () => {
    try{
      const coffeeJsonValue = await AsyncStorage.getItem('coffees');

      if (coffeeJsonValue !== null){
        const parsedCoffees = JSON.parse(coffeeJsonValue);

        if (parsedCoffees.length > 0){
          coffees.push(...parsedCoffees);
          console.log("Success!", parsedCoffees, coffees);
        } 
      }

    } catch (e){
      console.log(e);
    }
  }

  
  useFocusEffect(
    useCallback(() => {
      setRefresh(prev => !prev);
      //getAllCoffeeData();
    }, [])
  );


  // This should load all coffee data at the start of the project
  useEffect(() => {
    getAllCoffeeData();
  }, []);
  
  return (
    <View style={styles.container}>
      <Text>{welcomeMessege[getRandomNumber()]}</Text>
      <Button title="Add Brew" onPress={() => navigation.navigate("Add Brew")}/>
      <Button title="Brew Logs" onPress={() => navigation.navigate("Brew Logs")}/>
      <Button title="Coffees" onPress={() => navigation.navigate("Coffees")}/>
      <Button title="Grinders" onPress={() => navigation.navigate("Grinders")}/>
      <Button title="Add Coffee" onPress={() => navigation.navigate("Add Coffee")}/>
      <Button title="Add Grinder" onPress={() => navigation.navigate("Add Grinder")}/>
      <Button title="Settings" onPress={() => navigation.navigate("Settings")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});


// Note to self: 
// Add saving to each thing now (AddBrews, EditBrews, EditCoffee, AddGrinders, EditGrinder)
// Then add loading for each one as well on the Dashboard