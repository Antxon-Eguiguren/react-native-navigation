import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNav} from './src/navigator/DrawerNav';
// import {StackNavigator} from './src/navigator/StackNavigator';
//import {DrawerNavigator} from './src/navigator/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
      {/* <DrawerNavigator /> */}
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
