import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {RootStackParams} from '../navigator/StackNavigator';

// interface Persona {
//   id: number;
//   nombre: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({navigation, route}: Props) => {
  //   const params = route.params as Persona;
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, [navigation, params]);

  return (
    <View>
      <Text>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
