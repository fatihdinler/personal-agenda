import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState } from 'react'
import colors from '../../colors/colors'
import getDimensions from '../../dimensions/get-dimensions'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setTasks } from '../../redux/task-slice'

const AddTaskModal = ({ modalVisibility }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const { tasks } = useSelector(state => state.tasks.tasks)
    console.log('tasks -> ' ,tasks)
    const dispatch = useDispatch()

    const cancelPress = () => {
        modalVisibility()
    }

    const saveTask = () => {
        if (title.length == 0 && description.length == 0) {
            Alert.alert('Warning !', 'Empty tasks are not allowed.')
        }
        else if (title.length == 0) {
            Alert.alert('Warning !', 'Please provide a task title.')
        }
        else if (description.length == 0) {
            Alert.alert('Warning !', 'Please provide a task description.')
        }
        else {
            try {
                let task = {
                    title : title,
                    description : description
                }
                let newTasks = [...tasks, task]
                AsyncStorage.setItem('tasks', JSON.stringify(newTasks))
                    .then(() => {
                        dispatch(setTasks(newTasks))
                        modalVisibility()
                    })
                    .catch(err => console.log(err))
            }
            catch(e) {
                console.log(e)
            }
            finally {
                modalVisibility()
            }
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <TextInput
                style={styles.textInput}
                placeholder='title'
                placeholderTextColor={'gray'}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <TextInput
                style={styles.textInput}
                placeholder='description'
                placeholderTextColor={'gray'}
                value={description}
                onChangeText={(text) => setDescription(text)}
            />
            <TouchableOpacity style={styles.button} onPress={saveTask}>
                <Text style={{ color: 'white', fontSize: 17, }}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={cancelPress}>
                <Text style={{ color: colors.BLUE, fontSize: 17 }}>Cancel</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default AddTaskModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 15,
        marginRight: 15,

    },
    closeButton: {
        position: 'absolute',
        right: 20,
        top: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: colors.BLUE,
        height: getDimensions.height / 15,
        borderRadius: 8,
        fontSize: 18,
        marginBottom: 15,
        paddingLeft: 10,
    },
    button: {
        backgroundColor: colors.BLUE,
        height: getDimensions.height / 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    cancelButton: {
        borderColor: colors.BLUE,
        borderWidth: 0.8,
        height: getDimensions.height / 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

})