import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
import {TabsNavigator} from './TabsNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNav = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <Menu {...props} />}
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        drawerStyle: {width: '80%'},
      }}>
      <Drawer.Screen name="TabsPage" component={TabsNavigator} />
      <Drawer.Screen name="SettingsPage" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const Menu = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatar_container}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
        />
      </View>

      <View style={styles.menu_container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabsPage')}
          style={styles.menu_button}>
          <Icon style={styles.icon} name="bookmark-outline" size={20} />
          <Text style={styles.menu_button_text}>Tabs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsPage')}
          style={styles.menu_button}>
          <Icon style={styles.icon} name="code-slash-outline" size={20} />
          <Text style={styles.menu_button_text}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  menu_container: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
  menu_button: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  menu_button_text: {
    fontSize: 20,
    color: '#aaa',
  },
  icon: {
    marginRight: 10,
    color: '#aaa',
    alignSelf: 'center',
  },
  avatar_container: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
});
