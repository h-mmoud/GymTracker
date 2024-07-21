import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home.tsx';
import Calender from '../screens/calender.tsx';

const screens = {
  Home: {
    screen: Home,
  },
  Calender: {
    screen: Calender,
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
