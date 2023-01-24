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
        setTasks : (state, action) => {
            state.tasks.folders = {...state, tasks : action.payload}
        },
        setTodos : (state, action) => {
            
        }
    }
})

export const { setTodos, setTasks } = taskSlice.actions
export default taskSlice.reducer