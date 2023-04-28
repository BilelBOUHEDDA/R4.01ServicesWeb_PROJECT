const pool = require("../../config/db")
const queries = require("./queries.js")

const get = (req,res) => {
    pool.query(queries.get, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
}

const post = (req,res) => {
    const {libelle, nbStock, idStand, prix} = req.body;
    pool.query(queries.getByStand, [libelle, idStand], (error, results) => {
        if(results.rowCount > 0)
            return res.status(409).send("Stock already exist")
        pool.query(queries.post, [libelle, nbStock, idStand, prix], (error, results) => {
            if(error) throw error
            res.status(200).send("Stock successfully created")
        })
    })
}

const put = (req,res) => {
    let {libelle, nbStock, idStand, prix} = req.body;
    const id = parseInt(req.params.id)
    pool.query(queries.getById, [id], (error, results) => {
        if(results.rowCount == 0)
            res.status(409).send("Stock doesn't exist")

        libelle = typeof libelle == 'undefined' ? results.rows[0].libelle : libelle;
        nbStock = typeof nbStock == 'undefined' ? results.rows[0].nbstock : nbStock;
        idStand = typeof idStand == 'undefined' ? results.rows[0].idstand : idStand;
        prix = typeof prix == 'undefined' ? results.rows[0].prix : prix;

        pool.query(queries.put, [libelle, nbStock, idStand, prix, id], (error, results) => {
            if(error) throw error
            res.status(200).send("Stock successfully updated")
        })
    })
}

const del = (req,res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.del, [id], (error, results) => {
        if(error) throw error
        res.status(200).send("Stock successfully deleted")
    })
}

const delRelated = (req,res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.delByIdStand, [id], (error, results) => {
        if(error) throw error
        res.status(200).send("Stock successfully deleted")
    })
}

module.exports = {
    get,
    post,
    put,
    del,
    delRelated
}