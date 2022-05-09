import {useDispatch, useSelector} from 'react-redux'
import { useEffect,useState} from 'react';
import { getDepartamento,getLocalidad } from '../../../actions/actions';
import axios from 'axios'

function Localidad()
{
    const dispatch = useDispatch();
    var localidades = useSelector(state => state.localidad);
    var departamentos = useSelector(state => state.departamento);
    
    const [inputsPut, setInputsPut] = useState({
        nombre:''
    })

    const [inputs, setInputs] = useState({
        nombre:'',
        id_departamento:''
    })

    useEffect(() =>{
        dispatch(getDepartamento());
        dispatch(getLocalidad())
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
        axios.post('http://localhost:3001/localidad', inputs)
        alert(`${inputs.nombre} creado correctamente`)
    }

    function delet(e) {
        e.preventDefault();
        var id = e.target.id;
        axios.delete(`http://localhost:3001/localidad/${id}`, inputs)
        alert(`${inputs.nombre} borrado correctamente`)
    }

    function put(e) {
        e.preventDefault();
        var id = e.target.id;
        axios.put(`http://localhost:3001/localidad/${id}`, inputsPut)
        alert(`${inputsPut.nombre} modificado correctamente`)
    }

return(
<div style={{width:'1000px', marginLeft:'500px', marginTop
    :'50px'}}>
    <form onSubmit={(e)=> post(e)}>
        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input onChange={(e) => handleChange(e)} type="text" class="form-control" id="nombre" aria-describedby="nombre" name='nombre' value={inputs.nombre} required></input>
            <label  style={{marginTop:'25px'}} for="pais" class="form-label">Departamento</label>
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name='id_departamento' onChange={(e) => handleChange(e)} >
            <option selected></option>
            {departamentos.map(departamento => (
                <option key={departamento.id} value={departamento.id}>{departamento.nombre}</option>
            ))}
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
    
    
    <ul class="list-group" style={{ marginTop:'50px'}}>

    {
        localidades.map(localidad => {
            return(
                <li style={{ color:'black'}} class="list-group-item list-group-item-action list-group-item-primary" >
                <div class="input-group">
                <input type="text" class="form-control" id="nombre"    aria-describedby="nombre" name='nombre' placeholder={localidad.nombre} onChange={(e) => handleChangePut(e)}></input>
                <button onClick={(e) => delet(e)} id={localidad.id} class="btn btn-outline-secondary" type="button">Borrar</button>
                <button class="btn btn-outline-secondary" type="button" onClick={(e) => put(e)} id={localidad.id}>Modificar</button>
                </div>
                </li>  
            )
        })
    }
    </ul>

</div>)
}

export default Localidad;