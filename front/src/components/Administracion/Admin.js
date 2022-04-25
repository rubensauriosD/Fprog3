import {Link} from 'react-router-dom';

function Admin(){
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
                <Link class="nav-link" to='/admin/articulos'>Articulos</Link>
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
                <Link class="nav-link" to='/admin/comprobantes'>Comprobantes</Link>
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
                <Link class="nav-link" to='/admin/departamento'>Departamento</Link>
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
                <Link class="nav-link" to='/admin/provincia' >Provincia</Link>
                </li>
                <li class="nav-item navbar-brand">
                <Link class="nav-link disabled" >|</Link>
                </li>
                <li class="nav-item navbar-brand">
                <Link class="nav-link" to='/admin/pais'>Pais</Link>
                </li>
                <li class="nav-item navbar-brand">
                <Link class="nav-link disabled" >|</Link>
                </li>
                <li class="nav-item navbar-brand">
                <Link class="nav-link" to='/admin/tipoArticulo'>Tipo de Articulo</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</div>)
}

export default Admin;