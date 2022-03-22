/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { View,NativeBaseProvider } from 'native-base';
import React from 'react';
import Start from './src/screens/start';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchMentor from './src/screens/search';


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Start} options={{headerShown: false}} />
          <Stack.Screen name="SearchMentor" component={SearchMentor} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  )
}


export default App;
