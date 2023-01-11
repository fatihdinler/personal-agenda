import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { colors } from '../../colors/color'
import { tempData } from '../../data/temp-data'
import saveData from '../../async-storage/save-data'
import getData from '../../async-storage/get-data'


const AddListModal = (props) => {

    const backgroundColors = [
        "#5cd859",
        "#24a6d9",
        "#595bd9",
        "#d159d8",
        "#d88559",
    ]

    const [name, setName] = useState("")
    const [color, setColor] = useState(backgroundColors[0])

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

    const createToDo = () => {
        const toDoObject = {
            name,
            color,
            todos : []
        }
        tempData.push(
            toDoObject
        )
        setName("");
        props.closeModal();
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
                <TouchableOpacity style={[styles.create, { backgroundColor: color }]} onPress={createToDo}>
                    <Text style={{ color: colors.white, fontWeight: '600' }}>Create</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={{ position: 'absolute', top: 32, right: 32 }} onPress={() => props.closeModal()}>
                <AntDesign name='close' size={32} color={colors.black} />
            </TouchableOpacity>

        </KeyboardAvoidingView>
    )
}

export default AddListModal
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: colors.black,
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