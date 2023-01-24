import { FlatList, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import AddFolderModal from '../modal/add-folder-modal'
import { AntDesign } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setTasks } from '../redux/task-slice'
import FolderBox from '../components/folder-box'

const FolderScreen = () => {

    useEffect(() => {
        getTasks()
    }, [])

    const [isModalVisible, setIsModalVisible] = useState(false)
    const folders = useSelector(state => state.tasks.tasks.folders.tasks)
    console.log(folders)
    const dispatch = useDispatch()

    const toggleModalVisible = () => {
        setIsModalVisible(!isModalVisible)
    }

    const getTasks = () => {
        AsyncStorage.getItem('to-do')
            .then(tasks => {
                const parsedTasks = JSON.parse(tasks)
                dispatch(setTasks(parsedTasks))
            })
            .catch(err => console.log(err))
    }

    return (
        <View style={styles.container}>
            <Modal animationType='slide' visible={isModalVisible} onRequestClose={() => toggleModalVisible()}>
                <AddFolderModal
                    closeModal={toggleModalVisible}
                />
            </Modal>

            <View style={{ flexDirection: 'row' }}>
                <View style={styles.divider} />
                <Text style={styles.title}>
                    TO <Text style={{ fontWeight: '300', color: 'black' }}>DO</Text>
                </Text>
                <View style={styles.divider} />
            </View>

            <View style={{ marginVertical: 48 }}>
                <TouchableOpacity style={styles.addList} onPress={toggleModalVisible}>
                    <AntDesign name="plus" size={16} color={'black'} />
                </TouchableOpacity>
                <Text style={styles.add}>Add List</Text>
            </View>

            <View style={{ height: 275, paddingLeft: 32 }}>
                <FlatList
                    data={folders}
                    keyExtractor={item => item.name}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <FolderBox
                                name={item.name}
                                color={item.color}
                                todos={item.todos}
                            />
                        )
                    }}
                />
            </View>

        </View>
    )
}

export default FolderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    divider: {
        backgroundColor: 'black',
        height: 1,
        flex: 1,
        alignSelf: 'center',
    },
    title: {
        fontSize: 38,
        fontWeight: '800',
        color: 'black',
        paddingHorizontal: 64,
    },
    addList: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 4,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    add: {
        color: 'black',
        fontWeight: '600',
        fontSize: 14,
        marginTop: 8
    },
})