const conexion = require('../db/database');

async function getAllComprobanteDetalle (req, res) {
    conexion.query('SELECT * FROM comprobante_detalle', (err, rows) => {
        if (err) {
            throw err;
        }
        else
        {
            res.json(rows);
            console.log('GET-comprobante_detalle');
        }
    })
}

async function createComprobanteDetalle (req, res) {
    const data = req.body;

    conexion.query('INSERT INTO comprobante_detalle SET ?',
        [data],(err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('POST-comprobante_detalle');
            ()=>res.json(data)
        }
    })
}

async function updateComprobanteDetalle (req, res) {
    const data = req.body;
    const id = req.params.id;

    conexion.query('UPDATE comprobante_detalle set ? WHERE id = ?', [data, id],
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('UPDATE-comprobante_detalle');
        }
    })
}


async function deleteComprobanteDetalle (req, res) {
    const id = req.params.id;

    conexion.query('DELETE FROM comprobante_detalle WHERE id = ?', id,
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('DELETE-comprobante_detalle');
        }
    })
}


module.exports = {
    getAllComprobanteDetalle,
    createComprobanteDetalle,
    updateComprobanteDetalle,
    deleteComprobanteDetalle
}