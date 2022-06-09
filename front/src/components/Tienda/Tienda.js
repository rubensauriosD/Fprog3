import {Link} from 'react-router-dom';
import Cards from './Cards/Cards';

function Tienda(){

    return(

    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item navbar-brand ">
                            <Link class="nav-link h2" to='/tienda'>Tienda 💸</Link>
                        </li>
                        <li class="nav-item navbar-brand ">
                            <Link class="nav-link h3" to='/carrito' style={{marginLeft:'1550px'}}>Carrito 🛒</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="col">
            <h1>Tienda</h1>
            <Cards/> 
        </div>

    </div>
    )
}

export default Tienda;