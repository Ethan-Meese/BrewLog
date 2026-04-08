import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Brew } from './AddBrew';

export let brewLogs:Brew[] = [];

export default function BrewLogs() {
  return (
    <View style={styles.container}>
      <Text>Brew Log Screen!</Text>
      <Text>You have {brewLogs.length} brew logs!</Text>
      <Text></Text>

        {brewLogs.map((brew, index) => (
          <View key={index}>
            <Text>{brew._brewMethod}</Text>
            <Text>{brew._coffeeName}</Text> 
            <Text>{brew._coffeeType} </Text>
            <Text>{brew._grinder}</Text>
            <Text>{brew._grindSize}</Text>
            <Text>{brew._rating} </Text>
            <Text>{brew._notes}</Text>
            <Text></Text>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});