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

                <a class="h3 text-decoration-none text-white">ADMINISTRACION 📋</a>

                <button class="navbar-toggler btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div style={{marginLeft: "100px"}} class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav d-flex justify-content-center">
                        <li class="nav-item">
                            <NavLink class="nav-link text-decoration-none text-white" to='/admin/articulo'>Articulos</NavLink>
                        </li>
                        <li><Link class="nav-link disabled text-decoration-none text-white" >|</Link></li>
                        <li class="nav-item">
                            <NavLink class="nav-link text-decoration-none text-white" to='/admin/tipoArticulo'>Tipo Articulo</NavLink>
                        </li>
                        <li><Link class="nav-link disabled text-decoration-none text-white" >|</Link></li>
                        <li class="nav-item">
                            <NavLink class="nav-link text-decoration-none text-white" to='/admin/cliente'>Cliente</NavLink>
                        </li>
                        <li><Link class="nav-link disabled text-decoration-none text-white" >|</Link></li>
                        <li class="nav-item">
                            <NavLink class="nav-link text-decoration-none text-white" to='/admin/comprobante'>Comprobante</NavLink>
                        </li>
                        <li><Link class="nav-link disabled text-decoration-none text-white" >|</Link></li>
                        <li class="nav-item">
                            <NavLink class="nav-link text-decoration-none text-white" to='/admin/configuracion'>Configuracion</NavLink>
                        </li>
                        <li><Link class="nav-link disabled text-decoration-none text-white" >|</Link></li>
                        <li class="nav-item">
                            <NavLink class="nav-link text-decoration-none text-white" to='/admin/localidad'>Localidad</NavLink>
                        </li>
                        <li><Link class="nav-link disabled text-decoration-none text-white" >|</Link></li>
                        <li class="nav-item">
                            <NavLink class="nav-link text-decoration-none text-white" to='/admin/departamento'>Departamento</NavLink>
                        </li>
                        <li><Link class="nav-link disabled text-decoration-none text-white" >|</Link></li>
                        <li class="nav-item">
                            <NavLink class="nav-link text-decoration-none text-white" to='/admin/provincia'>Provincia</NavLink>
                        </li>
                        <li><Link class="nav-link disabled text-decoration-none text-white" >|</Link></li>
                        <li class="nav-item">
                            <NavLink class="nav-link text-decoration-none text-white" to='/admin/pais'>Pais</NavLink>
                        </li>
                        <li>
                            <button id="cerrarSesion"class="btn btn-warning cerrasSesion" type="submit" onClick={(e) => cerrarSesion(e)}>
                                <i class="fa fa-power-off" aria-hidden="true"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <Link class="btn btn-warning reporte" to='/admin/reportes'>Reportes</Link>
        </nav>
    </header>
)
}

export default Admin;