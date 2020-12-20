import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import i18next from './i18n';
import { useTranslation, withTranslation  } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        const { navigation, localizationContext } = props;
        this.state = {
            navigation,
        }
      }
      

      majid() {
      }

      
    render() {
      const { t, i18n } = this.props;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Dashboard</Text>
              </View>

        );
    }
}
export default withTranslation()(Dashboard)