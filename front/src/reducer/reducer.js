const initialState = {
    pais:[],
    provincia:[]
}

function reducer(state = initialState, action) {
    switch (action.type) 
    {
        case 'GET_PAIS':
            return{
                ...state,
                pais: action.payload,
            }

        case 'GET_PROVINCIA':
            return{
                ...state,
                provincia: action.payload,
            }

        default:
            return state;
    }
}

export default reducer;