import React, { Component } from 'react';
import { Text, View, Button, Linking, Image } from 'react-native';
import i18next from './i18n';
import { useTranslation, withTranslation  } from 'react-i18next';
import { Router, Route, Link } from "./react-router";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import About from './About';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
    DrawerItems,
  } from '@react-navigation/drawer';

class Menu extends Component {
    constructor(props) {
        super(props);
        const { navigation, localizationContext } = props;
        this.state = {
            navigation,
        }
      }


LogoTitle() {
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

  bottomNavigation() {
      const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator >
              <Tab.Screen name="Home" component={Home} options={{tabBarVisible: false}} />
              <Tab.Screen name="About" component={About}         
              options={{
                tabBarBadge: 3,
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
            }} />
      </Tab.Navigator>
    );
  }

  stackNavigation(){
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="bottomNavigation">
            {/* <Stack.Screen name="bottomNavigation" component={this.bottomNavigation} /> */}
            <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
    )
  }

  drawerContentScrollView(props) {
    return (
        <DrawerContentScrollView {...props}>
        <Image
        style={{ width: 50, height: 50, alignSelf: 'center' }}
        source = {require('./assets/logo.png')}
        // {{
        //   uri:
        //     'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        // }}
      />
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
            <DrawerItem
     style={{ backgroundColor: '#64ffda' }}
     icon={({ focused, color, size }) => {
        return (
          <Image
            source={{ uri: 'https://reactjs.org/logo-og.png' }}
            style={{ height: size, width: size, alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}
            resizeMode="cover"
          />
        );
      }}
     label='fa'
   >
       <Text>salam</Text>
       </DrawerItem>
         </DrawerContentScrollView>
    );
  }

      
    render() {
      const { t, i18n } = this.props;
      const Drawer = createDrawerNavigator();
    

        return (
<NavigationContainer>
<Drawer.Navigator initialRouteName="Home" screenOptions={{ headerTitleStyle: { color: '#fff' }}} drawerPosition="left" drawerType="slide" drawerContent={(props) => this.drawerContentScrollView(props)}>
        <Drawer.Screen name="Home" component={this.bottomNavigation} />
        <Drawer.Screen name="About" component={About} Icon={{ uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400' }} options={{ headerTitleStyle: { color: '#fff' } }}/>
      </Drawer.Navigator>
            
          </NavigationContainer>
        );
    }
}
export default withTranslation()(Menu)