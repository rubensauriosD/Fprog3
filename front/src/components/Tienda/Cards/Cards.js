import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect,useState} from 'react';
import {getArticulo} from '../../../actions/actions'
import Card from '../Card/Card';

function Cards(){
    var articulos = useSelector(state => state.articulo);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getArticulo());
    },[])

    
return(
    <div style={{width:'18rem', marginLeft:'500px', marginTop
    :'50px'}}>
        {
            console.log('ESTO ES EL CARDs',articulos)
        }
        {
            articulos?.map((articulo,i) => {
                return <Card
                key={i}
                id={articulo.id}
                nombre={articulo.nombre}
                codigo={articulo.codigo}
                stock={articulo.stock}
                precio_costo={articulo.precio_costo}
                precio_venta={articulo.precio_venta}
                stock_minimo={articulo.stock_minimo}
                stock_negativo={articulo.stock_negativo}
                id_tipo_articulo={articulo.id_tipo_articulo}
                img={articulo.img}/>
            })
        }
    </div>)
}

export default Cards;