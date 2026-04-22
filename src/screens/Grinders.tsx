import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { Grinder } from './AddGrinder';

export let grinders:Grinder[] = [];


export default function Ginders({navigation}: any) {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView>
        <Text>Grinders Screen!</Text>
        <Text>You have {grinders.length} grinders!</Text>
        <Text></Text>

          {grinders.map((grinder, index) => (
            <View key={index}>
              <Text>Grinder Name: {grinder._grinderName}</Text>
              <Text>Notes: {grinder._notes}</Text>
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