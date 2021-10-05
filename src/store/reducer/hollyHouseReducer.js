const initialState = {
    loader: ''
}

function hollyHouseReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_LOADER':
            return { ...state, loader: action.loader }
        default:
            return state;
    }
}
export default hollyHouseReducer;
