export const initialState = {
    postList: [

    ]
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                postList: [
                    ...state.postList,
                    action.data
                ]
            }
        default:
            return state
    }
}

export default reducer;