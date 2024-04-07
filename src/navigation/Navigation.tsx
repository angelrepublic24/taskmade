import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProjectsScreen from '../screens/ProjectsScreen'
import TodoListScreen from '../screens/TodoListScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={ProjectsScreen}/>
            <Stack.Screen name='ToDo' component={TodoListScreen}/>
        </Stack.Navigator>
  )
}

export default Navigation