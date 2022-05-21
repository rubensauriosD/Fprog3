const conexion = require('../db/database');

async function getAllComprobante (req, res) {
    conexion.query('SELECT * FROM comprobante', (err, rows) => {
        if (err) {
            throw err;
        }
        else
        {
            res.json(rows);
            console.log('GET-comprobante');
        }
    })
}

async function getAllSales (req, res) 
{
    const fecha = req.query.fecha;

    conexion.query('SELECT * FROM comprobante WHERE fecha = ?', fecha, (err, rows) => {
        if (err) {
            throw err;
        }
        else
        {
            res.json(rows);
            console.log('GET-ventas-totales');
        }
    })
}

async function getAllSalesForArticle (req, res) 
{
    const id = req.query.id;

    conexion.query('SELECT * FROM comprobante WHERE articulo_id = ?', id, (err, rows) => {
        if (err) {
            throw err;
        }
        else
        {
            res.json(rows);
            console.log('GET-ventas-articulo');
        }
    })
}

async function getAllSalesForClient (req, res) 
{
    const id = req.query.id;

    conexion.query('SELECT * FROM comprobante WHERE id_cliente = ?', id, (err, rows) => {
        if (err) {
            throw err;
        }
        else
        {
            res.json(rows);
            console.log('GET-ventas-cliente');
        }
    })
}

async function createComprobante (req, res) {
    const data = req.body;

    conexion.query('INSERT INTO comprobante SET ?',
        [data],(err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('POST-comprobante');
            ()=>res.json(data)
        }
    })
}


async function updateComprobante (req, res) {
    const data = req.body;
    const id = req.params.id;

    conexion.query('UPDATE comprobante set ? WHERE id = ?', [data, id],
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('UPDATE-comprobante');
        }
    })
}

async function deleteComprobante (req, res) {
    const id = req.params.id;

    conexion.query('DELETE FROM comprobante WHERE id = ?', id,
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('DELETE-comprobante');
        }
    })
}


module.exports = {
    getAllComprobante,
    createComprobante,
    updateComprobante,
    deleteComprobante,
    getAllSales,
    getAllSalesForArticle,
    getAllSalesForClient
}