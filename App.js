import React from "react";
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Platform, TouchableOpacity, Screen, SafeAreaView, Image } from "react-native";
import i18next from './i18n';
import { useTranslation } from 'react-i18next';
import { Router, Route, Link } from "./react-router";
import * as Font from 'expo-font';
import { render } from "react-dom";
import Menu from './Menu';

//default start up language
i18next.changeLanguage('fa');

Font.loadAsync({
  'Yekan': require('./assets/fonts/iryekanregular.ttf'),
});

export default function App() {
  const { t, i18n } = useTranslation();
  return (
<Menu />
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