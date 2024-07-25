import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Calendar" onPress={() => navigation.navigate("Calendar")} />
    </View>
  );
}

