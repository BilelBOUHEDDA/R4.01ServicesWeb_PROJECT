const pool = require("../../config/db")
const queries = require("./queries.js")
const stock = require("../vend/queries")

const get = (req,res) => {
    pool.query(queries.get, (error, results) => {
        if(error) throw error
        res.locals.data = results.rows;
        res.status(200).json(results.rows)
    })
}

const getInfo = (req,res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getInfo, [id], (error, results) => {
        if(error) throw error
        res.locals.data = results.rows;
        res.status(200).json(results.rows)
    })
}

const post = (req,res) => {
    const {idUtilisateur, idEmplacement, libelle} = req.body;
    pool.query(queries.getByIdEmplacement, [idEmplacement, libelle], (error, results) => {
        if(results.rowCount > 0)
            return res.status(409).send("Stand already exist")
        pool.query(queries.post, [idUtilisateur, idEmplacement, libelle], (error, results) => {
            if(error) throw error
            res.status(200).send("Stand successfully created")
        })
    })
}

const put = (req,res) => {
    let {idUtilisateur, idEmplacement, libelle} = req.body;
    const id = parseInt(req.params.id)
    pool.query(queries.getByIdStand, [id], (error, results) => {
        if(results.rowCount == 0)
            res.status(409).send("Stand doesn't exist")

        idUtilisateur = typeof idUtilisateur == 'undefined' ? results.rows[0].idutilisateur : idUtilisateur;
        idEmplacement = typeof idEmplacement == 'undefined' ? results.rows[0].idemplacement : idEmplacement;
        libelle = typeof libelle == 'undefined' ? results.rows[0].libelle : libelle;

        pool.query(queries.put, [idUtilisateur, idEmplacement, libelle, id], (error, results) => {
            if(error) throw error
            res.status(200).send("Stand successfully updated")
        })
    })
}

const del = (req,res) => {
    const id = parseInt(req.params.id)
    pool.query(stock.getByIdStand, [id], (error, results) => {
        if(results.rowCount > 0)
            return res.status(409).send("Stand as a stock to delet first")
        pool.query(queries.del, [id], (error, results) => {
            if(error) throw error
            res.status(200).send("Stand successfully deleted")
        })
    })
    
}

const delRelated = (req,res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.delByIdUtilisateur, [id], (error, results) => {
        if(error) throw error
        res.status(200).send("Stand(s) successfully deleted")
    })
}

module.exports = {
    get,
    getInfo,
    post,
    put,
    del,
    delRelated
}