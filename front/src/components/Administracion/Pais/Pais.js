import {useDispatch, useSelector} from 'react-redux'
import { useEffect,useState} from 'react';
import { getPais } from '../../../actions/actions';
import axios from 'axios'

function Pais()
{
    const dispatch = useDispatch();
    var paises = useSelector(state => state.pais);
    const [inputsPut, setInputsPut] = useState({
        nombre:''
    })

    const [inputs, setInputs] = useState({
        nombre:''
    })

    useEffect(() =>{
        dispatch(getPais());
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
        axios.post('http://localhost:3001/pais', inputs)
        alert(`${inputs.nombre} creado correctamente`)
        window.location.href = "./pais"
    }

    function delet(e) {
        e.preventDefault();
        var id = e.target.id;
        axios.delete(`http://localhost:3001/pais/${id}`, inputs)
        alert(`${inputs.nombre} borrado correctamente`)
        window.location.href = "./pais"
    }

    function put(e) {
        e.preventDefault();
        var id = e.target.id;
        axios.put(`http://localhost:3001/pais/${id}`, inputsPut)
        alert(`${inputsPut.nombre}  modificado correctamente`)
        window.location.href = "./pais"
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <form onSubmit={(e)=> post(e)} className="d-grid gap-2"> 
                        <div class="mb-3">
                            <label for="nombre" class="form-label text-white">NOMBRE</label>
                            <input onChange={(e) => handleChange(e)} type="text" class="form-control" id="nombre" aria-describedby="nombre" name='nombre' value={inputs.nombre} required></input>
                        </div>
                        <button type="submit" class="btn btn-success">Guardar</button>
                    </form>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-6'>
                    <ul class="list-group" style={{ marginTop:'50px'}}>
                    {
                        paises.map(pais => {
                            return(
                                <li style={{ color:'black'}} class="list-group-item list-group-item-action list-group-item-primary mb-2" >                              
                                    <div class="input-group">
                                        <input type="text" class="form-control" id="nombre"aria-describedby="nombre" name='nombre' placeholder={pais.nombre} onChange={(e) => handleChangePut(e)}></input>
                                        <button onClick={(e) => delet(e)} id={pais.id} class="btn btn-danger" type="button">Borrar</button>
                                        <button class="btn btn-warning" type="button" onClick={(e) => put(e)} id={pais.id}>Modificar</button>
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

export default Pais;