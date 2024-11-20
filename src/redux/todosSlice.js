import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    tasks: []    //para iniciar en vacio
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        //agrega la tarea genrando id
        addTask: (state, action) => {
            state.tasks.push(action.payload);  
        },
        //elimina la tarea por su id
        removeTask: (state,action) => {
            state.tasks = state.tasks.filter((task, index) => index !== action.payload) 
        }
    }
});

//expostar acciones y reducer
export const {addTask, removeTask} = todosSlice.actions;
export default todosSlice.reducer