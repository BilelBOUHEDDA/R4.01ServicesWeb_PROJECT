const pool = require("../../config/db")
const queries = require("./queries.js")
const queriesCompo = require("../composition/queries")

const get = (req,res) => {
    pool.query(queries.get, (error, results) => {
        if(error) throw error
        res.locals.data = results.rows;
        res.status(200).json(results.rows)
    })
}

const post = (req,res) => {
    const {nom} = req.body;
    pool.query(queries.getByNom, [nom], (error, results) => {
        if(results.rowCount > 0)
            return res.status(409).send("Game already exist")
        pool.query(queries.post, [nom], (error, results) => {
            if(error) throw error
            res.status(200).send("Game successfully created")
        })
    })
}

const put = (req,res) => {
    let {nom} = req.body;
    const id = parseInt(req.params.id)
    pool.query(queries.getById, [id], (error, results) => {
        if(results.rowCount == 0)
            res.status(409).send("Game doesn't exist")

        // nom = typeof nom == 'undefined' ? results.rows[0].nom : nom;
        pool.query(queries.put, [nom, id], (error, results) => {
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