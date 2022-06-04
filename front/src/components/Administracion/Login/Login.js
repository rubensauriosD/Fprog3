import { useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import Cookies from 'universal-cookie';
import { getPais, getProvincia, getDepartamento, getLocalidad } from '../../../actions/actions';
import diseño from "./login.css"
const baseUrl = 'http://localhost:3001/usuario';



function Login()
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
    }

    async function iniciarSesion() {
        await axios.get(baseUrl,{params: {usuario:inputs.usuario,contrasena:inputs.contrasena}})
        .then(res => {
            if(inputs.usuario == 'admin' && inputs.contrasena == 'admin'){
                const cookies = new Cookies();
                cookies.set('usuario',res.data[0].usuario,{path:'/'});
                cookies.set('contrasena',res.data[0].contrasena,{path:'/'});
                alert("Bienvenido");
                window.location.href = './admin';
            }
            else{
                alert('Usuario o contraseña incorrectos');
            }
        })
    }

return(
<div style={{width:'1000px', marginLeft:'450px', marginTop:'150px'}}>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12 col-md-4 offset-md-4">

                <h2 id="titIniciar" class="text-center">Iniciar sesión</h2>

                <form id="formulario " class="mt-5 d-grid gap-2">
                    
                    <label class="fw-bold form-label" for="validationServer01">Usuario</label>
                    <input type="text" class="form-control" onChange={(e) => handleChange(e)} id="validationServer01" name='usuario' required maxLength={30}></input>
                    <br></br>

                    <label for="validationServer01" class="form-label fw-bold">Contraseña</label>
                    <input name='contrasena' type="password" class="form-control" onChange={(e) => handleChange(e)} id="validationServer02" required maxLength={12}></input>

                    <button class="btn btn-success btn-lg mt-4" type="submit" onClick={(e) => iniciarSesion(e)}>
                        <Link class="nav-link" to='/admin'></Link>INGRESAR
                    </button>
                </form>

                <hr class="text-white"></hr>

                <b><p>
                    No sos parte de nuestra familia?
                    <Link class="nav-link text-decoration-none" to='/registro'>Registrate aqui</Link>
                </p></b>

            </div>
        </div>
    </div>


    {/* <div class="d-flex">
            <form class="row g-3">
                <div class="col-md-4">
                    <label for="validationServer01" class="form-label">Usuario</label>
                    <input type="text" class="form-control" onChange={(e) => handleChange(e)} id="validationServer01" name='usuario' required></input>
                </div>

                <div class="col-md-4" style={{marginLeft:'335px'}}>
                    <label for="validationServer01" class="form-label">Contraseña</label>
                    <input name='contrasena' type="text" class="form-control" onChange={(e) => handleChange(e)} id="validationServer02"  required></input>
                </div>
                
                <div class="col-12">
                    <button class="btn btn-primary" type="submit" onClick={(e) => iniciarSesion(e)}>
                        <Link class="nav-link" to='/admin'></Link> 
                    </button>
                </div>
            </form>
        </div> */}



    {/* ACA SE HACE EL REGISTRAR */}


    {/* <form class="row gy-2 gx-3 align-items-center" style={{marginTop:'150px'}} onSubmit={(e)=> post(e)}>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='ape_nom' value={inputs.ape_nom} type="text" class="form-control" id="autoSizingInput" placeholder="Apellido y Nombre"></input>
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
            <button type="submit" class="btn btn-primary">Registrarse</button>
        </div>
    </form> */}
</div>
)}

export default Login;