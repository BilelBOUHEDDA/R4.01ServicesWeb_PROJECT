const pool = require("../../config/db")
const queries = require("./queries.js")
// eslint-disable-next-line no-unused-vars
require("../composition/queries");
const get = (req,res) => {
    pool.query(queries.get, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
}

const post = (req,res) => {
    const {nom} = req.body;
    pool.query(queries.getByNom, [nom], (error, results) => {
        if(results.rowCount > 0)
            return res.status(409).send("Game already exist")
        // eslint-disable-next-line no-unused-vars
        pool.query(queries.post, [nom], (error) => {
            if(error) throw error
            res.status(200).send("Game successfully created")
        })
    })
}

const put = (req,res) => {
    let {nom} = req.body;
    const id = parseInt(req.params.id)
    pool.query(queries.getById, [id], (error, results) => {
        if(results.rowCount === 0)
            res.status(409).send("Game doesn't exist")

        // nom = typeof nom == 'undefined' ? results.rows[0].nom : nom;
        // eslint-disable-next-line no-unused-vars
        pool.query(queries.put, [nom, id], (error) => {
            if(error) throw error
            res.status(200).send("Game successfully updated")
        })
    })
}

module.exports = {
    get,
    post,
    put
}