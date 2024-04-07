import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Navigation from './src/navigation';

// import TodoListScreen from './src/screens/TodoListScreen';
import ProjectsScreen from './src/screens/ProjectsScreen';

export default function App() {
  return (
    <NavigationContainer >
      <Navigation />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
