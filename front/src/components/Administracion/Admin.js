import {Link, NavLink} from 'react-router-dom';
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

    <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark align-baseline">
            <div class="container-fluid">

                <a class="h2 text-decoration-none text-white">ADMINISTRACION 📋</a>

                <button class="navbar-toggler btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div style={{marginLeft: "100px"}} class="collapse navbar-collapse" id="navbarNav">
                    <ul style={{display:"flex", justifyContent:"space-evenly"}} class="navbar-nav d-flex justify-content-center">
                        <li class="nav-item">
                            <Link class="nav-link text-decoration-none text-white" to='/admin/articulo'>Articulos</Link>
                        </li>
                        <li><Link class="nav-link disabled text-decoration-none text-white h2" >|</Link></li>
                        <li class="nav-item">
                            <Link class="nav-link text-decoration-none text-white" to='/admin/tipoArticulo'>Tipo Articulo</Link>
                        </li>
                        <li><Link class="nav-link disabled text-decoration-none text-white h2" >|</Link></li>
                        <li class="nav-item">
                            <Link class="nav-link text-decoration-none text-white" to='/admin/cliente'>Cliente</Link>
                        </li>
                        <li><Link class="nav-link disabled text-decoration-none text-white h2" >|</Link></li>
                        <li class="nav-item">
                            <Link class="nav-link text-decoration-none text-white" to='/admin/comprobante'>Comprobante</Link>
                        </li>
                        <li><Link class="nav-link disabled text-decoration-none text-white h2" >|</Link></li>
                        <li class="nav-item">
                            <Link class="nav-link text-decoration-none text-white" to='/admin/configuracion'>Configuracion</Link>
                        </li>
                        <li><Link class="nav-link disabled text-decoration-none text-white h2" >|</Link></li>
                        <li class="nav-item">
                            <Link class="nav-link text-decoration-none text-white" to='/admin/localidad'>Localidad</Link>
                        </li>
                        <li><Link class="nav-link disabled text-decoration-none text-white h2" >|</Link></li>
                        <li class="nav-item">
                            <Link class="nav-link text-decoration-none text-white" to='/admin/departamento'>Departamento</Link>
                        </li>
                        <li><Link class="nav-link disabled text-decoration-none text-white h2" >|</Link></li>
                        <li class="nav-item">
                            <Link class="nav-link text-decoration-none text-white" to='/admin/provincia'>Provincia</Link>
                        </li>
                        <li><Link class="nav-link disabled text-decoration-none text-white h2" >|</Link></li>
                        <li class="nav-item">
                            <Link class="nav-link text-decoration-none text-white" to='/admin/pais'>Pais</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <button style={{marginRight: "0px"}} id="cerrarSesion"class="btn btn-warning cerrasSesion" type="submit" onClick={(e) => cerrarSesion(e)}>
                Cerrar Sesion
            </button>                
            <Link class="btn btn-warning reporte" to='/admin/reportes'>Reportes</Link>
        </nav>
    </header>
)
}

export default Admin;