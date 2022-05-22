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

export function getArticulosFaltantes() {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/articulo/reporte`);
        dispatch({ type: 'GET_ARTICULO_FALTANTE', payload: response.data });
    }
}

export function restarStockArticulo(comprobante) {
    return async function (dispatch) {
        var id = comprobante.articulo_id;
        var cantidad = comprobante.cantidad;
        const response = await axios.get(`http://localhost:3001/articulo`);
        let stock = response.data.find(articulo => articulo.id === id).stock;
        let newStock = stock - cantidad;

        await axios.put(`http://localhost:3001/articulo/${id}`,{stock:newStock});

        localStorage.removeItem('comprobante');
        localStorage.removeItem('carrito');
        dispatch({ type: 'GET_ARTICULO'});
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

export function postComprobante(comprobante) {    
    return async function (dispatch) 
    {   
        await axios.post(`http://localhost:3001/comprobante`,comprobante);
        
        dispatch({ type: 'POST_COMPROBANTE'});
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

export function reporteTotal(gen)
{
    return function (dispatch)
    {
        dispatch({type: 'REPORTE_TOTAL', payload: gen})
    }
};

export function reporteCliente(gen)
{
    return function (dispatch)
    {
        dispatch({type: 'REPORTE_CLIENTE', payload: gen})
    }
};

export function reporteArticulo(gen)
{
    return function (dispatch)
    {
        dispatch({type: 'REPORTE_ARTICULO', payload: gen})
    }
};
