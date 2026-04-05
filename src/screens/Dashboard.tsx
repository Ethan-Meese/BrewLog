import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

let welcomeMessege:string[] = ["Welcome", "Goodmorning!", "Another day another coffee!", 
                              "What are we feeling today?", "It's coffee time!", "I hope you're doing well!", 
                              "Todays a good day!", "Lets be honest...Nothing beats coffee"];
                              
function getRandomNumber(): number{
  return Math.floor(Math.random() * welcomeMessege.length)
}

export default function Dashboard({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text>{welcomeMessege[getRandomNumber()]}</Text>
      <Button title="Add Brew" onPress={() => navigation.navigate("Add Brew")}/>
      <Button title="Brew Logs" onPress={() => navigation.navigate("Brew Logs")}/>
      <Button title="Settings" onPress={() => navigation.navigate("Settings")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});