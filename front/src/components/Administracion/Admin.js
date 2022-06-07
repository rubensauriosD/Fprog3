import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useEffect } from 'react';
import estilo from "./admin.css"

const cookies = new Cookies();

function Admin(){
    console.log('usuario' + cookies.get('usuario'));
    console.log('contrasena' + cookies.get('contrasena'));

    useEffect(() => {
        if(!cookies.get('usuario')){
            window.location.href = './';
        }
    });

    function cerrarSesion() {
        cookies.remove('usuario',{path:'/'});
        cookies.remove('contrasena',{path:'/'});
        window.location.href = 'http://localhost:3000/';
    }

    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item navbar-brand ">
                            <Link class="nav-link h2" to='/admin'>Administracion 📋</Link>
                            </li>
                            <li class="nav-item navbar-brand">
                            <Link class="nav-link">|</Link>
                            </li>
                            <li class="nav-item navbar-brand">
                            <Link class="nav-link" to='/admin/articulo'>Articulos</Link>
                            </li>
                            <li class="nav-item navbar-brand">
                            <Link class="nav-link disabled" >|</Link>
                            </li>
                            <li class="nav-item navbar-brand">
                            <Link class="nav-link" to='/admin/tipoArticulo'>Tipo de Articulo</Link>
                            </li>
                            <li class="nav-item navbar-brand ">
                            <Link class="nav-link disabled" >|</Link>
                            </li>
                            <li class="nav-item navbar-brand">
                            <Link class="nav-link" to='/admin/cliente'>Cliente</Link>
                            </li>
                            <li class="nav-item navbar-brand">
                            <Link class="nav-link disabled" >|</Link>
                            </li>
                            <li class="nav-item navbar-brand">
                            <Link class="nav-link" to='/admin/comprobante'>Comprobante</Link>
                            </li>
                            <li class="nav-item navbar-brand">
                            <Link class="nav-link disabled" >|</Link>
                            </li>
                            <li class="nav-item navbar-brand">
                            <Link class="nav-link" to='/admin/configuracion'>Configuracion</Link>
                            </li>
                            <li class="nav-item navbar-brand">
                            <Link class="nav-link disabled" >|</Link>
                            </li>
                            <li class="nav-item navbar-brand">
                            <Link class="nav-link" to='/admin/localidad'>Localidad</Link>
                            </li>

                            <li class="nav-item navbar-brand">
                            <Link class="nav-link disabled" >|</Link>
                            </li>
                            <li class="nav-item navbar-brand">
                            <Link class="nav-link" to='/admin/departamento'>Departamento</Link>
                            </li>
                            <li class="nav-item navbar-brand">
                            <Link class="nav-link disabled" >|</Link>
                            </li>
                            <li class="nav-item navbar-brand">
                            <Link class="nav-link" to='/admin/provincia' >Provincia</Link>
                            </li>
                            <li class="nav-item navbar-brand">
                            <Link class="nav-link disabled" >|</Link>
                            </li>
                            <li class="nav-item navbar-brand">
                            <Link class="nav-link" to='/admin/pais'>Pais</Link>
                            </li>
                            
                            <li class="nav-item navbar-brand " style={{marginTop:'10px'}}>
                                <button class="btn btn-warning" type="submit" onClick={(e) => cerrarSesion(e)}>
                                Cerrar Sesion
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    
            <Link class="btn btn-warning reporte text-center" to='/admin/reportes'>Reportes</Link>

        </div>
)
}

export default Admin;