import {useDispatch, useSelector} from 'react-redux'
import { useEffect,useState} from 'react';
import {getArticulosFaltantes,reporteTotal,reporteCliente,reporteArticulo,getCliente,getArticulo} from '../../../actions/actions';
import axios from 'axios';

function Reportes(){
    const dispatch = useDispatch();
    const articulosFaltantes = useSelector(state => state.articulosFaltantes);
    const reporteTotales = useSelector(state => state.reporteTotal);
    const reporteClientes = useSelector(state => state.reporteCliente);
    const reporteArticulos = useSelector(state => state.reporteArticulo);
    const clientes = useSelector(state => state.cliente);
    const articulos = useSelector(state => state.articulo);

    var ventasArticulos, ventasClientes, ventasTotales;

    const [inputs, setInputs] = useState({
        fecha:''
    })
    function handleChange(e) {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    } 

    const [inputs2, setInputs2] = useState({
        fecha:'',
        id:''
    })
    function handleChange2(e) {
        setInputs2({
            ...inputs2,
            [e.target.name]: e.target.value
        })
    }

    const [inputs3, setInputs3] = useState({
        fecha:'',
        id:''
    })
    function handleChange3(e) {
        setInputs3({
            ...inputs3,
            [e.target.name]: e.target.value
        })
    } 

    useEffect(() =>{
        dispatch(getArticulosFaltantes());
        dispatch(getCliente());
        dispatch(getArticulo());
    },[])

    async function ventasTotal() 
    {
        const response = await axios.get(`http://localhost:3001/comprobante/sales?fecha=${inputs.fecha}`).then(res => res.data);

        if(response.length > 0)
        {
            ventasTotales = response.map(venta => venta.precio);
            ventasTotales =ventasTotales.reduce((a, b) => a + b);
            dispatch(reporteTotal(ventasTotales));
        }
        else{
            ventasTotales = 0;
            alert('No hay ventas en esa fecha');
            dispatch(reporteTotal(ventasTotales));
        }
        
    }

    async function ventasArticulo() 
    {
        const response = await axios.get(`http://localhost:3001/comprobante/salesArticle?id=${inputs3.id}&fecha=${inputs3.fecha}`).then(res => res.data);
        
        if(response.length > 0)
        {
            ventasArticulos = response.map(venta => venta.precio);
            ventasArticulos = ventasArticulos.reduce((a, b) => a + b);
            dispatch(reporteArticulo(ventasArticulos));
        }
        else{
            ventasArticulos = 0;
            alert('No hay ventas en esa fecha');
            dispatch(reporteArticulo(ventasArticulos));
        }
    }

    async function ventasCliente() 
    {
        const response = await axios.get(`http://localhost:3001/comprobante/salesClient?id=${inputs2.id}&fecha=${inputs2.fecha}`).then(res => res.data);
        
        if(response.length > 0)
        {
            ventasClientes = response.map(venta => venta.precio);
            ventasClientes = ventasClientes.reduce((a, b) => a + b);
            dispatch(reporteCliente(ventasClientes));
        }
        else{
            ventasClientes = 0;
            alert('No hay ventas en esa fecha');
            dispatch(reporteCliente(ventasClientes));
        }
    }

    return(
        
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-4 offset-md-4'>

                    <h1>Reportes</h1>

                    <h3>Ventas Totales</h3>
                    <div class="input-group" style={{ width:'400px'}}>
                        <input type="text" class="form-control" id="fecha"    aria-describedby="fecha" name='fecha' onChange={(e) => handleChange(e)} placeholder='00/00/0000'></input>
                        <button class="btn btn-outline-secondary" type="button" onClick={(e) => ventasTotal(e)}>Reporte</button>
                            
                        <div class="input-group mb-3" style={{ marginTop:'30px'}}>
                            <span class="input-group-text">$</span>
                            <input type="text" class="form-control" value={reporteTotales > 0 ? reporteTotales : 0}></input>
                            <span class="input-group-text">.00</span>
                        </div> 
                    </div>
                        


                    <h3 style={{ marginTop:'50px'}}>Ventas por clientes</h3>
                    <div class="input-group" style={{ width:'400px'}}>
                            
                        <select class="form-select" id="inlineFormSelectPref" name='id' onChange={(e) => handleChange2(e)}>
                            <option selected>Cliente...</option>
                            {clientes.map(c => (
                                    <option key={c.id} value={c.id}>{c.ape_nom}</option>
                                ))}
                        </select>
                            

                        <input type="text" class="form-control" id="fecha"    aria-describedby="fecha" name='fecha' onChange={(e) => handleChange2(e)} placeholder='00/00/0000'></input>
                        <button class="btn btn-outline-secondary" type="button" onClick={(e) => ventasCliente(e)}>Reporte</button>

                        <div class="input-group mb-3" style={{ marginTop:'30px'}}>
                            <span class="input-group-text">$</span>
                            <input type="text" class="form-control" value={reporteClientes > 0 ? reporteClientes : 0}></input>
                            <span class="input-group-text">.00</span>
                        </div>
                    </div>


                    <h3 style={{ marginTop:'50px'}}>Ventas por articulo</h3>
                    <div class="input-group" style={{ width:'400px'}}>
                        <select class="form-select" id="inlineFormSelectPref" name='id' onChange={(e) => handleChange3(e)}>
                            <option selected>Articulos...</option>
                            {articulos.map(c => (
                                    <option key={c.id} value={c.id}>{c.nombre}</option>
                                ))}
                        </select>
                                
                        <input type="text" class="form-control" id="fecha"    aria-describedby="fecha" name='fecha' onChange={(e) => handleChange3(e)} placeholder='00/00/0000'></input>
                        <button class="btn btn-outline-secondary" type="button" onClick={(e) => ventasArticulo(e)}>Reporte</button>

                        <div class="input-group mb-3" style={{ marginTop:'30px'}}>
                            <span class="input-group-text">$</span>
                            <input type="text" class="form-control" value={reporteArticulos > 0 ? reporteArticulos : 0}></input>
                            <span class="input-group-text">.00</span>
                        </div>
                    </div>


                    <h3 style={{ marginTop:'50px'}}> Articulos para reponer</h3>
                    <ul class="list-group" style={{ width:'400px'}}>
                    {
                        articulosFaltantes.map(art => {
                            return(
                                <li style={{ color:'black'}} class="list-group-item list-group-item-action list-group-item-primary" >
                                    <div class="input-group">
                                    <input type="text" class="form-control" id="nombre"    aria-describedby="nombre" name='nombre' value={art.nombre}></input>
                                    <input type="text" class="form-control" id="stock"    aria-describedby="stock" name='stock' value={art.stock}></input>
                                    </div>
                                </li>   
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Reportes;
