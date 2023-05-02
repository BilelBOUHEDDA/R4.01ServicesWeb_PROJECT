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
        // eslint-disable-next-line no-unused-vars
        pool.query(queries.post, [idUtilisateur, idProvider, horaire, message, jaime], (error) => {
            if(error) throw error
            res.status(200).send("Message successfully created")
        })
    })
}

const put = (req,res) => {
    const {idUtilisateur, idProvider, horaire} = req.body;
    let {message, jaime} = req.body;

    pool.query(queries.getByPk, [idUtilisateur, idProvider, horaire], (error, results) => {
        if(results.rowCount === 0)
            res.status(409).send("Message doesn't exist")

        message = typeof message == 'undefined' ? results.rows[0].message : message;
        jaime = typeof jaime == 'undefined' ? results.rows[0].jaime : jaime;

        // eslint-disable-next-line no-unused-vars
        pool.query(queries.put, [idUtilisateur, idProvider, horaire, message, jaime], (error) => {
            if(error) throw error
            res.status(200).send("Message successfully updated")
        })
    })
}

const del = (req,res) => {
    const {idUtilisateur, idProvider, horaire} = req.body;
    // eslint-disable-next-line no-unused-vars
    pool.query(queries.del, [idUtilisateur, idProvider, horaire], (error) => {
        if(error) throw error
        res.status(200).send("Message successfully deleted")
    })
}

const delUser = (req,res) => {
    const id = parseInt(req.params.id);
    // eslint-disable-next-line no-unused-vars
    pool.query(queries.delByProvider, [id], (error) => {
        if(error) throw error
        res.status(200).send("Message(s) successfully deleted")
    }).then(
        // eslint-disable-next-line no-unused-vars
        pool.query(queries.delByUser, [id], (error) => {
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