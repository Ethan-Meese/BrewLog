import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Brew } from './AddBrew';

export let brewLogs:Brew[] = [];

export default function BrewLogs({navigation}: any) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Brew Log Screen!</Text>
      <Text>You have {brewLogs.length} brew logs!</Text>
      <Text></Text>

        {brewLogs.map((brew, index) => (
          <View key={index}>
            <Text>Brew Method: {brew._brewMethod}</Text>
            <Text>Coffee Name: {brew._coffee?._coffeeName}</Text>
            <Text>Coffee Brand: {brew._coffee?._coffeeBrand !== "" ? `${brew._coffee?._coffeeBrand}` : "N/A"}</Text> 
            <Text>Coffee Origin: {brew._coffee?._coffeeOrigin !== "" ? `${brew._coffee?._coffeeOrigin}` : "N/A"}</Text> 
            <Text>Coffee Roast: {brew._coffee?._coffeeRoast !== "" ? `${brew._coffee?._coffeeRoast}` : "N/A"}</Text> 
            <Text>Coffee Dose: {brew._coffeeDose}</Text>
            <Text>Water Dose: {brew._water}</Text>
            <Text>Ratio: {brew._ratio !== null ? `1:${brew._ratio}` : "N/A"}</Text>
            <Text>Water Tempature: {brew._waterTemp}</Text>
            <Text>Brew Time: {brew._time}</Text>
            <Text>Grinder: {brew._grinder?._grinderName !== null ? `${brew._grinder?._grinderName}` : "N/A"}</Text>
            <Text>Grind Size: {brew._grindSize}</Text>
            <Text>Rating: {brew._rating} </Text>
            <Text>Notes: {brew._notes}</Text>
            <Text></Text>
          </View>
        ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20,
  alignItems: 'center',},
});