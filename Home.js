import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import i18next from './i18n';
import { useTranslation } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class Home extends Component {
    constructor(props) {
        super(props);
        const { navigation } = props;
        this.state = {
            navigation,
        }
       // this.handleMouseMove = this.handleMouseMove.bind(this);
       // this.state = { x: 0, y: 0 };
      }

      majid() {
        const { t } = this.props.t.useTranslation();
        //   return t('visits.UNUSUAL_ACTIVITY')
      }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
              title="About"
              onPress={() => this.state.navigation.navigate('About')}
              />
              {/* 
              i18n.changeLanguage(i18n.language === 'fa' ? 'en' : 'fa')
              this.state.navigation.navigate('About') */}
              <Button
              title="Open"
              onPress={() => this.state.navigation.openDrawer()}
              />
              <Button
              title="Close"
              onPress={() => this.state.navigation.closeDrawer()}
              />
              <Button
              title="toggle"
              onPress={() => this.state.navigation.toggleDrawer()}
              />
               <Text style={{ fontFamily: 'Yekan' }}>{this.majid()}</Text>
              </View>

// import { useIsDrawerOpen } from '@react-navigation/drawer';
// const isDrawerOpen = useIsDrawerOpen();
        );
    }
}
export default Home;