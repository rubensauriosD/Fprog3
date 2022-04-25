import {useDispatch, useSelector} from 'react-redux'
import { useEffect,useState} from 'react';
import { getPais } from '../../../actions/actions';

function Pais()
{
    const dispatch = useDispatch();
    var pais = useSelector(state => state.pais);

    useEffect(() =>{
        dispatch(getPais());
    },[])

return(<div>
    <form style={{width:'1000px', marginLeft:'500px', marginTop
    :'50px'}}>
        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nombre"    aria-describedby="nombre" name='nombre'></input>
        </div>
        <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
    {
        
    }
</div>)
}

export default Pais;