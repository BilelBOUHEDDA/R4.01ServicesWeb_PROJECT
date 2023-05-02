const pool = require("../../config/db")
const queries = require("./queries.js")

const get = (req,res) => {
    pool.query(queries.get, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
}

const post = (req,res) => {
    const {idUser, idType} = req.body;
    // eslint-disable-next-line no-unused-vars
    pool.query(queries.post, [idUser, idType], (error, results) => {
        if(error) throw error
        res.status(200).send("Ticket successfully created")
    })
}

const put = (req,res) => {
    let {idUser, idType} = req.body;
    const id = parseInt(req.params.id)
    pool.query(queries.getById, [id], (error, results) => {
        if(results.rowCount == 0)
            res.status(409).send("Ticket doesn't exist")

        idUser = typeof idUser == 'undefined' ? results.rows[0].iduser : idUser;
        idType = typeof idType == 'undefined' ? results.rows[0].idtype : idType;

        // eslint-disable-next-line no-unused-vars
        pool.query(queries.put, [id, idUser, idType], (error, results) => {
            if(error) throw error
            res.status(200).send("Ticket successfully updated")
        })
    })
}

const del = (req,res) => {
    const id = parseInt(req.params.id)
    // eslint-disable-next-line no-unused-vars
    pool.query(queries.del, [id], (error, results) => {
        if(error) throw error
        res.status(200).send("Ticket successfully deleted")
    })
}

const delRelated = (req,res) => {
    const id = parseInt(req.params.id)
    // eslint-disable-next-line no-unused-vars
    pool.query(queries.delByUser, [id], (error, results) => {
        if(error) throw error
        res.status(200).send("Ticket(s) successfully deleted")
    })
}

module.exports = {
    get,
    post,
    put,
    del,
    delRelated
}