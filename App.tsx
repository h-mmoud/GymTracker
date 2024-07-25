import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Calendar from './screens/calendar';
import MainContainer from './navigation/MainContainer';

import Navigator from './routes/homeStack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MainContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'blue',
    padding: 20,
    align: 'top',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 36,
    color: 'white',
  }
});
