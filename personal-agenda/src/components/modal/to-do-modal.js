import { StyleSheet, Text, View, TouchableOpacity, FlatList, Touchable, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../colors/color';

const TodoModal = (props) => {
    const [name, setName] = useState(props.list.name);
    const [color, setColor] = useState(props.list.color);
    const [todos, setTodos] = useState(props.list.todos);

    const [input, setInput] = useState("");

    const taskCount = todos.length;
    const completedCount = todos.filter(item => item.completed).length;

    const handleTouch = () => {

    }

    const renderToDo = (item) => {
        return (
            <View>
                <TouchableOpacity
                    style={[styles.eachItemButton, { borderColor: color }]}
                    onPress={handleTouch}
                >
                    <View style={[styles.itemView, { backgroundColor: color }]}>

                    </View>
                    <Text style={styles.itemText}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        )

    }


    return (
        <View style={{ flex: 1 }}>
            <View>
                <TouchableOpacity style={{ position: 'absolute', top: 32, right: 32 }} onPress={() => props.closeModal()}>
                    <AntDesign name='close' size={32} color={colors.black} />
                </TouchableOpacity>
            </View>
           
            <View style={[styles.section]}>
                <View>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.taskCount}>{completedCount} of {taskCount}</Text>
                </View>
            </View>
            <View style={[styles.todoItems]}>
                <FlatList
                    data={todos}
                    renderItem={({ item }) => renderToDo(item)}
                    keyExtractor={item => item.title}
                />
            </View>
            <KeyboardAvoidingView style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    value={input}
                    placeholder="useless placeholder"
                />
                <TouchableOpacity style={[styles.saveButton, { backgroundColor: color }]}>
                    <AntDesign name='plus' size={15} color={colors.white} />
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </View>
    )
}

export default TodoModal

const styles = StyleSheet.create({
    container: {

    },
    section: {
        position: 'absolute',
        top: 32,
        left: 32,
    },
    title: {
        fontSize: 25,
        fontWeight: '300',
    },
    taskCount: {
        fontWeight: '700',
        color: colors.lightGray
    },
    todoItems: {
        alignSelf: 'center',
        marginTop: 100,
    },
    eachItemButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 15,
        borderRadius: 8,
        width: 350,
    },
    itemView: {
        width: 25,
        height: 25,
        borderRadius: 6,

    },
    itemText: {
        fontSize: 20,
        marginLeft: 15,
        fontWeight: '300',
    },
    inputArea: {
        alignSelf : "auto",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        margin: 10,

    },
    input: {
        flex: 1,
        height: 48,
        marginRight: 8,
        paddingHorizontal: 8,
        borderRadius: 8,
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: colors.white,

    },
    saveButton: {
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },


})