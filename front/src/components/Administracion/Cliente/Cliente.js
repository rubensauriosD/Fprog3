import {useDispatch, useSelector} from 'react-redux'
import { useEffect,useState} from 'react';
import { getPais, getProvincia, getDepartamento, getLocalidad, getCliente } from '../../../actions/actions';
import axios from 'axios'

function Cliente()
{
    const dispatch = useDispatch();
    var clientes = useSelector(state => state.cliente);
    var paises = useSelector(state => state.pais);
    var departamentos = useSelector(state => state.departamento);
    var localidades= useSelector(state => state.localidad);
    var provincias = useSelector(state => state.provincia);
    
    const [inputsPut, setInputsPut] = useState({
        ape_nom:'',
        domicilio:'',
        email:'',
        celular:'',
        estado:'',
        id_pais:'',
        id_provincia:'',
        id_departamento:'',
        id_localidad:''
    })

    const [inputs, setInputs] = useState({
        ape_nom:'',
        domicilio:'',
        email:'',
        celular:'',
        estado:'',
        id_pais:'',
        id_provincia:'',
        id_departamento:'',
        id_localidad:''
    })

    useEffect(() =>{
        dispatch(getPais());
        dispatch(getProvincia());
        dispatch(getDepartamento());
        dispatch(getLocalidad());
        dispatch(getCliente())
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
        axios.post('http://localhost:3001/cliente', inputs)
        alert(`${inputs.nombre} creado correctamente`)
    }

    function delet(e) {
        e.preventDefault();
        var id = e.target.id;
        axios.delete(`http://localhost:3001/cliente/${id}`, inputs)
        alert(`${inputs.nombre} borrado correctamente`)
    }

    function put(e) {
        e.preventDefault();
        var id = e.target.id;
        axios.put(`http://localhost:3001/cliente/${id}`, inputsPut)
        alert(`${inputsPut.nombre} modificado correctamente`)
    }

return(
<div style={{width:'1000px', marginLeft:'500px', marginTop
    :'50px'}}>
    <form class="row gy-2 gx-3 align-items-center" onSubmit={(e)=> post(e)}>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='ape_nombre' value={inputs.ape_nombre} type="text" class="form-control" id="autoSizingInput" placeholder="Apellido y Nombre"></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='domicilio' value={inputs.domicilio} type="text" class="form-control" id="autoSizingInput" placeholder="Domicilio"></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='email' value={inputs.email} type='email' class="form-control" id="autoSizingInput" placeholder="Email"></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='celular' value={inputs.celular} type="number" class="form-control" id="autoSizingInput" placeholder="Celular"></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='estado' value={inputs.estado} type="text" class="form-control" id="autoSizingInput" placeholder="Estado"></input>
        </div>

        <div class="col-auto">
        <select class="form-select" id="inlineFormSelectPref" name='id_pais' onChange={(e) => handleChange(e)}>
        <option selected>Pais...</option>
        {paises.map(pais => (
                <option key={pais.id} value={pais.id}>{pais.nombre}</option>
            ))}
        </select>
        </div>
        
        <div class="col-auto">
        <select class="form-select" id="inlineFormSelectPref" name='id_provincia' onChange={(e) => handleChange(e)}>
        <option selected>Provincia...</option>
        {provincias.map(provincia => (
                <option key={provincia.id} value={provincia.id}>{provincia.nombre}</option>
            ))}
        </select>
        </div>
        
        <div class="col-auto">
        <select class="form-select" id="inlineFormSelectPref" name='id_departamento' onChange={(e) => handleChange(e)}>
        <option selected>Departamento...</option>
        {departamentos.map(departamento => (
                <option key={departamento.id} value={departamento.id}>{departamento.nombre}</option>
            ))}
        </select>
        </div>
        
        <div class="col-auto">
        <select class="form-select" id="inlineFormSelectPref" name='id_departamento' onChange={(e) => handleChange(e)}>
        <option selected>Localidad...</option>
        {localidades.map(localidad => (
                <option key={localidad.id} value={localidad.id}>{localidad.nombre}</option>
            ))}
        </select>
        </div>

        <div>
            <button type="submit" class="btn btn-primary">Guardar</button>
        </div>

</form>

    <ul class="list-group" style={{ marginTop:'50px'}}>
    {
        clientes.map(cliente => {
            return(
                <li style={{ color:'black',marginBottom:'100px'}} class="list-group-item list-group-item-action list-group-item-primary" >

                <div class="col-auto">
                            <label class="visually-hidden" for="autoSizingInput"></label>
                            <input onChange={(e) => handleChangePut(e)} name='ape_nombre' value={inputsPut.ape_nombre} type="text" class="form-control" id="autoSizingInput" placeholder={cliente.ape_nom}></input>
                        </div>

                        <div class="col-auto">
                            <label class="visually-hidden" for="autoSizingInput"></label>
                            <input onChange={(e) => handleChangePut(e)} name='domicilio' value={inputsPut.domicilio} type="text" class="form-control" id="autoSizingInput" placeholder={cliente.domicilio}></input>
                        </div>

                        <div class="col-auto">
                            <label class="visually-hidden" for="autoSizingInput"></label>
                            <input onChange={(e) => handleChangePut(e)} name='email' value={inputsPut.email} type="text" class="form-control" id="autoSizingInput" placeholder={cliente.email}></input>
                        </div>

                        <div class="col-auto">
                            <label class="visually-hidden" for="autoSizingInput"></label>
                            <input onChange={(e) => handleChangePut(e)} name='celular' value={inputsPut.celular} type="text" class="form-control" id="autoSizingInput" placeholder={cliente.celular}></input>
                        </div>

                        <div class="col-auto">
                            <label class="visually-hidden" for="autoSizingInput"></label>
                            <input onChange={(e) => handleChangePut(e)} name='estado' value={inputsPut.estado} type="text" class="form-control" id="autoSizingInput" placeholder={cliente.estado}></input>
                        </div>
                        
                        <div class="col-auto">
                        <select class="form-select" id="inlineFormSelectPref" name='id_pais' onChange={(e) => handleChangePut(e)}>
                        <option selected>Pais...</option>
                        {paises.map(pais => (
                                <option key={pais.id} value={pais.id}>{pais.nombre}</option>
                            ))}
                        </select>
                        </div>
                        
                        <div class="col-auto">
                        <select class="form-select" id="inlineFormSelectPref" name='id_provincia' onChange={(e) => handleChangePut(e)}>
                        <option selected>Provincia...</option>
                        {provincias.map(provincia => (
                                <option key={provincia.id} value={provincia.id}>{provincia.nombre}</option>
                            ))}
                        </select>
                        </div>
                        
                        <div class="col-auto">
                        <select class="form-select" id="inlineFormSelectPref" name='id_departamento' onChange={(e) => handleChangePut(e)}>
                        <option selected>Departamento...</option>
                        {departamentos.map(departamento => (
                                <option key={departamento.id} value={departamento.id}>{departamento.nombre}</option>
                            ))}
                        </select>
                        </div>
                        
                        <div class="col-auto">
                        <select class="form-select" id="inlineFormSelectPref" name='id_departamento' onChange={(e) => handleChangePut(e)}>
                        <option selected>Localidad...</option>
                        {localidades.map(localidad => (
                                <option key={localidad.id} value={localidad.id}>{localidad.nombre}</option>
                            ))}
                        </select>
                        </div>

                <button style={{ marginRight:'50px', marginTop:'20px',marginBottom:'10px'}} type="button" class="btn btn-light" onClick={(e) => delet(e)} id={cliente.id}>Borrar</button>
                <button style={{ marginLeft:'50px', marginTop:'20px',marginBottom:'10px'}} type="button" class="btn btn-light" onClick={(e) => put(e)} id={cliente.id}>Modificar</button>
                </li>   
            )
        })
    }
    </ul>

</div>)
}

export default Cliente;