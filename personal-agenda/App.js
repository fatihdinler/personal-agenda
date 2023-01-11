import { FlatList, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from './src/colors/color';
import { tempData } from './src/data/temp-data';
import TodoList from './src/screens/to-do-list-screen';
import AddListModal from './src/components/modal/add-list-modal';
import { AntDesign } from '@expo/vector-icons';
import getValueFor from './src/secure-storage/get-secure-data'
import save from './src/secure-storage/save-secure-data'

const App = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [todos, setTodos] = useState([])

  useEffect(() => {
  }, [])

  const toggleModalVisible = () => {
    setIsModalVisible(!isModalVisible)
  }

  const renderList = (list) => {
    return <TodoList list={list} />
  }




  return (
    <View style={styles.container}>
      <Modal animationType='slide' visible={isModalVisible} onRequestClose={() => toggleModalVisible()}>
        <AddListModal 
          closeModal={toggleModalVisible}
        />
      </Modal>

      <View style={{ flexDirection: 'row' }}>
        <View style={styles.divider} />
        <Text style={styles.title}>
          TO <Text style={{ fontWeight: '300', color: colors.blue }}>DO</Text>
        </Text>
        <View style={styles.divider} />
      </View>

      <View style={{ marginVertical: 48 }}>
        <TouchableOpacity style={styles.addList} onPress={toggleModalVisible}>
          <AntDesign name="plus" size={16} color={colors.blue} />
        </TouchableOpacity>
        <Text style={styles.add}>Add List</Text>
      </View>

      <View style={{ height: 275, paddingLeft: 32 }}>
        <FlatList
          data={todos}
          keyExtractor={item => item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => renderList(item)}
        />
      </View>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: colors.lightBlue,
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: colors.black,
    paddingHorizontal: 64,
  },
  addList: {
    borderWidth: 2,
    borderColor: colors.lightBlue,
    borderRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    color: colors.blue,
    fontWeight: '600',
    fontSize: 14,
    marginTop: 8
  },
})