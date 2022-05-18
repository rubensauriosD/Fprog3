const conexion = require('../db/database');

async function getDepartamento (req, res) {
    conexion.query('SELECT * FROM departamento', (err, rows) => {
        if (err) {
            throw err;
        }
        else
        {
            res.json(rows);
            console.log('GET-departamento');
        }
    })
}

async function createDepartamento (req, res) {
    const data = req.body;

    conexion.query('INSERT INTO departamento SET ?',
        [data],(err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('POST-departamento');
            ()=>res.json(data)
        }
    })
}

async function updateDepartamento (req, res) {
    const data = req.body;
    const id = req.params.id;

    conexion.query('UPDATE departamento set ? WHERE id = ?', [data, id],
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('UPDATE-departamento');
        }
    })
}

async function deleteDepartamento (req, res) {
    const id = req.params.id;

    conexion.query('DELETE FROM departamento WHERE id = ?', id,
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('DELETE-departamento');
        }
    })
}


module.exports = {
    getDepartamento,
    createDepartamento,
    updateDepartamento,
    deleteDepartamento
}