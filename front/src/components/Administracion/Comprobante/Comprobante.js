import {useDispatch, useSelector} from 'react-redux'
import { useEffect,useState} from 'react';
import { getCliente, getComprobante, getArticulo } from '../../../actions/actions';
import axios from 'axios'

function Comprobante()
{
    const dispatch = useDispatch();
    var comprobantes = useSelector(state => state.comprobante);
    var clientes = useSelector(state => state.cliente);
    var articulos = useSelector(state => state.articulo);
    const [inputsPut, setInputsPut] = useState({
        numero:'',
        fecha:'',
        estado:'',
        id_cliente:'',
        articulo_id:'',
        cantidad:''
    })

    const [inputs, setInputs] = useState({
        numero:'',
        fecha:'',
        estado:'',
        id_cliente:'',
        articulo_id:'',
        cantidad:''
    })

    useEffect(() =>{
        dispatch(getCliente());
        dispatch(getComprobante())
        dispatch(getArticulo())
    },[])

    function handleChange(e) {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    } 

    function handleChangePut(e) {
        setInputsPut({
            ...inputsPut,
            [e.target.name]: e.target.value
        })
    } 

    function post(e) {
        e.preventDefault();
        axios.post('http://localhost:3001/comprobante', inputs)
        alert(`${inputs.nombre} creado correctamente`)
    }

    function delet(e) {
        e.preventDefault();
        var id = e.target.id;
        axios.delete(`http://localhost:3001/comprobante/${id}`, inputs)
        alert(`${inputs.nombre} borrado correctamente`)
    }

    function put(e) {
        e.preventDefault();
        var id = e.target.id;
        axios.put(`http://localhost:3001/comprobante/${id}`, inputsPut)
        alert(`${inputsPut.nombre} modificado correctamente`)
    }

    function putArticulo(id,cantidad) {
        let stock = articulos.find(articulo => articulo.id === id).stock;
        let newStock = stock + cantidad;
        axios.put(`http://localhost:3001/articulo/${id}`, {stock:newStock})
    }

return(
<div style={{width:'1000px', marginLeft:'500px', marginTop
    :'50px'}}>
    <form class="row gy-2 gx-3 align-items-center" onSubmit={(e)=> post(e)}>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='numero' value={inputs.numero} type='numero' class="form-control" id="autoSizingInput" placeholder="Numero"></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='fecha' value={inputs.fecha} type='date' class="form-control" id="autoSizingInput" placeholder="Fecha"></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='estado' value={inputs.estado} type="text" class="form-control" id="autoSizingInput" placeholder="Estado"></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='cantidad' value={inputs.cantidad} type="text" class="form-control" id="autoSizingInput" placeholder="Cantidad"></input>
        </div>
        
        <div class="col-auto">
        <select class="form-select" id="inlineFormSelectPref" name='id_cliente' onChange={(e) => handleChange(e)}>
        <option selected>Clientes...</option>
        {clientes.map(cliente => (
                <option key={cliente.id} value={cliente.id}>{cliente.ape_nom}</option>
            ))}
        </select>
        </div>

        <div class="col-auto">
        <select class="form-select" id="inlineFormSelectPref" name='articulo_id' onChange={(e) => handleChange(e)}>
        <option selected>Articulos...</option>
        {articulos.map(articulo => (
                <option key={articulo.id} value={articulo.id}>{articulo.nombre}</option>
            ))}
        </select>
        </div>
        
        <div>
            <button type="submit" class="btn btn-primary">Guardar</button>
        </div>

</form>

    <ul class="list-group" style={{ marginTop:'50px'}}>
    {
        comprobantes.map(comprobante => {
            return(
                <li style={{ color:'black',marginBottom:'100px'}} class="list-group-item list-group-item-action list-group-item-primary" >
                
                <div class="input-group">
                <input type="text" class="form-control" id="nombre"    aria-describedby="nombre" name='estado' placeholder={comprobante.estado} onChange={(e) => handleChangePut(e)}></input>

                <input type="text" class="form-control" id="numero"    aria-describedby="nombre" name='numero' placeholder={comprobante.numero} onChange={(e) => handleChangePut(e)}></input>

                <input type="text" class="form-control" id="fecha"    aria-describedby="nombre" name='fecha' placeholder={comprobante.fecha} onChange={(e) => handleChangePut(e)}></input>

                <input type="text" class="form-control" id="fecha"    aria-describedby="nombre" name='fecha' placeholder={comprobante.id_cliente} onChange={(e) => handleChangePut(e)}></input>
                
                <input type="text" class="form-control" id="fecha"    aria-describedby="nombre" name='fecha' placeholder={comprobante.articulo_id} onChange={(e) => handleChangePut(e)}></input>

                <input type="text" class="form-control" id="fecha"    aria-describedby="nombre" name='fecha' placeholder={comprobante.cantidad} onChange={(e) => handleChangePut(e)}></input>

                <input type="text" class="form-control" id="fecha"    aria-describedby="nombre" name='fecha' placeholder={comprobante.precio} onChange={(e) => handleChangePut(e)}></input>

                <button onClick={
                    (e) => {delet(e)
                        putArticulo(comprobante.articulo_id,comprobante.cantidad)
                    }} id={comprobante.id} class="btn btn-outline-secondary" type="button">Borrar</button>
                <button class="btn btn-outline-secondary" type="button" onClick={(e) => put(e)} id={comprobante.id}>Modificar</button>
                </div>

                </li>   
            )
        })
    }
    </ul>

</div>)
}

export default Comprobante;