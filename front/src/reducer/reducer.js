const initialState = {
    pais:[]
}

function reducer(state = initialState, action) {
    switch (action.type) 
    {
        case 'GET_PAIS':
            console.log('estoy en el reducer',action.payload)
            return{
                ...state,
                pais: action.payload,
            }

        default:
            return state;
    }
}

export default reducer;