import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Button, View} from 'react-native';

export const Page2Screeen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Página Dos',
      headerBackTitle: 'Atrás', // for iOS
    });
  }, [navigation]);

  return (
    <View>
      <Button
        title="Go to Page 3"
        onPress={() => navigation.navigate('Page3')}
      />
    </View>
  );
};
