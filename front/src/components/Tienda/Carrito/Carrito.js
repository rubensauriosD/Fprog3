import {Link} from 'react-router-dom';
import Cards from './Cards/Cards';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect,useState} from 'react';
import {getCarrito, vaciarCarrito} from '../../../actions/actions'

function Carrito(){
    const dispatch = useDispatch();
    var carrito = useSelector(state => state.carrito);

    useEffect(() =>{
        dispatch(getCarrito());
    },[])

    function borrarCarrito(e) {
        dispatch(vaciarCarrito())
    }

return(
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

        <div class="container">
            <Cards/> 
            <Link class="btn btn-primary" to='/compra' style={{marginTop: '40px', marginLeft:'30px'}}>Comprar</Link>
            <button type="submit" class="btn btn-primary"  style={{marginTop: '40px', marginLeft:'30px'}} onClick={(e) => borrarCarrito(e)}>Vaciar Carrito</button>
        </div>

    </div>)
}

export default Carrito;