import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Brew } from './AddBrew';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

export let brewLogs:Brew[] = [];

export default function BrewLogs({navigation}: any) {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView>
        <Text>Brew Log Screen!</Text>
        <Text>You have {brewLogs.length} brew logs!</Text>
        <Text></Text>

          {brewLogs.map((brew, index) => (
            <View key={index}>
              <Text>Brew Method: {brew._brewMethod}</Text>
              <Text>Coffee Name: {brew._coffeeName}</Text> 
              <Text>Coffee Type: {brew._coffeeType} </Text>
              <Text>Coffee Dose: {brew._coffeeDose}</Text>
              <Text>Water Dose: {brew._water}</Text>
              <Text>Ratio: {brew._ratio !== null ? `1:${brew._ratio}` : "No Ratio Given"}</Text>
              <Text>Water Tempature: {brew._waterTemp}</Text>
              <Text>Brew Time: {brew._time}</Text>
              <Text>Grinder: {brew._grinder}</Text>
              <Text>Grind Size: {brew._grindSize}</Text>
              <Text>Rating: {brew._rating} </Text>
              <Text>Notes: {brew._notes}</Text>
              <Text></Text>
            </View>
          ))}
      </ScrollView>
    </GestureHandlerRootView>
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});