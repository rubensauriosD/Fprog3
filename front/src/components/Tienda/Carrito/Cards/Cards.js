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
                nombre={carrito.nombre}
                cantidad={carrito.cantidad}
                precio_venta={carrito.precio_venta}
                img={carrito.img}/>
            })
        }
    </div>)
}

export default Cards;