import React, { useReducer, useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles';

const initialTodos = []

//Reducer-functio
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text, completed: false }]
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id)
      default:
        throw new Error('Unknown action type')
    }
  }

  export default function TodoList() {
    const [todos, dispatch] = useReducer(todoReducer, [])
    const [inputValue, setInputValue] = useState('')

    const handleAddTodo = () => {
      if (inputValue.trim() === '') return; // Ei tyhjää tehtävää
        dispatch({ type: 'ADD_TODO', text: inputValue })
        setInputValue('')
      }

    const handleRemoveTodo = id => {
      dispatch({ type: 'REMOVE_TODO', id })
    } 

    return (
      <View style={styles.container}>
        <Text style={styles.header}>ToDo-Lista</Text>
        <View style={styles.inputContainer}> 
          <TextInput
            style={styles.input}
            placeholder="Lisää uusi tehtävä"
            value={inputValue}
            onChangeText={setInputValue}
          />
        
          <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
            <Text style={styles.buttonText}>Tallenna</Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={todos}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleRemoveTodo(item.id)}>
              <Text style={styles.todoItem}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }