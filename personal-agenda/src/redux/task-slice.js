import { createSlice } from "@reduxjs/toolkit"

export const taskSlice = createSlice({
    name : 'tasks',
    initialState : {
        tasks : [],
        taskID : 1,
    },
    reducers : {
        setTasks : (state, action) => {
            state.tasks = {...state, tasks : action.payload}
        },
    }
})

export const { setTasks } = taskSlice.actions
export default taskSlice.reducer