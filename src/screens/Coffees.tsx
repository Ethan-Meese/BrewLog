import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { Coffee } from './AddCoffee';

export let coffees:Coffee[] = [];

export default function Coffees({navigation}: any) {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView>
        <Text>Coffees Screen!</Text>
        <Text>You have {coffees.length} coffees</Text>
        <Text></Text>

          {coffees.map((coffee, index) => (
            <View key={index}>
              <Text>Coffee Name: {coffee._coffeeName}</Text>
              <Text>Coffee Origin: {coffee._coffeeOrigin !== "" ? coffee._coffeeOrigin : "N/A"}</Text> 
              <Text>Coffee Roast: {coffee._coffeeRoast !== "" ? coffee._coffeeRoast : "N/A"} </Text>
              <Text>Coffee Brand: {coffee._coffeeBrand !== "" ? coffee._coffeeBrand : "N/A"}</Text>
              <Text>Notes: {coffee._notes !== "" ? coffee._notes : "N/A"}</Text>
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