const initialState = {
    pais:[],
    departamento:[],
    localidad:[],
    tipoArticulo:[],
    articulo:[],
    provincia:[],
    cliente:[],
    configuracion:[],
    comprobante:[],
    carrito:[],
    articulosFaltantes:[]
} 

function reducer(state = initialState, action) {
    switch (action.type) 
    {
        case 'GET_TIPOARTICULO':
            return{
                ...state,
                tipoArticulo: action.payload,
            }

        case 'GET_COMPROBANTE':
            return{
                ...state,
                comprobante: action.payload,
            }

        case 'POST_COMPROBANTE':
            return{
                ...state,
            }

        case 'GET_CONFIGURACION':
            return{
                ...state,
                configuracion: action.payload,
            }

        case 'GET_ARTICULO':
            return{
                ...state,
                articulo: action.payload,
            }

        case 'GET_ARTICULO_FALTANTE':
            return{
                ...state,
                articulosFaltantes: action.payload,
            }

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

        case 'GET_LOCALIDAD':
            return{
                ...state,
                localidad: action.payload,
            }

        case 'GET_DEPARTAMENTO':
            return{
                ...state,
                departamento: action.payload,
            }

        case 'GET_CLIENTE':
            return{
                ...state,
                cliente: action.payload,
            }
            
        case 'GENERICO':
            // state.carrito.push(action.payload)
            localStorage.setItem('carrito', JSON.stringify(action.payload))
            let carrito = localStorage.getItem('carrito')
            state.carrito.push(JSON.parse(carrito))
            return{
                ...state,
            }

        case 'GET_CARRITO':
            return{
                ...state,
            }

        case 'VACIAR_CARRITO':
            state.carrito = []
            return{
                ...state,
            }

        default:
            return state;
    }
}

export default reducer;