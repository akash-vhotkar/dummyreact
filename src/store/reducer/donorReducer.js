const initialState = {
    loader: ''
}

function donorReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DONOR_LOADER':
            return { ...state, loader: action.loader }
        default:
            return state;
    }
}
export default donorReducer;
