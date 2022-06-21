import {useDispatch, useSelector} from 'react-redux'
import { useEffect,useState} from 'react';
import { getProvincia,getPais } from '../../../actions/actions';
import axios from 'axios'

function Provincia()
{
    const dispatch = useDispatch();
    var provincias = useSelector(state => state.provincia);
    var paises = useSelector(state => state.pais);
    
    const [inputsPut, setInputsPut] = useState({
        nombre:''
    })

    const [inputs, setInputs] = useState({
        nombre:'',
        id_pais:''
    })

    useEffect(() =>{
        dispatch(getProvincia());
        dispatch(getPais())
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
        axios.post('http://localhost:3001/provincia', inputs)
        alert(`${inputs.nombre} creado correctamente`)
    }

    function delet(e) {
        e.preventDefault();
        var id = e.target.id;
        axios.delete(`http://localhost:3001/provincia/${id}`, inputs)
        alert(`${inputs.nombre} borrado correctamente`)
    }

    function put(e) {
        e.preventDefault();
        var id = e.target.id;
        axios.put(`http://localhost:3001/provincia/${id}`, inputsPut)
        alert(`${inputsPut.nombre} modificado correctamente`)
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <form onSubmit={(e)=> post(e)} className="d-grid gap-2">
                        <div class="mb-3">
                            <label for="nombre" class="form-label text-white">NOMBRE</label>
                            <input onChange={(e) => handleChange(e)} type="text" class="form-control" id="nombre" aria-describedby="nombre" name='nombre' value={inputs.nombre} required></input>
                            <label  style={{marginTop:'25px'}} for="pais" class="form-label text-white">PAIS</label>
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name='id_pais' onChange={(e) => handleChange(e)} >
                                <option selected></option>
                                {paises.map(pais => (
                                    <option key={pais.id} value={pais.id}>{pais.nombre}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit" class="btn btn-success">Guardar</button>
                    </form>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <ul class="list-group" style={{ marginTop:'50px'}}>
                    {
                        provincias.map(provincia => {
                            return(
                                <li style={{ color:'black'}} class="list-group-item list-group-item-action list-group-item-primary mb-2" >
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="nombre"    aria-describedby="nombre" name='nombre' placeholder={provincia.nombre} onChange={(e) => handleChangePut(e)}></input>
                                        <button onClick={(e) => delet(e)} id={provincia.id} class="btn btn-danger" type="button">Borrar</button>
                                        <button class="btn btn-warning" type="button" onClick={(e) => put(e)} id={provincia.id}>Modificar</button>
                                    </div>
                                </li>   
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Provincia;