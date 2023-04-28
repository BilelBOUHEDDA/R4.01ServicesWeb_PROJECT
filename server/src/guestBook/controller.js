const pool = require("../../config/db")
const queries = require("./queries.js")

const get = (req,res) => {
    pool.query(queries.get, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
}

const post = (req,res) => {
    const {idUtilisateur, idProvider, horaire, message, jaime} = req.body;
    pool.query(queries.getByPk, [idUtilisateur, idProvider, horaire], (error, results) => {
        if(results.rowCount > 0)
            return res.status(409).send("Message already exist")
        pool.query(queries.post, [idUtilisateur, idProvider, horaire, message, jaime], (error, results) => {
            if(error) throw error
            res.status(200).send("Message successfully created")
        })
    })
}

const put = (req,res) => {
    const {idUtilisateur, idProvider, horaire} = req.body;
    let {message, jaime} = req.body;

    pool.query(queries.getByPk, [idUtilisateur, idProvider, horaire], (error, results) => {
        if(results.rowCount == 0)
            res.status(409).send("Message doesn't exist")

        message = typeof message == 'undefined' ? results.rows[0].message : message;
        jaime = typeof jaime == 'undefined' ? results.rows[0].jaime : jaime;

        pool.query(queries.put, [idUtilisateur, idProvider, horaire, message, jaime], (error, results) => {
            if(error) throw error
            res.status(200).send("Message successfully updated")
        })
    })
}

const del = (req,res) => {
    const {idUtilisateur, idProvider, horaire} = req.body;
    pool.query(queries.del, [idUtilisateur, idProvider, horaire], (error, results) => {
        if(error) throw error
        res.status(200).send("Message successfully deleted")
    })
}

const delUser = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.delByProvider, [id], (error, results) => {
        if(error) throw error
        res.status(200).send("Message(s) successfully deleted")
    }).then(
        pool.query(queries.delByUser, [id], (error, results) => {
            if(error) throw error
            res.status(200).send("User can be successfully deleted")
        })
    )
}

module.exports = {
    get,
    post,
    put,
    del,
    delUser,
}