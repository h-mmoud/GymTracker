import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Navigator from './routes/homeStack.tsx';

export default function App() {
  return (
    <View style={styles.container}>
      return {
        <Navigator />
      }
    </View>
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
