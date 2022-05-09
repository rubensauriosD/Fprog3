import {useDispatch, useSelector} from 'react-redux'
import { useEffect,useState} from 'react';
import { getPais, getProvincia, getDepartamento, getLocalidad, getConfiguracion } from '../../../actions/actions';
import axios from 'axios'

function Configuracion()
{
    const dispatch = useDispatch();
    var configuraciones = useSelector(state => state.configuracion);
    var paises = useSelector(state => state.pais);
    var departamentos = useSelector(state => state.departamento);
    var localidades= useSelector(state => state.localidad);
    var provincias = useSelector(state => state.provincia);
    
    const [inputsPut, setInputsPut] = useState({
        codigo_admin:'',
        demo:'',
        ultimo_numero_comprobante:'',
        usa_decimal:'',
        localidad_default:'',
        departamento_default:'',
        provincia_default:'',
        pais_default:'',
        id_pais:'',
        id_provincia:'',
        id_departamento:'',
        id_localidad:''
    })

    const [inputs, setInputs] = useState({
        codigo_admin:'',
        demo:'',
        ultimo_numero_comprobante:'',
        usa_decimal:'',
        localidad_default:'',
        departamento_default:'',
        provincia_default:'',
        pais_default:'',
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
        dispatch(getConfiguracion())
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

return(
<div style={{width:'1000px', marginLeft:'500px', marginTop
    :'50px'}}>
    <form class="row gy-2 gx-3 align-items-center" onSubmit={(e)=> post(e)}>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='codigo_admin' value={inputs.codigo_admin} type="text" class="form-control" id="autoSizingInput" placeholder="Codigo Admin"></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='demo' value={inputs.demo} type="text" class="form-control" id="autoSizingInput" placeholder="Demo"></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='ultimo_numero_comprobante' value={inputs.ultimo_numero_comprobante} type="number" class="form-control" id="autoSizingInput" placeholder="Ultimo numero comprobante"></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='usa_decimal' value={inputs.usa_decimal} type="number" class="form-control" id="autoSizingInput" placeholder="Usa Decimal"></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='localidad_default' value={inputs.localidad_default} type="text" class="form-control" id="autoSizingInput" placeholder="Localidad Default"></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='departamento_default' value={inputs.departamento_default} type="text" class="form-control" id="autoSizingInput" placeholder="Departamento Default"></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='provincia_default' value={inputs.provincia_default} type="text" class="form-control" id="autoSizingInput" placeholder="Provincia Default"></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='provincia_default' value={inputs.provincia_default} type="text" class="form-control" id="autoSizingInput" placeholder="Pais Default"></input>
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
        configuraciones.map(configuracion => {
            return(
                <li style={{ color:'black',marginBottom:'100px'}} class="list-group-item list-group-item-action list-group-item-primary" >

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChangePut(e)} name='codigo_admin' value={inputsPut.codigo_admin} type="text" class="form-control" id="autoSizingInput" placeholder={configuracion.codigo_admin}></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChangePut(e)} name='demo' value={inputsPut.demo} type="text" class="form-control" id="autoSizingInput" placeholder={configuracion.demo}></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChangePut(e)} name='ultimo_numero_comprobante' value={inputsPut.ultimo_numero_comprobante} type="number" class="form-control" id="autoSizingInput" placeholder={configuracion.ultimo_numero_comprobante}></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChangePut(e)} name='usa_decimal' value={inputsPut.usa_decimal} type="number" class="form-control" id="autoSizingInput" placeholder={configuracion.usa_decimal}></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChangePut(e)} name='localidad_default' value={inputsPut.localidad_default} type="text" class="form-control" id="autoSizingInput" placeholder={configuracion.localidad_default}></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChangePut(e)} name='departamento_default' value={inputsPut.departamento_default} type="text" class="form-control" id="autoSizingInput" placeholder={configuracion.departamento_default}></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChangePut(e)} name='provincia_default' value={inputsPut.provincia_default} type="text" class="form-control" id="autoSizingInput" placeholder={configuracion.provincia_default}></input>
        </div>

        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChangePut(e)} name='provincia_default' value={inputsPut.provincia_default} type="text" class="form-control" id="autoSizingInput" placeholder={configuracion.provincia_default}></input>
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

        <button style={{ marginRight:'50px', marginTop:'20px',marginBottom:'10px'}} type="button" class="btn btn-light" onClick={(e) => delet(e)} id={configuracion.id}>Borrar</button>
        <button style={{ marginLeft:'50px', marginTop:'20px',marginBottom:'10px'}} type="button" class="btn btn-light" onClick={(e) => put(e)} id={configuracion.id}>Modificar</button>
        </li>   
        )
    })
}
    </ul>
</div>)
}

export default Configuracion;