import * as React from 'react';
import List from './components/List';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './components/DetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Nossos Pokemons" component={List} />
        <Stack.Screen name="Detalhes" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}