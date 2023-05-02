const pool = require("../../config/db")
const queries = require("./queries.js")

const get = (req,res) => {
    pool.query(queries.get, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
}

const getUser = (req, res) => {
    const id = parseInt(req.params.id)
         pool.query(queries.getById, [id], (error, results) => {
             if (error) throw error
             else if (results.rowCount > 0) {
                 res.status(200).json(results.rows)
             
             }
             else {
                 res.status(400).send("Error not found")
             }
         })
 }

const getGuesBook = (req,res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getGuesBook, [id],(error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
}

const post = (req,res) => {
    const {nom, email, codePostal, codeAuth, idType} = req.body;
    pool.query(queries.getByEmail, [email], (error, results) => {
        if(results.rowCount > 0)
            return res.status(409).send("User already exist")
        // eslint-disable-next-line no-unused-vars
        pool.query(queries.post, [nom, email, codePostal, codeAuth, idType], (error) => {
            if(error) throw error
            res.status(200).send("User successfully created")
        })
    })
}

const put = (req,res) => {
    let {nom, email, codePostal, codeAuth} = req.body;
    const id = parseInt(req.params.id)
    pool.query(queries.getById, [id], (error, results) => {
        if(results.rowCount === 0)
            res.status(409).send("User doesn't exist")

        nom = typeof nom == 'undefined' ? results.rows[0].nom : nom;
        email = typeof email == 'undefined' ? results.rows[0].email : email;
        codePostal = typeof codePostal == 'undefined' ? results.rows[0].codepostal : codePostal;
        codeAuth = typeof codeAuth == 'undefined' ? results.rows[0].codeauth : codeAuth;

        // eslint-disable-next-line no-unused-vars
        pool.query(queries.put, [nom, email, codePostal, codeAuth, id], (error) => {
            if(error) throw error
            res.status(200).send("User successfully updated")
        })
    })
}

const del = (req,res) => {
    const id = parseInt(req.params.id)
    // eslint-disable-next-line no-unused-vars
    pool.query(queries.del, [id], (error) => {
        if(error) return res.status(409).send("User can't be deleted because he's usefull")
        res.status(200).send("User successfully deleted")
    })
}

module.exports = {
    get,
    getGuesBook,
    getUser,
    post,
    put,
    del
}