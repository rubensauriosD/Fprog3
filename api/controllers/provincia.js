const conexion = require('../db/database');

async function getProvincia (req, res) {
    conexion.query('SELECT * FROM provincia', (err, rows) => {
        if (err) {
            throw err;
        }
        else
        {
            res.json(rows);
            console.log('GET-provincia');
        }
    })
}

async function createProvincia (req, res) {
    const data = req.body;

    conexion.query('INSERT INTO provincia SET ?',
        [data],(err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('POST-provincia');
            ()=>res.json(data)
        }
    })
}


async function updateProvincia (req, res) {
    const data = req.body;
    const id = req.params.id;

    conexion.query('UPDATE provincia set ? WHERE id = ?', [data, id],
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('UPDATE-provincia');
        }
    })
}


async function deleteProvincia (req, res) {

    const id = req.params.id;

    conexion.query('DELETE FROM provincia WHERE id = ?', id,
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('DELETE-provincia');
        }
    })

}


module.exports = {
    getProvincia,
    createProvincia,
    updateProvincia,
    deleteProvincia
}