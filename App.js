import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Platform, TouchableOpacity, Screen, SafeAreaView, Image } from "react-native";
import i18next from './i18n';
import { useTranslation } from 'react-i18next';
import { Router, Route, Link } from "./react-router";
import * as Font from 'expo-font';
import { render } from "react-dom";
import Home from './Home';
import About from './About';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerItems,
} from '@react-navigation/drawer';

//default start up language
i18next.changeLanguage('fa');

Font.loadAsync({
  'Yekan': require('./assets/fonts/iryekanregular.ttf'),
});
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
    <LogoTitle />
    <DrawerItem
         label="test"
         onPress={() => Linking.openURL('https://mywebsite.com/help')}
         style={{ alignSelf: 'flex-end' }}
       />
      <DrawerItemList {...props} />
    
       <DrawerItem
         label="Help"
         headerTitle="true"
         headerTitleStyle="true"
         onPress={() => Linking.openURL('https://mywebsite.com/help')}
       />
     </DrawerContentScrollView>
  );
}

function LogoTitle() {
  return (
<Image
      style={{ width: 50, height: 50, alignSelf: 'center' }}
      source={{
        uri:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
      }}
    />
    
  );
}

export default function App() {
  const { t, i18n } = useTranslation();
  return (
    <NavigationContainer>

      <Text style={{ fontFamily: 'Yekan' }}>{t('visits.UNUSUAL_ACTIVITY')}</Text>
      <LogoTitle></LogoTitle>
     
  
      <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerTitleStyle: { color: '#fff' }}} drawerPosition="left" drawerType="slide" drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} options={{ headerBa: props => <LogoTitle {...props} /> }} />
        <Drawer.Screen name="About" component={About} Icon={{ uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400' }} options={{ headerTitleStyle: { color: '#fff' }, }}/>

        {/* options={{ headerTitle: props => <LogoTitle {...props} /> }}  options={{ title: 'My home' }}*/}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});