import React from "react";
import { StyleSheet, Text, View, Platform, TouchableOpacity } from "react-native";
import i18next from './i18n';
import { useTranslation } from 'react-i18next';
import { Router, Route, Link } from "./react-router";


const Home = () => <Text>Home</Text>;

const About = () => <Text>About</Text>;

  //default start up language
  i18next.changeLanguage('fa');


  export default function App() {
    const { t, i18n } = useTranslation();
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>{t('hello')}</Text>
  
        <TouchableOpacity onPress={() => i18n.changeLanguage(i18n.language === 'fa' ? 'en' : 'fa')}>
          <Text>{t('visits.UNUSUAL_ACTIVITY')}</Text>
        </TouchableOpacity>
      </View>
    );
  }

// const App = () => (
//   <Router>
//     <View style={styles.container}>
//       <View style={styles.nav}>
//         <Link to="/">
//           <Text>Home</Text>
//         </Link>
//         <Link to="/about">
//           <Text>About</Text>
//         </Link>
//       </View>

//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} />
//     </View>
//   </Router>
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
