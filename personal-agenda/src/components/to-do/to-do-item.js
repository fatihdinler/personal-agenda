import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import dimensions from '../../dimensions/get-dimensions'
import colors from '../../colors/get-colors'

const ToDoItem = ({content}) => {
  
    const [isDone, setIsDone] = useState(false)
    
    const handleTouch = () => {
        setIsDone(!isDone)
    }
  
    return (
    <TouchableOpacity style={[styles.container, {backgroundColor : isDone ? colors.GREEN : '#fff'}]} onPress={handleTouch}>
        <View style={[styles.isDoneView, {backgroundColor : isDone ? '#fff' : colors.GREEN}]}></View>
            <View style={styles.toDoText}>
                <Text style={{color : isDone ? '#fff' : '#000'}}>{content}</Text>
            </View>
    </TouchableOpacity>
  )
}

export default ToDoItem

const styles = StyleSheet.create({
    container : {
        borderWidth : 0.3,
        borderColor : colors.GREEN,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        marginBottom : 10,
        margin : 10,
        borderRadius : 8,

    },
    isDoneView : {
        backgroundColor : colors.GREEN,
        width : 15,
        height : 15,
        marginLeft : 10,
        borderRadius : 15/2
    },
    toDoText : {
        margin : 15,
        marginRight : 40,
    }

})