import './App.css';
import { Route } from "react-router-dom";
import Adminitracion from "./components/Administracion/Admin";
import Pais from './components/Administracion/Pais/Pais';
import Provincia from './components/Administracion/Provincia/Provincia';
import Localidad from './components/Administracion/Localidad/Localidad';
import Departamento from './components/Administracion/Departamento/Departamento';
import TipoArticulo from './components/Administracion/TipoArticulo/TipoArticulo';
import Articulo from './components/Administracion/Articulo/Articulo';
import Cliente from './components/Administracion/Cliente/Cliente';
import Configuracion from './components/Administracion/Configuracion/Configuracion';
import Comprobante from './components/Administracion/Comprobante/Comprobante';
import Login from './components/Administracion/Login/Login';
import Tienda from './components/Tienda/Tienda';
import Carrito from './components/Tienda/Carrito/Carrito';
import Compra from './components/Tienda/Carrito/Compra/Compra';
import PagoExitoso from './components/Tienda/Pago/PagoExitoso';
import PagoFallido from './components/Tienda/Pago/PagoFallido';
import PagoPendiente from './components/Tienda/Pago/PagoPendiente';
import Inicio from './inicio';

function App() {
  return (
    <div className="App">
      <Route exact path={['/admin','/admin/pais', '/admin/provincia', '/admin/tipoArticulo', '/admin/localidad','/admin/departamento','/admin/configuracion','/admin/comprobante','/admin/cliente','/admin/articulo']} component={Adminitracion}></Route>

      <Route exact path='/admin/pais' component={Pais}></Route>
      <Route exact path='/admin/provincia' component={Provincia}></Route>
      <Route exact path='/admin/localidad' component={Localidad}></Route>
      <Route exact path='/admin/departamento' component={Departamento}></Route>
      <Route exact path='/admin/tipoArticulo' component={TipoArticulo}></Route>
      <Route exact path='/admin/articulo' component={Articulo}></Route>
      <Route exact path='/admin/cliente' component={Cliente}></Route>
      <Route exact path='/admin/configuracion' component={Configuracion}></Route>
      <Route exact path='/admin/comprobante' component={Comprobante}></Route>

        {/* <Route exact path='/login' component={Login}></Route> */}
      <Route exact path='/tienda' component={Tienda}></Route>
      <Route exact path='/carrito' component={Carrito}></Route>
      <Route exact path='/compra' component={Compra}></Route>

      <Route exact path='/pagoexitoso' component={PagoExitoso}></Route>
      <Route exact path='/pagofallido' component={PagoFallido}></Route>
      <Route exact path='/pagopendiente' component={PagoPendiente}></Route>
      <Route exact path='/' component={Login}></Route>
    </div>
  );
}

export default App;
