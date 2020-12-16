import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Platform, TouchableOpacity } from "react-native";
import i18next from './i18n';
import { useTranslation } from 'react-i18next';
import { Router, Route, Link } from "./react-router";
import * as Font from 'expo-font';
import { render } from "react-dom";
import Home from './Home';
import About from './About'
import * as Localization from 'expo-localization'; // or whatever library you want
import i18n from 'i18n-js'; // or whatever library you want

  //default start up language
  i18next.changeLanguage('fa');
  
  Font.loadAsync({
    'Yekan': require('./assets/fonts/iryekanregular.ttf'),
  });
  const Drawer = createDrawerNavigator();
  
  export const LocalizationContext = React.createContext();
  const [locale, setLocale] = React.useState(Localization.locale);
const localizationContext = React.useMemo(
  () => ({
    t: (scope, options) => i18n.t(scope, { locale, ...options }),
    locale,
    setLocale,
  }),
  [locale]
);
  
  export default function App() {
    
  // const { t, i18n } = useTranslation();
   


      return (
        <LocalizationContext.Provider value={localizationContext}>
     <NavigationContainer>
         <Drawer.Navigator initialRouteName="Home">
           <Drawer.Screen name="Home" component={Home} />
           <Drawer.Screen name="About" component={About} />
         </Drawer.Navigator>
       </NavigationContainer>
        </LocalizationContext.Provider>
           
      //   <NavigationContainer>
      //   <Drawer.Navigator initialRouteName="Home">
      //     <Drawer.Screen name="Home" component={Home} />
      //     <Drawer.Screen name="About" component={About} />
      //   </Drawer.Navigator>
      // </NavigationContainer>


        // const Tab = createBottomTabNavigator();
        // <NavigationContainer>
        // <Tab.Navigator>
        //   <Tab.Screen name="First">
        //     {() => (
        //       <SettingsStack.Navigator>
        //         <SettingsStack.Screen
        //           name="Settings"
        //           component={Home}
        //         />
        //         <SettingsStack.Screen name="Home" component={Home} />
        //       </SettingsStack.Navigator>
        //     )}
        //   </Tab.Screen>
        //   <Tab.Screen name="Second">
        //     {() => (
        //       <HomeStack.Navigator>
        //         <HomeStack.Screen name="Home" component={Home} />
        //         <HomeStack.Screen name="About" component={About} />
        //       </HomeStack.Navigator>
        //     )}
        //   </Tab.Screen>
        // </Tab.Navigator>
      // </NavigationContainer>

//        const Stack = createStackNavigator();
//         <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={Home} />
//           {/* <Stack.Screen name="Home">
//           {props => <Home {...Stack}/>}
//           </Stack.Screen> */}


//           {/* component={Home} */}
//           {/* <Stack.Screen name="Home">
//   {props => <HomeScreen {...props} extraData={someData} />}
// </Stack.Screen> */}
//           <Stack.Screen name="About" component={About} />
//         </Stack.Navigator>
//       </NavigationContainer>
      );
  }

  // <Router>
  //       <View style={styles.container}>
  //         <View style={styles.nav}>
  //         <Link
  //       to={`${match.url}/rendering`}
  //       style={styles.subNavItem}
  //       underlayColor="#f0f4f7"
  //     >
  //       <Text>Rendering with React</Text>
  //     </Link>
  //           <Link to="/">
  //             <Text>Home</Text>
  //           </Link>
  //           <Link to="/about">
  //             <Text>About</Text>
  //           </Link>
  //         </View>
    
  //         <Route exact path="/" component={Home} />
  //         <Route path="/about" component={About} />
  //       </View>
  //     </Router>

// const App = () => (
// <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        //   <Text style={{ fontSize: 20, marginBottom: 20 }}>{t('hello')}</Text>
    
        //   <TouchableOpacity onPress={() => i18n.changeLanguage(i18n.language === 'fa' ? 'en' : 'fa')}>
        //     <Text style={{ fontFamily: 'Yekan' }}>{t('visits.UNUSUAL_ACTIVITY')}</Text>
        //   </TouchableOpacity>
        // </View>
// );

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  nav:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});