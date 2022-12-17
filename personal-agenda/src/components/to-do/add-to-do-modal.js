import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import getColors from '../../colors/get-colors'
import getDimensions from '../../dimensions/get-dimensions'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddToDoModal = ({ visibility, todos, setTodos }) => {


  const [todoText, setTodoText] = useState('')

  

  const handleTouch = async () => {
    if (todoText.length == 0) {
      Alert.alert('Boş to do eklenemez !')
    }
    else if (todoText.length !== 0) {
      const time = new Date()
      const todo = { id : time, text : todoText, isDone : false}
      const updatedTodos = [...todos, todo]
      setTodos(updatedTodos)
      await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos))
      setTodoText('')
      visibility()
    }
  }





  return (
    <View style={styles.container}>
      <TextInput
        value={todoText}
        onChangeText={(text) => setTodoText(text)}
        style={styles.textinput}
        placeholder='Bir to do gir...'
        placeholderTextColor='gray'
      />
      <TouchableOpacity style={styles.button} onPress={handleTouch}>
        <Text style={{ color: 'white', alignSelf: 'center' }}>To Do Ekle</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddToDoModal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textinput: {
    width: getDimensions.SCREEN_WIDTH / 1.1,
    borderWidth: 1,
    borderColor: getColors.BLUE,
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    width: getDimensions.SCREEN_WIDTH / 1.1,
    backgroundColor: getColors.BLUE,
    padding: 15,
    borderRadius: 8,
  },

})