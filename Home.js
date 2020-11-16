import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
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
       console.log(this.props.navigation);
      }
      
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
              title="Go to About"
              onPress={() => this.state.navigation.navigate('About')}
              />
              </View>
        );
    }
}
export default Home;