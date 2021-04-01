import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Todo today section */}
      <View>
        <Text style={styles.todoSection}>Todo today:</Text>
      </View>
      
      {/* Task section*/}
      <View style={styles.tasksSection}>
        <Task name="Work out 30 minutes" ico=""/>
        <Task name="Ace the react native test" ico="FaSchool"/>
        <Task name="Chill out" ico=""/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C82FF',
  },
  todoSection: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  tasksSection: {
    paddingHorizontal: 20,
    paddingTop: 80,
  }
});
