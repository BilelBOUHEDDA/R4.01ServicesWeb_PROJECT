const pool = require("../../config/db")
const queries = require("./queries.js")


const get = (req,res) => {
    const { email, codeAuth } = req.query
    if (email.includes('@'))
        pool.query(queries.get, [email, codeAuth], (error, results) => {
            if (error) throw error
            else if (results.rowCount > 0) {
                res.status(200).json(results.rows)  
            }
            else {
                res.status(400).send("Error not found")
            }
        })
    else {
        res.status(420).send("Erreur email invalide");
        console.log("Adresse e-mail non valide");
    } 
}

const post = (req,res) => {
    const { nom, email, codeAuth, } = req.body;
    const idType = 1;
    if (email.includes('@'))
        pool.query(queries.getByEmail, [email], (error, results) => {
            if (results.rowCount > 0) {
                return res.status(409).send("User already exist");
            }
            pool.query(queries.post, [nom, email, codeAuth, idType], (error, results) => {
                if (error) throw error
                res.status(200).send("User successfully created")
            })
        })
    else {
        res.status(420).send("Error email invialide")
        console.log("Adresse e-mail non valide");
    }
}





module.exports = {
    get,
    post,

}