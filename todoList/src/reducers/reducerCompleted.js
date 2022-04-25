import { GET_COMPLETED, DELETE_COMPLETED } from "../actions/actionCompleted";

const initialState2 = {
    completed: []
}

export default function reducerCompleted (state= initialState2, action) {
    switch (action.type) {
        case GET_COMPLETED:
            return {
                ...state,
                completed: state.completed.concat(action.payload)
                // completed: [...state.completed, action.payload]
            }

        case DELETE_COMPLETED:
            let copyCompleted = [...state.completed]
            copyCompleted.splice(action.payload, 1);
            return {
                ...state,
                completed: copyCompleted
            }
        default:
            return state;
    }
}