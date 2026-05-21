import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { Coffee } from './AddCoffee';
import { useFocusEffect } from '@react-navigation/native';

export let coffees:Coffee[] = [];


export default function Coffees({navigation, route}: any) {

  const [isEditing, setEditing] = useState(false);
  const [coffeesArr, setCoffeesArr] = useState<Coffee[]>(coffees);
  const [refresh, setRefresh] = useState(false);

  
  const handleCoffeesUpdate = () =>{
    
    coffees = coffeesArr;
    console.log(coffees);
    navigation.goBack();
  };

  const removeCoffee = (index: number) =>{
    const tempCoffeeArr = [...coffeesArr];
    tempCoffeeArr.splice(index, 1);
    setCoffeesArr(tempCoffeeArr);
  };

  const editCoffee = (coffee: Coffee) =>{
    navigation.navigate("Edit Coffee", {coffeeToEdit: coffee, coffeesArr, setCoffeesArr});
  }

  useFocusEffect(
      useCallback(() => {
        setRefresh(prev => !prev);
        setEditing(false);
      }, [])
    );

  return (
    <GestureHandlerRootView style={styles.container}>
      <ScrollView>
        
        <Text>You have {coffeesArr.length} coffees</Text>
        {(coffeesArr.length > 0 || isEditing === true)&&(
          <>
            <Button title={isEditing ? "Done" : "Edit Coffees"} onPress={() => setEditing(!isEditing)} />
          </>
        )}

        <Text></Text>

          {coffeesArr.map((coffee, index) => (
            <View key={index}>
              <Text>Coffee Name: {coffee._coffeeName}</Text>
              <Text>Coffee Origin: {coffee._coffeeOrigin !== "" ? coffee._coffeeOrigin : "N/A"}</Text> 
              <Text>Coffee Roast: {coffee._coffeeRoast !== "" ? coffee._coffeeRoast : "N/A"} </Text>
              <Text>Coffee Brand: {coffee._coffeeBrand !== "" ? coffee._coffeeBrand : "N/A"}</Text>
              <Text>Notes: {coffee._notes !== "" ? coffee._notes : "N/A"}</Text>
              {isEditing && (
                <>
                  <Button title="Remove Coffee" onPress={ () => removeCoffee(index)}/>
                  <Button title="Edit Coffee" onPress={ () => editCoffee(coffee)}/>
                </>
              )}
              <Text></Text>
            </View>
          ))}

          {coffees.length > 0 && (
            <Button title="Save" onPress={handleCoffeesUpdate}/>
          )}

      </ScrollView>
    </GestureHandlerRootView>
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});