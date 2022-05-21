const conexion = require('../db/database');

async function getAllArticles (req, res) {

    conexion.query('SELECT * FROM articulo', (err, rows) => {
        if (err) {
            throw err;
        }
        else
        {
            res.json(rows);
            console.log('GET-articulo');
        }
    })

}

async function getArticlesMissing (req, res) {

    conexion.query('SELECT * FROM articulo WHERE stock <= stock_minimo', (err, rows) => {
        if (err) {
            throw err;
        }
        else
        {
            res.json(rows);
            console.log('GET-articulo-faltantes');
        }
    })

}

async function createArticle (req, res) {
    const data = req.body;

    conexion.query('INSERT INTO articulo SET ?',
        [data],(err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('POST-articulo');
            ()=>res.json(data)
        }
    })
}

async function updateArticle (req, res) {
    const data = req.body;
    const id = req.params.id;

    conexion.query('UPDATE articulo set ? WHERE id = ?', [data, id],
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('UPDATE-articulo');
        }
    })
}


async function deleteArticle (req, res) {
    const id = req.params.id;

    conexion.query('DELETE FROM articulo WHERE id = ?', id,
        (err, res) => {
        if (err) {
            throw err;
        }
        else
        {
            console.log('DELETE-articulo');
        }
    })
}

module.exports = {
    getAllArticles,
    createArticle,
    updateArticle,
    deleteArticle,
    getArticlesMissing
}