const pool = require("../../config/db")
const queries = require("./queries.js")
const compo = require("../composition/queries")
const match = require("../rencontre/queries")

const get = (req,res) => {
    pool.query(queries.get, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
}

const getEquipe = (req,res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getById, [id], (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
}

const post = (req,res) => {
    const {nom} = req.body;
    pool.query(queries.getByNom, [nom], (error, results) => {
        if(results.rowCount > 0)
            return res.status(409).send("Team already exist")
        pool.query(queries.post, [nom], (error, results) => {
            if(error) throw error
            res.status(200).send("Team successfully created")
        })
    })
}

const put = (req,res) => {
    let {nom, enLice} = req.body;
    const id = parseInt(req.params.id)
    pool.query(queries.getById, [id], (error, results) => {
        if(results.rowCount == 0)
            res.status(409).send("Team doesn't exist")

        nom = typeof nom == 'undefined' ? results.rows[0].nom : nom;
        enLice = typeof enLice == 'undefined' ? results.rows[0].enlice : enLice;

        pool.query(queries.put, [nom, enLice, id], (error, results) => {
            if(error) throw error
            res.status(200).send("Team successfully updated")
        })
    })
}

const del = (req,res) => {
    const id = parseInt(req.params.id)
    pool.query(match.getByEquipe, [id], (error, results) => {
        if(results.rowCount > 0)
            res.status(409).send("Can't delet this team as a match planed")
        pool.query(compo.getByIdEquipe, [id], (error, results) => {
            if(results.rowCount > 0)
                res.status(409).send("Can't delet this team as player(s) linked")
            pool.query(queries.del, [id], (error, results) => {
                if(error) throw error
                res.status(200).send("Team successfully deleted")
            })
        })
    })
    
}

module.exports = {
    get,
    getEquipe,
    post,
    put,
    del
}