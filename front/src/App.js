import './App.css';
import { Route } from "react-router-dom";
import Adminitracion from "./components/Administracion/Admin";
import Pais from './components/Administracion/Pais/Pais';
import Provincia from './components/Administracion/Provincia/Provincia';

function App() {
  return (
    <div className="App">
      <Route exact path={['/admin','/admin/pais', '/admin/provincia', '/admin/tipoArticulo', '/admin/localidad','/admin/departamento','/admin/configuracion','/admin/comprobante','/admin/cliente','/admin/articulo']} component={Adminitracion}></Route>
      <Route exact path='/admin/pais' component={Pais}></Route>
      <Route exact path='/admin/provincia' component={Provincia}></Route>
    </div>
  );
}

export default App;
