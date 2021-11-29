import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, View} from 'react-native';

interface Props extends StackScreenProps<any, any> {}

export const Page3Screeen = ({navigation}: Props) => {
  return (
    <View>
      {/* <Button title="Volver" onPress={() => navigation.pop()} /> */}
      <Button title="Volver" onPress={() => navigation.goBack()} />
      <Button title="Go Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
