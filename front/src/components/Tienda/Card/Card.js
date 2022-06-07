import {Link} from 'react-router-dom';
import { useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { generico } from '../../../actions/actions';

function Card({id,nombre,codigo,stock,precio_costo,precio_venta,stock_minimo,stock_negativo,id_tipo_articulo,img}){

    var articulo = {id,nombre,codigo,stock,precio_costo,precio_venta,stock_minimo,stock_negativo,id_tipo_articulo,img}
    const dispatch = useDispatch();

    function postCarrito(params,e) {
        console.log('ESTO ES EL postCarrito',params,e)
        var item = {
            id: params.id,
            nombre: params.nombre,
            precio_venta:params.precio_venta,
            cantidad: 1,
            img: img
        }
        dispatch(generico(item));
        alert('Se agrego al carrito');
    }

    return(

                <div>
                    {
                        console.log('ESTO ES EL CARD',{id,nombre,codigo,stock,precio_costo,precio_venta,stock_minimo,stock_negativo,id_tipo_articulo})
                    }
                    <div class="card ms-2 me-2 mt-5 mb-1" style={{width: '15rem'}}>
                        <img src={img} class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">{nombre}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${precio_venta}</li>
                        </ul>
                        
                        <div class="mt-1 mb-1">
                        {
                            stock_minimo < stock ? <button type="submit" class="btn btn-success" onClick={(e) => postCarrito(articulo,e)}>Guardar en carrito</button> : 
                            
                            <button type="submit" class="btn btn-primary" disabled>No hay stock</button>
                        }
                        {/* <button type="submit" class="btn btn-primary" onClick={(e) => postCarrito(articulo,e)}>Guardar en carrito</button> */}
                        </div>
                    </div>
                </div>  
    )
}

export default Card;