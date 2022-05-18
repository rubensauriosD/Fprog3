const conexion = require('../db/database');


async function getAllClientes (req, res) {
    conexion.query('SELECT * FROM cliente', (err, rows) => {
        if (err) {
            throw err;
        }
        else
        {
            res.json(rows);
            console.log('GET-cliente');
        }
    })
}

async function getClienteId (req, res) {

    const id = req.params.id;

    conexion.query('SELECT * FROM cliente WHERE id = ?', id,
    (err, rows) => {
        if(err) {
            throw err;
        }
        else
        {
            res.json(rows);
            console.log('GET-cliente')
        }
    })
}

async function createCliente (req, res) {
    const data = req.body;

    conexion.query('INSERT INTO cliente SET ?',
        [data],(err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('POST-cliente');
            ()=>res.json(data)
        }
    })
}

async function updateCliente (req, res) {
    const data = req.body;
    const id = req.params.id;

    conexion.query('UPDATE cliente set ? WHERE id = ?', [data, id],
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('UPDATE-cliente');
        }
    })
}


async function deleteCliente (req, res) {
    const id = req.params.id;

    conexion.query('DELETE FROM cliente WHERE id = ?', id,
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('DELETE-cliente');
        }
    })
}


module.exports = {
    getAllClientes,
    getClienteId,
    createCliente,
    updateCliente,
    deleteCliente
}