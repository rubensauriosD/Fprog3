import {Link} from 'react-router-dom';

function PagoPendiente() {
    return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item navbar-brand ">
                    <Link class="nav-link h2" to='/'>Tienda 💸</Link>
                </li>
                <li class="nav-item navbar-brand ">
                    <Link class="nav-link h3" to='/carrito' style={{marginLeft:'1550px'}}>Carrito 🛒</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>

        <h1 class="display-4" style={{marginTop:'150px'}}>Pago Pendiente 🔄</h1>

    </div>
    );
}

export default PagoPendiente;
