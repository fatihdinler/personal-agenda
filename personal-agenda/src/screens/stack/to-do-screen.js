import { StyleSheet, Text, View, TouchableOpacity, Modal, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import colors from '../../colors/colors'
import AddTaskModal from '../modal/add-task-modal'
import { useDispatch, useSelector } from 'react-redux'
import { setTasks } from '../../redux/task-slice'
import TaskBox from '../../components/task-box'

const ToDoScreen = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const { tasks } = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const state = useSelector(state => state)
    console.log(state)

    useEffect(() => {
        getTasks()
    }, [])

    const getTasks = () => {
        AsyncStorage.getItem('tasks')
            .then(tasks => {
                const parsedTasks = JSON.parse(tasks)
                if (parsedTasks && typeof parsedTasks === 'object') {
                    dispatch(setTasks(parsedTasks))
                }
            })
            .catch(err => console.log(err))
    }

    const deleteTask = (title, description) => {
        const filteredTasks = tasks.tasks?.filter(task => (task.title !== title ) && (task.description !== description))
        AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks))
            .then(() => {
                dispatch(setTasks(filteredTasks))
            })
        console.log(filteredTasks)
    }

    const handleBlueButton = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <View style={styles.viewContaniner}>
            <ScrollView>
                <Modal
                    animationType="slide"
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <AddTaskModal modalVisibility={() => setModalVisible(false)} />
                </Modal>
                {
                    tasks.tasks?.map((item, index) => {
                        return (
                            <View>
                                <TaskBox
                                    title={item.title}
                                    description={item.description}
                                    dateTime={item.dateTime}
                                    onLongPressEvent={() => deleteTask(item.title, item.description)}
                                    key={index}
                                />
                            </View>
                        )
                    })
                }
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={handleBlueButton}>
                <Text style={{ color: 'white', fontSize: 20, }}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ToDoScreen

const styles = StyleSheet.create({
    viewContaniner: {
        flex: 1,
    },
    button: {
        backgroundColor: colors.BLUE,
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        elevation: 5,

    }
})