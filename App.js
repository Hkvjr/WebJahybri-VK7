import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TodoList from './components/ToDoList';

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <TodoList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
})