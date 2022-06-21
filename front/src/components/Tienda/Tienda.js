import {Link, NavLink} from 'react-router-dom';
import Cards from './Cards/Cards';

function Tienda(){

    return(


            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid d-flex justify-content-between" id="navbarNav">
                        <Link class="nav-link text-decoration-none text-white display-6" to='/tienda'>Tienda 💸</Link>
                        <ul class="navbar-nav d-flex justify-content-between">
                            <li class="nav-item">
                                <NavLink class="nav-link h3 text-white display-6" to='/carrito'>Carrito 🛒</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>                

                <div class="d-flex flex-row justify-content-evenly">
                    <Cards/> 
                </div>
            </div>


    )
}

export default Tienda;