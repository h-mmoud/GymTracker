import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
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
    flex: 1,
    justifyContent: 'center',
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
});

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <GetDate />
    </View>
  );
}

