import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Page1Screeen} from '../screens/Page1Screeen';
import {Page2Screeen} from '../screens/Page2Screen';
import {Page3Screeen} from '../screens/Page3Screen';
import {PersonaScreen} from '../screens/PersonaScreen';

interface Persona {
  id: number;
  nombre: string;
}

export type RootStackParams = {
  Pagina1Screen: undefined;
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  PersonaScreen: Persona;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Page2"
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          elevation: 0, // for Android
          shadowColor: 'transparent', // for iOS
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Page1"
        options={{title: '1'}}
        component={Page1Screeen}
      />
      <Stack.Screen
        name="Page2"
        options={{title: '2'}}
        component={Page2Screeen}
      />
      <Stack.Screen
        name="Page3"
        options={{title: '3'}}
        component={Page3Screeen}
      />
      <Stack.Screen
        name="PersonaPage"
        options={{title: 'Persona'}}
        component={PersonaScreen}
      />
    </Stack.Navigator>
  );
};
