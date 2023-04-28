const pool = require("../../config/db")
const queries = require("./queries.js")

const get = (req,res) => {
    pool.query(queries.get, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
}

const post = (req,res) => {
    const {idUtilisateur, idProvider, horaire} = req.body;
    pool.query(queries.getByPk, [idUtilisateur, idProvider, horaire], (error, results) => {
        if(results.rowCount > 0)
            return res.status(409).send("Dedication already exist")
        pool.query(queries.post, [idUtilisateur, idProvider, horaire], (error, results) => {
            if(error) throw error
            res.status(200).send("Dedication successfully created")
        })
    })
}

const del = (req,res) => {
    const {idUtilisateur, idProvider, horaire} = req.body;
    pool.query(queries.del, [idUtilisateur, idProvider, horaire], (error, results) => {
        if(error) throw error
        res.status(200).send("Dedication successfully deleted")
    })
}

const delRelated = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.del, [id], (error, results) => {
        if(error) throw error
        res.status(200).send("Dedication(s) successfully deleted")
    })
}

module.exports = {
    get,
    post,
    del,
    delRelated
}