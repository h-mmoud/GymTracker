import * as React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { format } from 'date-fns';

const GetDate = () => {
  const today = new Date();
  const formattedDate = format(today, 'PPPP');

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{formattedDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  dayText: {
    fontSize: 20,
    color: 'gray',
  },
  h2: {
    padding: 10,
    fontSize: 18,
    color: 'gray',
  },
  ronnie: {
    width: 300,
    height: 500,
    borderRadius: 100,
  }

});

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <GetDate />
      <Text style={styles.h2}>Welcome to the Gym Tracker! </Text>
      <Image source={require('../assets/ronnie-coleman.png')} style={styles.ronnie} />
    </View>
    
  );
}

