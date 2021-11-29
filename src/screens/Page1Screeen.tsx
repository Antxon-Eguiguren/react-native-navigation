/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<any, any> {}

export const Page1Screeen = ({navigation}: Props) => {
  return (
    <View>
      <Button
        title="Go to Page 2"
        onPress={() => navigation.navigate('Page2')}
      />

      <View style={styles.buttons_container}>
        <TouchableOpacity
          style={{...styles.button, backgroundColor: 'purple'}}
          onPress={() =>
            navigation.navigate('PersonaPage', {id: 1, nombre: 'Pedro'})
          }>
          <Icon
            style={styles.button_text}
            name="code-slash-outline"
            size={20}
          />
          <Text style={styles.button_text}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.button, backgroundColor: 'salmon'}}
          onPress={() =>
            navigation.navigate('PersonaPage', {id: 2, nombre: 'Maria'})
          }>
          <Icon
            style={styles.button_text}
            name="code-slash-outline"
            size={20}
          />
          <Text style={styles.button_text}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  button: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_text: {
    color: 'white',
  },
});
