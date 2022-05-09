import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect,useState} from 'react';
import {getCarrito} from '../../../../actions/actions'
import Card from '../Card/Card';

function Cards(){
    var carrito = useSelector(state => state.carrito);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getCarrito());
    },[])

    
return(
    <div style={{width:'18rem', marginLeft:'500px', marginTop
    :'50px'}}>
        {
            console.log('ESTO ES EL CARDs de Carrito',carrito)
        }
        {
            carrito?.map((carrito,i) => {
                return <Card
                key={i}
                id={carrito.id}
                nombre={carrito.nombre}
                codigo={carrito.codigo}
                stock={carrito.stock}
                precio_costo={carrito.precio_costo}
                precio_venta={carrito.precio_venta}
                stock_minimo={carrito.stock_minimo}
                stock_negativo={carrito.stock_negativo}
                id_tipo_articulo={carrito.id_tipo_articulo}
                img={carrito.img}/>
            })
        }
    </div>)
}

export default Cards;