const pool = require("../../config/db")
const queries = require("./queries.js")

const get = (req,res) => {
    pool.query(queries.get, (error, results) => {
        if(error) throw error
        res.locals.data = results.rows;
        res.status(200).json(results.rows)
    })
}

const getPlanning = (req,res) => {
    pool.query(queries.getPlanning, (error, results) => {
        if(error) throw error
        res.locals.data = results.rows;
        res.status(200).json(results.rows)
    })
}

const post = (req,res) => {
    const {idEmplacement, idEquipeA, idEquipeB, horaire} = req.body;
    pool.query(queries.getByPk, [idEmplacement, idEquipeA, idEquipeB, horaire], (error, results) => {
        if(results.rowCount > 0)
            return res.status(409).send("Match already exist")
        pool.query(queries.post, [idEmplacement, idEquipeA, idEquipeB, horaire], (error, results) => {
            if(error) throw error
            res.status(200).send("Match successfully created")
        })
    })
}

const del = (req,res) => {
    const {idEmplacement, idEquipeA, idEquipeB, horaire} = req.body;
    pool.query(queries.del, [idEmplacement, idEquipeA, idEquipeB, horaire], (error, results) => {
        if(error) throw error
        res.status(200).send("Match successfully deleted")
    })
}

const delRelated = (req,res) => {
    const idEquipe = req.params.idTeam;
    pool.query(queries.delByEquipe, [idEquipe], (error, results) => {
        if(error) throw error
        res.status(200).send("Match(s) successfully deleted")
    })
}

module.exports = {
    get,
    getPlanning,
    post,
    del,
    delRelated
}