import {Link} from 'react-router-dom';
// import { useEffect,useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux'
// import { generico } from '../../../actions/actions';

function Card({cantidad,nombre,img,precio_venta}){

    // var articulo = {id,nombre,codigo,stock,precio_costo,precio_venta,stock_minimo,stock_negativo,id_tipo_articulo,img}
    // const dispatch = useDispatch();

    // function postCarrito(params,e) {
    //     console.log('ESTO ES EL postCarrito',params,e)
    //     dispatch(generico(params));
    //     alert('Se agrego al carrito');
    // }

    return(
    <div>
            <div class="card" style={{width: '18rem'}}>
            <img src={img} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{nombre}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${precio_venta}</li>
            </ul>
            {/* <div>
            <button type="submit" class="btn btn-primary" style={{marginRight: '50px'}}>+</button>
            <button type="submit" class="btn btn-primary" style={{marginLeft: '50px'}}>-</button>
            </div> */}
                            <div class="input-group">
                <input type="text" class="form-control" id="nombre"    aria-describedby="nombre" name='nombre'></input>
                <button class="btn btn-outline-secondary" type="button" style={{marginRight: '70px'}}>+</button>
                <button class="btn btn-outline-secondary" type="button" style={{marginRight: '80px'}} >-</button>
                
                </div>
        </div>
</div>)
}

export default Card;