import React from 'react';
import {useWindowDimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
import {StackNavigator} from './StackNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        drawerStyle: {width: '80%'},
      }}>
      <Drawer.Screen
        name="StackNavigatorPage"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsPage"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
