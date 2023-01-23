import { createSlice } from "@reduxjs/toolkit"

export const taskSlice = createSlice({
    name : 'tasks',
    initialState : {
        tasks : {
            folders : [
                {name : '', color : '', todos : []}
            ]
        }
    },
    reducers : {
        // setFolderName : (state, action) => {
        //     // state.tasks = {...state, tasks : action.payload}
        //     state.tasks.folders.name = action.payload
        // },
        // setTodos : (state, action) => {
        //     state.tasks.folders.todos = {...state, todos : action.payload}
        // },
        // setColor : (state, action) => {
        //     state.tasks.folders.color = action.payload
        // }
        setTasks : (state, action) => {
            state.tasks.folders = {...state, tasks : action.payload}
        }
    }
})

export const { setFolderName, setTodos, setColor, setTasks } = taskSlice.actions
export default taskSlice.reducer