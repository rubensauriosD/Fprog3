import { useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import Cookies from 'universal-cookie';
import { getPais, getProvincia, getDepartamento, getLocalidad } from '../../../actions/actions';
import Estilos from "./login.css"
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
                window.location.href = './admin';
                alert("Bienvenido");
            }
            else{
                alert('Usuario o contraseña incorrectos');
            }
        })
    }

return(


    <div class="container" style={{marginTop:'12rem'}}>
        <div class="row">
            <div class="col-12 col-md-4 offset-md-4">

                <h2 id="titIniciar" class="text-center">Iniciar sesión</h2>

                <form id="formulario " class="mt-5 d-grid gap-2">
                    
                    <label class="fw-bold text-black form-label" for="validationServer01">Usuario</label>
                    <input type="text" class="form-control" onChange={(e) => handleChange(e)} id="validationServer01" name='usuario' required maxLength={30}></input>

                    <br></br>

                    <label for="validationServer01" class="form-label fw-bold text-black">Contraseña</label>
                    <input name='contrasena' type="password" class="form-control" onChange={(e) => handleChange(e)} id="validationServer02" required maxLength={12}></input>

                    <button class="btn btn-success btn-lg mt-4" type="submit" onClick={(e) => iniciarSesion(e)}>
                        {/* <Link class="nav-link" to='/admin'></Link> */} INGRESAR 
                    </button>

                </form>

                <hr class="text-white"></hr>

                <b><p class="text-black text-center">
                    No sos parte de nuestra familia?
                    <Link class="nav-link text-black" to='/registro'>Registrate aqui</Link>
                </p></b>

            </div>
        </div>
    </div>

)}

export default Login;