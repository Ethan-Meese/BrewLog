import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Brew } from './AddBrew';

export let brewLogs:Brew[] = [];

export default function BrewLogs() {
  return (
    <View style={styles.container}>
      <Text>Brew Log Screen!</Text>
      <Text>You have {brewLogs.length} brew logs!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});