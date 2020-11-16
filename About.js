import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class About extends Component {
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
            <View>
                <Text>About</Text>
                <Button
              title="Go to Home"
              onPress={() => this.state.navigation.navigate('Home')}
              />
            </View>
        );
    }
}
export default About;