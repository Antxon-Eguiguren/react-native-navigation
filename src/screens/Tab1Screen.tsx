import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text>Icons</Text>
      <Text>
        <Icon name="cloudy-night-outline" size={60} color="#900" />
      </Text>
    </View>
  );
};
