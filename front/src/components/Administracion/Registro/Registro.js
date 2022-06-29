import { useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import Cookies from 'universal-cookie';
import { getPais, getProvincia, getDepartamento, getLocalidad } from '../../../actions/actions';
import Estilos from "../Registro/registro.css"

const baseUrl = 'http://localhost:3001/usuario';



function Registro()
{
    // const [inputs, setInputs] = useState({
    //     usuario:'',
    //     contrasena:''
    // })

    const dispatch = useDispatch();
    var paises = useSelector(state => state.pais);
    var departamentos = useSelector(state => state.departamento);
    var localidades= useSelector(state => state.localidad);
    var provincias = useSelector(state => state.provincia);

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
    },[])

    function handleChange(e) {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    } 

    function post(e) {
        e.preventDefault();
        axios.post('http://localhost:3001/cliente', inputs)
        alert(`${inputs.ape_nom} creado correctamente`)
        window.location.href = './';
    }

return(
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-4 offset-md-4">

                <h2 id="titIniciar" class="text-center mt-5 mb-5">Registrate!</h2>

                <form class="row gy-2 gx-3 align-items-center"  onSubmit={(e)=> post(e)}>

                    <label class="visually-hidden" for="autoSizingInput"></label>
                    <input onChange={(e) => handleChange(e)} name='ape_nom' value={inputs.ape_nom} type="text" class="form-control mb-2" id="autoSizingInput" placeholder="Apellido y Nombre" required maxLength={40}></input>

                    <label class="visually-hidden" for="autoSizingInput"></label>
                    <input onChange={(e) => handleChange(e)} name='domicilio' value={inputs.domicilio} type="text" class="form-control  mb-2" id="autoSizingInput" placeholder="Domicilio" required maxLength={30}></input>

                    <label class="visually-hidden" for="autoSizingInput"></label>
                    <input onChange={(e) => handleChange(e)} name='email' value={inputs.email} type='email' class="form-control  mb-2" id="autoSizingInput" placeholder="Email" required></input>

                    <label class="visually-hidden" for="autoSizingInput"></label>
                    <input onChange={(e) => handleChange(e)} name='celular' value={inputs.celular} type="number" class="form-control  mb-2" id="autoSizingInput" placeholder="Celular" required maxLength={30}></input>

                    {/* <label class="visually-hidden" for="autoSizingInput"></label>
                    <input onChange={(e) => handleChange(e)} name='estado' value={inputs.estado} type="text" class="form-control mb-2" id="autoSizingInput" placeholder="Estado" required maxLength={25}></input> */}

                    <select class="form-select mb-2" id="inlineFormSelectPref" name='id_pais' required onChange={(e) => handleChange(e)}>
                        <option selected>Pais...</option>
                            {paises.map(pais => (
                                <option key={pais.id} value={pais.id}>{pais.nombre}</option>
                            ))}
                    </select>

                    <select class="form-select mb-2" id="inlineFormSelectPref" name='id_provincia' required onChange={(e) => handleChange(e)}>
                        <option selected>Provincia...</option>
                            {provincias.map(provincia => (
                                <option key={provincia.id} value={provincia.id}>{provincia.nombre}</option>
                            ))}
                    </select>

                    <select class="form-select mb-2" id="inlineFormSelectPref" name='id_departamento' required onChange={(e) => handleChange(e)}>
                            <option selected>Departamento...</option>
                            {departamentos.map(departamento => (
                                <option key={departamento.id} value={departamento.id}>{departamento.nombre}</option>
                                ))}
                    </select>

                    <select class="form-select mb-3" id="inlineFormSelectPref" name='id_departamento' required onChange={(e) => handleChange(e)}>
                        <option selected>Localidad...</option>
                            {localidades.map(localidad => (
                                    <option key={localidad.id} value={localidad.id}>{localidad.nombre}</option>
                                ))}
                    </select>

                    <hr class="text-white"></hr>

                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-success btn-lg">Registrarse</button>
                    </div>

                </form>

            </div>
        </div>
    </div>
)}

export default Registro