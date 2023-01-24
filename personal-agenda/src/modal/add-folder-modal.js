import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setTasks } from '../redux/task-slice'

const AddFolderModal = ({ closeModal }) => {

    const tasks = useSelector(state => state.tasks.tasks.folders.tasks)
    console.log(tasks)
    const dispatch = useDispatch()

    const backgroundColors = [
        "#5cd859",
        "#24a6d9",
        "#595bd9",
        "#d159d8",
        "#d88559",
    ]

    const [name, setName] = useState("");
    const [color, setColor] = useState(backgroundColors[0]);

    const renderColors = () => {
        return backgroundColors.map(item => {
            return (
                <TouchableOpacity
                    key={item}
                    style={[styles.colorSelect, { backgroundColor: item }]}
                    onPress={() => setColor(item)}
                />
            )
        })
    }

    const saveTask = () => {
        if (name.length == 0 || color.length == 0) {
            Alert.alert('Caution', 'You need to provide a folder name !')
            return null
        }
        else {
            try {
                let task = {
                    name: name,
                    color: color,
                    todos: []
                }
                let newTasks = [...tasks, task]
                AsyncStorage.setItem('to-do', JSON.stringify(newTasks))
                    .then(() => {
                        dispatch(setTasks(newTasks))
                        closeModal()
                    })
                    .catch(err => console.log(err))
            }
            catch (e) {
                console.log(e)
            }

        }


    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">

            <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 200, }}>
                <Text style={styles.title}>Create a to do file</Text>
                <TextInput
                    style={[styles.input, { borderColor: color }]}
                    placeholder="Name your folder"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <View style={styles.colorPalette}>
                    {renderColors()}
                </View>
                <TouchableOpacity style={[styles.create, { backgroundColor: color }]} onPress={saveTask}>
                    <Text style={{ color: 'black', fontWeight: '600' }}>Create</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ position: 'absolute', top: 32, right: 32 }} onPress={() => props.closeModal()}>
                <AntDesign name='close' size={32} color={'black'} />
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

export default AddFolderModal

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: 'black',
        alignSelf: 'center',
    },
    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        height: 50,
        width: 300,
        marginTop: 25,
        paddingHorizontal: 16,
        fontSize: 18,
    },
    create: {
        marginTop: 32,
        height: 50,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    colorSelect: {
        width: 30,
        height: 30,
        borderRadius: 4,

    },
    colorPalette: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12
    }
})