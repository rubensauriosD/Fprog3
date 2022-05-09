import axios from 'axios';

export function getPais() {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/pais`);
        dispatch({ type: 'GET_PAIS', payload: response.data });
    }
}

export function getProvincia() {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/provincia`);
        dispatch({ type: 'GET_PROVINCIA', payload: response.data });
    }
}

export function getLocalidad() {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/localidad`);
        dispatch({ type: 'GET_LOCALIDAD', payload: response.data });
    }
}

export function getDepartamento() {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/departamento`);
        dispatch({ type: 'GET_DEPARTAMENTO', payload: response.data });
    }
}

export function getTipoArticulo() {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/tipoArticulo`);
        dispatch({ type: 'GET_TIPOARTICULO', payload: response.data });
    }
}

export function getArticulo() {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/articulo`);
        dispatch({ type: 'GET_ARTICULO', payload: response.data });
    }
}

export function getCliente() {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/cliente`);
        dispatch({ type: 'GET_CLIENTE', payload: response.data });
    }
}

export function getConfiguracion() {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/configuracion`);
        dispatch({ type: 'GET_CONFIGURACION', payload: response.data });
    }
}

export function getComprobante() {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/comprobante`);
        dispatch({ type: 'GET_COMPROBANTE', payload: response.data });
    }
}

export function generico(gen)
{
    return function (dispatch)
    {
        dispatch({type: 'GENERICO', payload: gen})
    }
};

export function getCarrito()
{
    return function (dispatch)
    {
        dispatch({type: 'GET_CARRITO'})
    }
};

export function vaciarCarrito()
{
    return function (dispatch)
    {
        dispatch({type: 'VACIAR_CARRITO'})
    }
};