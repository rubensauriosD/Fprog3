import {Link} from 'react-router-dom';
// import Cards from './Cards/Cards';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect,useState} from 'react';
import {getCarrito} from '../../../../actions/actions'
import axios from 'axios';

function Compra(){
    var carrito = useSelector(state => state.carrito);
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        nombre:'',
        apellido:'',
        codigo:'',
        telefono:'',
        codigoPostal:'',
        calle:'',
        numero:'',
        email:'',
        items: carrito
    })
    

    useEffect(() =>{
        dispatch(getCarrito());
    },[])

    function postmp(e) {
        e.preventDefault();
        axios.post('http://localhost:3001/mp', {inputs,carrito}).then(res => {window.open(res.data)}).catch(err => {console.log(err)})
    }

    function handleChange(e) {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        console.log(inputs)
    }

return(
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

    <div class="container" style={{width:'1000px', marginLeft:'500px', marginTop:'50px'}}>

    <form class="row gy-2 gx-3 align-items-center" onSubmit={(e)=> postmp(e)}>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='nombre' value={inputs.nombre} type="text" class="form-control" id="autoSizingInput" placeholder="Nombre"></input>
        </div>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='apellido' value={inputs.apellido} type="text" class="form-control" id="autoSizingInput" placeholder="Apellido"></input>
        </div>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='codigo' value={inputs.codigo} type="number" class="form-control" id="autoSizingInput" placeholder="Codigo Telefono"></input>
        </div>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='telefono' value={inputs.telefono} type="number" class="form-control" id="autoSizingInput" placeholder="Telefono"></input>
        </div>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='codigoPostal' value={inputs.codigoPostal} type="number" class="form-control" id="autoSizingInput" placeholder="Codigo Postal"></input>
        </div>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='calle' value={inputs.calle} type="text" class="form-control" id="autoSizingInput" placeholder="Calle"></input>
        </div>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='numero' value={inputs.numero} type="text" class="form-control" id="autoSizingInput" placeholder="Numero"></input>
        </div>
        <div class="col-auto">
            <label class="visually-hidden" for="autoSizingInput"></label>
            <input onChange={(e) => handleChange(e)} name='email' value={inputs.email} type="email" class="form-control" id="autoSizingInput" placeholder="Email"></input>
        </div>
    </form>

    <h3 style={{ marginTop:'50px'}}>Carrito</h3>
    <ul class="list-group" style={{ marginTop:'50px'}}>
    {
        carrito.map(item => {
            return(
                <li style={{ color:'black'}} class="list-group-item list-group-item-action list-group-item-primary" >
                
                <div class="input-group">
                <input type="text" class="form-control" id="nombre"    aria-describedby="nombre" name='nombre' value={item.nombre}></input>
                <input type="text" class="form-control" id="precio"    aria-describedby="nombre" name='precio_venta' value={item.precio_venta}></input>
                <input type="text" class="form-control" id="precio"    aria-describedby="nombre" name='cantidad' value={item.cantidad}></input>
                <button class="btn btn-outline-secondary" type="button">+</button>
                <button class="btn btn-outline-secondary" type="button">-</button>
                </div>

                </li>   
            )
        })
    }
    </ul>

    <button type="submit" class="btn btn-primary" style={{marginTop: '40px', marginRight:'30px'}} onClick={(e)=>postmp(e)}>Finalizar compra 💵</button>

    </div>

</div>)
}

export default Compra;