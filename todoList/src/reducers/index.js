const initialState = {
    probando: [],
}

export default function reducerProbando (state= initialState, action) {
    switch (action.type) {
        case 'GET_COMPLETED':
            state.probando.length = 0
            return {
                ...state,
                probando: state.probando.concat(action.payload)
            }

        default:
            return state;
    }
}