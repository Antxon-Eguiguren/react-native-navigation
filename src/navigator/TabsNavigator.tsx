import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {Tab1Screen} from '../screens/Tab1Screen';
import {StackNavigator} from './StackNavigator';
import {TopTabNavigator} from './TopTabNavigator';

export const TabsNavigator = () => {
  return Platform.OS === 'ios' ? <TabsiOS /> : <TabsAndroid />;
};

const TabAndroid = createMaterialBottomTabNavigator();
const TabsAndroid = () => {
  return (
    <TabAndroid.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: 'salmon'}}
      sceneAnimationEnabled={true}
      screenOptions={props => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (props.route.name) {
            case 'Tab1Page':
              iconName = 'cloudy-night-outline';
              break;
            case 'Tab2Page':
              iconName = 'earth-outline';
              break;
            case 'StackNavigator':
              iconName = 'heart-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <TabAndroid.Screen name="Tab1Page" component={Tab1Screen} />
      <TabAndroid.Screen name="Tab2Page" component={TopTabNavigator} />
      <TabAndroid.Screen name="StackNavigator" component={StackNavigator} />
    </TabAndroid.Navigator>
  );
};

const TabiOS = createBottomTabNavigator();
const TabsiOS = () => {
  return (
    <TabiOS.Navigator
      screenOptions={props => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (props.route.name) {
            case 'Tab1Page':
              iconName = 'cloudy-night-outline';
              break;
            case 'Tab2Page':
              iconName = 'earth-outline';
              break;
            case 'StackNavigator':
              iconName = 'heart-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <TabiOS.Screen name="Tab1Page" component={Tab1Screen} />
      <TabiOS.Screen name="Tab2Page" component={TopTabNavigator} />
      <TabiOS.Screen name="StackNavigator" component={StackNavigator} />
    </TabiOS.Navigator>
  );
};
