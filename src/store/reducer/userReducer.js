const initialState = {
    expand: ''
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_EXPAND':
            return { ...state, expand: action.expand }
        default:
            return state;
    }
}

export default userReducer;
