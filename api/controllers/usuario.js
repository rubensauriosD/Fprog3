const conexion = require('../db/database');

async function getUsuario (req, res) {
    conexion.query('SELECT * FROM usuario', (err, rows) => {
        if (err) {
            throw err;
        }
        else
        {
            res.json(rows);
            console.log('GET-usuario');
        }
    })
}

async function createUsuario (req, res) {
    const data = req.body;

    conexion.query('INSERT INTO usuario SET ?',
        [data],(err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('POST-usuario');
            ()=>res.json(data)
        }
    })
}


async function updateUsuario (req, res) {
    const data = req.body;
    const id = req.params.id;

    conexion.query('UPDATE usuario set ? WHERE id = ?', [data, id],
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('UPDATE-usuario');
        }
    })
}



async function deleteUsuario (req, res) {
    const id = req.params.id;

    conexion.query('DELETE FROM usuario WHERE id = ?', id,
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('DELETE-usuario');
        }
    })
}


module.exports = {
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario
}