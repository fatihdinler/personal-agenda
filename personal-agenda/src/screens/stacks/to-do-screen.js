import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import ToDoSlice from '../../components/to-do/to-do-slice'
import getColors from '../../colors/get-colors'
import AddToDoModal from '../../components/to-do/add-to-do-modal'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ToDoScreen = () => {

  useEffect(() => {
    findTodos()
  }, [])

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [todos, setTodos] = useState([])

  const displayModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  const findTodos = async () => {
    const result = await AsyncStorage.getItem('todos')
    if(result !== null) {
      setTodos(JSON.parse(result)) 
    }
  }

  return (
    <View style={styles.container}>
      <ToDoSlice data={todos} />
      <Modal
        animationType={"fade"}
        transparent={false}
        visible={isModalVisible}
        onRequestClose={() => {

        }}
      >
        <AddToDoModal visibility={displayModal} todos={todos} setTodos={setTodos}/>
      </Modal>
      <TouchableOpacity style={styles.addButton} onPress={displayModal}>
        <Text style={{ color: 'white', alignSelf: 'center', }}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ToDoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 70,
    height: 70,
    backgroundColor: getColors.BLUE,
    justifyContent: 'center',
    borderRadius: 70 / 2,
  }
})