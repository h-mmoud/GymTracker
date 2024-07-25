
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/home';
// import Calender from '../screens/calender';

const screens = {
  Home: {
    screen: Home,
  },
  //Calender: {
    //screen: Calender,
  //}
}

function HomeStack = createNativeStackNavigator({screens}); 

export default NavigationContainer(Home);

