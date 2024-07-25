import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';

//Screens
import Home from '../screens/home';
import Track from '../screens/track';
import Calendar from '../screens/calendar';
import Settings from '../screens/settings';

//Screen names
const homeName = 'Home';
const trackName = 'Track';
const calendarName = 'Calendar';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();


export default function MainContainer(){
  return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            switch(rn){
            case homeName:
              iconName = focused ? 'barbell' : 'barbell-outline';
              break;
            case trackName:
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
              break;
            case calendarName:
              iconName = focused ? 'calendar' : 'calendar-outline';
              break;
            case settingsName:
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            }


          return <IonIcons name={iconName} size={size} color={color} />
        },
      })}> 
      
      <Tab.Screen name={homeName} component={Home} />
      <Tab.Screen name={trackName} component={Track} />
      <Tab.Screen name={calendarName} component={Calendar} />
      <Tab.Screen name={settingsName} component={Settings} />

           

      </Tab.Navigator>
    </NavigationContainer> 
  )
}
