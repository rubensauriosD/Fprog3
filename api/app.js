const express = require('express');
const app = express();
const articulo = require('./routes/articulo');
const cliente = require('./routes/cliente');
const comprobante = require('./routes/comprobante');
const configuracion = require('./routes/configuracion');
const departamento = require('./routes/departamento');
const localidad = require('./routes/localidad');
const pais = require('./routes/pais');
const provincia = require('./routes/provincia');
var cors = require('cors');//ESTO SOLUCIONO UN PROBLEMA CON EL CORS

app.use(cors())//ESTO SOLUCIONO UN PROBLEMA CON EL CORS
app.use(express.json());

app.use('/articulo', articulo);
app.use('/cliente', cliente);
app.use('/comprobante', comprobante);
app.use('/configuracion', configuracion);
app.use('/departamento', departamento);
app.use('/localidad', localidad);
app.use('/pais', pais);
app.use('/provincia', provincia);

app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
});//ESTO SOLUCIONO UN PROBLEMA CON EL CORS, CON 2 LINEAS DE ARRIBA MAS


app.listen(3001, () => {
    console.log('Server is running on port 3001');
})