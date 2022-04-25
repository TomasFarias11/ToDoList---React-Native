import {configureStore} from '@reduxjs/toolkit'
import reducerCompleted from '../reducers/reducerCompleted.js';


const store = configureStore({
    reducer: {
        completados: reducerCompleted,
    }
})

export default store;