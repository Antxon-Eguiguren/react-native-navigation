import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {Text} from 'react-native-paper';

const TopTab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();

  return (
    <TopTab.Navigator
      style={{paddingTop: top}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={props => ({
        tabBarStyle: {elevation: 0, shadowColor: 'transparent'},
        tabBarPressColor: 'salmon',
        tabBarIndicatorStyle: {backgroundColor: 'salmon'},
        tabBarActiveTintColor: 'salmon',
        tabBarInactiveTintColor: 'black',
        tabBarShowIcon: true,
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (props.route.name) {
            case 'Chat':
              iconName = 'trophy-outline';
              break;
            case 'Contacts':
              iconName = 'pizza-outline';
              break;
            case 'Albums':
              iconName = 'rocket-outline';
              break;
          }
          return (
            <Text style={{color}}>
              <Icon name={iconName} size={20} color={color} />
            </Text>
          );
        },
      })}>
      <TopTab.Screen name="Chat" component={ChatScreen} />
      <TopTab.Screen name="Contacts" component={ContactsScreen} />
      <TopTab.Screen name="Albums" component={AlbumsScreen} />
    </TopTab.Navigator>
  );
};
