import './App.css';
import { Route } from "react-router-dom";
import Adminitracion from "./components/Administracion/Admin";
import Pais from './components/Administracion/Pais/Pais';

function App() {
  return (
    <div className="App">
      <Route exact path={['/admin','/admin/pais']} component={Adminitracion}></Route>
      <Route exact path='/admin/pais' component={Pais}></Route>
    </div>
  );
}

export default App;
