import {configureStore} from '@reduxjs/toolkit'
import reducerCompleted from '../reducers/reducerCompleted.js';
import reducerProbando from "../reducers/index.js";


const store = configureStore({
    reducer: {
        completed: reducerCompleted,
        probando: reducerProbando
    }
})

export default store;