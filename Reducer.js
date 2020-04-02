const initialState = {
    step: 5
}

const reducerFun = (state = initialState, action) => {
    switch (action.type) {
        case 'BUTTON_CLICK': return {
            step: state.step + 1
        }

        case 'DEC': return {
            step: state.step - 1
        }

        default: return state
    }
}

export default reducerFun