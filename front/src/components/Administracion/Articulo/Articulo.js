import {useDispatch, useSelector} from 'react-redux'
import { useEffect,useState} from 'react';
import { getTipoArticulo,getArticulo } from '../../../actions/actions';
import axios from 'axios'

function Articulo()
{
    const dispatch = useDispatch();
    var articulos = useSelector(state => state.articulo);
    var tArticulo = useSelector(state => state.tipoArticulo);
    
    const [inputsPut, setInputsPut] = useState({
        nombre:'',
        id_tipo_articulo:'',
        codigo:'',
        precio_venta:'',
        precio_costo:'',
        stock:'',
        stock_minimo:'',
        stock_negativo:''
    })

    const [inputs, setInputs] = useState({
        nombre:'',
        id_tipo_articulo:'',
        codigo:'',
        precio_venta:'',
        precio_costo:'',
        stock:'',
        stock_minimo:'',
        stock_negativo:''
    })

    useEffect(() =>{
        dispatch(getTipoArticulo());
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
        axios.post('http://localhost:3001/articulo', inputs)
        alert(`${inputs.nombre} creado correctamente`)
    }

    function delet(e) {
        e.preventDefault();
        var id = e.target.id;
        axios.delete(`http://localhost:3001/articulo/${id}`, inputs)
        alert(`${inputs.nombre} borrado correctamente`)
    }

    function put(e) {
        e.preventDefault();
        var id = e.target.id;
        axios.put(`http://localhost:3001/articulo/${id}`, inputsPut)
        alert(`${inputsPut.nombre} modificado correctamente`)
    }

return(
<div style={{width:'1000px', marginLeft:'500px', marginTop
    :'50px'}}>
    <form class="row gy-2 gx-3 align-items-center" onSubmit={(e)=> post(e)}>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='nombre' value={inputs.nombre} type="text" class="form-control" id="autoSizingInput" placeholder="Nombre"></input>
        </div>
        <div class="col-auto">
        <select class="form-select" id="inlineFormSelectPref" name='id_tipo_articulo' onChange={(e) => handleChange(e)}>
        <option selected>Selecionar...</option>
        {tArticulo.map(articulo => (
                <option key={articulo.id} value={articulo.id}>{articulo.nombre}</option>
            ))}
        </select>
        </div>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='codigo' value={inputs.codigo} type="number" class="form-control" id="autoSizingInput" placeholder="Codigo"></input>
        </div>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='stock' value={inputs.stock} type="number" class="form-control" id="autoSizingInput" placeholder="Stock"></input>
        </div>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='precio_costo' value={inputs.precio_costo} type="number" class="form-control" id="autoSizingInput" placeholder="Precio de Costo"></input>
        </div>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='precio_venta' value={inputs.precio_venta} type="number" class="form-control" id="autoSizingInput" placeholder="Precio de Venta"></input>
        </div>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='stock_minimo' value={inputs.stock_minimo} type="number" class="form-control" id="autoSizingInput" placeholder="Stock Minimo"></input>
        </div>

        <div class="col-auto">
            <div class="form-check">
                <input onChange={(e) => handleChange(e)} name='stock_negativo' value={inputs.stock_negativo} class="form-check-input" type="checkbox" id="inlineFormCheck"></input>
                <label class="form-check-label" for="inlineFormCheck">
                    Stock Negativo
                </label>
            </div>
        </div>
        
        <div>
            <button type="submit" class="btn btn-primary">Guardar</button>
        </div>

    </form>

    <ul class="list-group" style={{ marginTop:'50px'}}>
    {
        articulos.map(articulo => {
            return(
                <li style={{ color:'black',marginBottom:'100px'}} class="list-group-item list-group-item-action list-group-item-success" >

                <div class="row gy-2 gx-3 align-items-center">
                <div class="col-auto">
                <label class="visually-hidden" for="autoSizingInput"></label>
                <input onChange={(e) => handleChangePut(e)} name='nombre' value={inputsPut.nombre} type="text" class="form-control" id="autoSizingInput" placeholder={articulo.nombre}></input>
                </div>

                <div class="col-auto">
                <select class="form-select" id="inlineFormSelectPref" name='id_tipo_articulo' onChange={(e) => handleChangePut(e)}>
                <option selected></option>
                {tArticulo.map(articulo => (
                        <option key={articulo.id} value={articulo.id}>{articulo.nombre}</option>
                    ))}
                </select>
                </div>

                <div class="col-auto">
                    <label class="visually-hidden" for="autoSizingInput"></label>
                    <input onChange={(e) => handleChangePut(e)} name='codigo' value={inputsPut.codigo} type="number" class="form-control" id="autoSizingInput" placeholder={articulo.codigo}></input>
                </div>

                <div class="col-auto">
                    <label class="visually-hidden" for="autoSizingInput"></label>
                    <input onChange={(e) => handleChangePut(e)} name='stock' value={inputsPut.stock} type="number" class="form-control" id="autoSizingInput" placeholder={articulo.stock}></input>
                </div>

                <div class="col-auto">
                    <label class="visually-hidden" for="autoSizingInput"></label>
                    <input onChange={(e) => handleChangePut(e)} name='precio_costo' value={inputsPut.precio_costo} type="number" class="form-control" id="autoSizingInput" placeholder={articulo.precio_costo}></input>
                </div>

                <div class="col-auto">
                    <label class="visually-hidden" for="autoSizingInput"></label>
                    <input onChange={(e) => handleChangePut(e)} name='precio_venta' value={inputsPut.precio_venta} type="number" class="form-control" id="autoSizingInput" placeholder={articulo.precio_venta}></input>
                </div>

                <div class="col-auto">
                    <label class="visually-hidden" for="autoSizingInput"></label>
                    <input onChange={(e) => handleChangePut(e)} name='stock_minimo' value={inputsPut.stock_minimo} type="number" class="form-control" id="autoSizingInput" placeholder={articulo.stock_minimo}></input>
                </div>

                <div class="col-auto">
                    <div class="form-check">
                        <input onChange={(e) => handleChangePut(e)} name='stock_negativo' checked={articulo.stock_negativo === 0 ? 'true' : "false"} class="form-check-input" type="checkbox" id="inlineFormCheck"></input>
                        <label class="form-check-label" for="inlineFormCheck">
                            Stock Negativo
                        </label>
                    </div>
                </div>
                </div>

                <button style={{ marginRight:'50px', marginTop:'20px',marginBottom:'10px'}} type="button" class="btn btn-light" onClick={(e) => delet(e)} id={articulo.id}>Borrar</button>
                <button style={{ marginLeft:'50px', marginTop:'20px',marginBottom:'10px'}} type="button" class="btn btn-light" onClick={(e) => put(e)} id={articulo.id}>Modificar</button>
                </li>   
            )
        })
    }
    </ul>

</div>)
}

export default Articulo;