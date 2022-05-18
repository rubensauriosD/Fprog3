const conexion = require('../db/database');

async function getPais (req, res) {
    conexion.query('SELECT * FROM pais', (err, rows) => {
        if (err) {
            throw err;
        }
        else
        {
            res.json(rows);
            console.log('GET-pais');
        }
    })
}

async function createPais (req, res) {
    const data = req.body;

    conexion.query('INSERT INTO pais SET ?',
        [data],(err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('POST-pais');
            ()=>res.json(data)
        }
    })
}

async function updatePais (req, res) {
    const data = req.body;
    const id = req.params.id;

    conexion.query('UPDATE pais set ? WHERE id = ?', [data, id],
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('UPDATE-pais');
        }
    })
}

async function deletePais (req, res) {
    const id = req.params.id;

    conexion.query('DELETE FROM pais WHERE id = ?', id,
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('DELETE-pais');
        }
    })
}


module.exports = {
    getPais,
    createPais,
    updatePais,
    deletePais
}