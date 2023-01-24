import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import getDimensions from '../dimensions/get-dimensions'
import { setTodos } from '../redux/task-slice'
import { useDispatch, useSelector } from 'react-redux'

const FolderDetailsScreen = ({ route }) => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.tasks.tasks.folders.tasks)
    console.log(state)
    const generalState = useSelector(state => state)
    console.log(generalState)

    const { name, color, todos } = route.params
    const [todo, setTodo] = useState('')

    const filteredState = state.find(item => item.name == name)

    const handlePress = () => {
        if(todo) {
            const newArray = [...filteredState.todos, todo]
            dispatch(setTodos(newArray))
            console.log(state)
        }
        else {
            console.log('hata')
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <ScrollView>
                <View style={styles.folderNameView}>
                    <Text style={styles.folderNameText}>{name}</Text>
                    <View style={[styles.divider, { borderColor: color }]}></View>
                </View>
                <Text>{todo}</Text>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <TextInput  
                    style={styles.input}
                    placeholder='Enter a to do'
                    value={todo}
                    onChangeText={(text) => setTodo(text)}
            
                />
                <TouchableOpacity style={[styles.addButton, {backgroundColor : color}]} onPress={handlePress}>
                    <Text style={{color : 'white', fontSize : 30}}>+</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default FolderDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    folderNameView: {
        alignSelf: 'flex-start',
        marginTop: 30,

    },
    divider: {
        borderWidth: 0.7,
        marginTop : 10,
    },
    folderNameText: {
        fontSize: 40,
        fontWeight: '300',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        height: getDimensions.height / 15,
        borderRadius: 8,
        fontSize: 18,
        paddingLeft: 15,
        alignSelf : 'center',
      },
      bottomContainer : {
        flexDirection : 'row',
        alignSelf : 'flex-end',
      },    
      addButton : {
        width : getDimensions.width / 6,
        height : getDimensions.height / 10,
        borderRadius : getDimensions.height / 20,
        justifyContent : 'center',
        alignItems : 'center',
        alignSelf : 'center',
      },
    
})