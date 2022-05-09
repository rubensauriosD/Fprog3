import { useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
const baseUrl = 'http://localhost:3001/usuario';


function Login()
{
    const [inputs, setInputs] = useState({
        usuario:'',
        contrasena:''
    })

    function handleChange(e) {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    } 

    async function iniciarSesion() {
        await axios.get(baseUrl,{params: {usuario:inputs.usuario,contrasena:inputs.contrasena}})
        .then(res => {
            if(inputs.usuario == 'admin' && inputs.contrasena == 'admin'){
                const cookies = new Cookies();
                cookies.set('usuario',res.data[0].usuario,{path:'/'});
                cookies.set('contrasena',res.data[0].contrasena,{path:'/'});
                alert('Bienvenido');
                window.location.href = './admin';
            }
            else{
                alert('Usuario o contraseña incorrectos');
            }
        })
    }

return(
<div style={{width:'1000px', marginLeft:'450px', marginTop:'350px'}}>

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
            {/* <Link class="nav-link" to='/admin'></Link> */}
            Ingresar
        </button>
    </div>
    </form>

</div>
)}

export default Login;