import {Link} from 'react-router-dom';
import { useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {postComprobante,restarStockArticulo} from '../../../actions/actions'

function PagoExitoso() 
{
    const dispatch = useDispatch();

    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido)

    let comprobantelocal2 = localStorage.getItem('comprobante'); 
    let comprobantelocal = JSON.parse(comprobantelocal2);
    let comprobante = {
        numero: 3,
        fecha: hoy.toLocaleDateString(),
        estado:'Pagado',
        id_cliente: comprobantelocal.inputs.id_cliente,
        articulo_id: parseInt(comprobantelocal.carrito[0].id),
        cantidad: comprobantelocal.carrito[0].cantidad,
        precio: comprobantelocal.carrito[0].precio_venta,
    }

    // console.log('comprobante pa',comprobante)
    useEffect(() =>{
        dispatch(postComprobante(comprobante));
        dispatch(restarStockArticulo(comprobante));
    },[])

    return (
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

        <h1 class="display-4" style={{marginTop:'150px'}}>Pago Exitoso ✔ </h1>
        </div>
    );
}

export default PagoExitoso;