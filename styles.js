import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
      paddingTop:  Constants.statusBarHeight,
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      paddingLeft: 10,
    },
    header: {
      fontSize: 24,  
      fontWeight: 'bold',  
      textAlign: 'center',
      marginBottom: 20,    
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    input: {
      flex: 1,
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      paddingHorizontal: 8,
      marginRight: 10,
    },
    todoItem: {
      padding: 15,
      backgroundColor: '#f9f9f9',
      borderBottomWidth: 1,
      borderColor: '#eee',
      fontSize: 18,
    },
    button: {
      backgroundColor: '#007BFF',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  })
