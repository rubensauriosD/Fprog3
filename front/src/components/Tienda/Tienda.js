import {Link, NavLink} from 'react-router-dom';
import Cards from './Cards/Cards';

function Tienda(){

    return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid d-flex justify-content-between" id="navbarNav">
                        <Link class="nav-link text-decoration-none text-white display-6" to='/'>Tienda 💸</Link>
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

                <b style={{position: "fixed",
    bottom: "15px",
    right: "15px",
    width: "200px",
    zIndex: "2",
    fontSize: "30px"}}>
                <Link class="nav-link text-black" to='/registro'>Registrate aqui</Link>
               </b>
            </div>
    )
}

export default Tienda;