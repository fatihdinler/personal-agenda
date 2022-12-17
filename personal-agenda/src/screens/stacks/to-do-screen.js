import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import ToDoSlice from '../../components/to-do/to-do-slice'
import getColors from '../../colors/get-colors'
import AddToDoModal from '../../components/to-do/add-to-do-modal'
const ToDoScreen = () => {

  const [isModalVisible, setIsModalVisible] = useState(false)

  const displayModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  return (
    <View style={styles.container}>
      <ToDoSlice />
      <Modal
        animationType={"fade"}
        transparent={false}
        visible={isModalVisible}
        onRequestClose={() => {

        }}
      >
        <AddToDoModal  visibility={displayModal}/>
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