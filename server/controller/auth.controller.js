// gère les actions pour s'inscrire et se connecter
const pool = require("../config/db")
const config = require("../config/auth.config");
const queries = require("../src/login/queries");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


exports.signup = (req, res) => {
    // Enregistrer l'utilisateur dans la base de données
    const { nom, email } = req.body;
    const codeAuth = bcrypt.hashSync(req.body.codeAuth, 8)
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
};

exports.signin = (req, res) => {
    console.log(req.body);

    //TODO: à refaire
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
        res.status(420).send("Error email invalide");
        console.log("Adresse e-mail non valide");
    }


//     User.findOne({
//         where: {
//             email: req.body.email
//         }
//     })
//         .then(user => {
//             if (!user) {
//     return res.status(404).send({ message: "Utilisateur non trouvé." });
// }
//     let passwordIsValid = bcrypt.compareSync(
//         req.body.codeAuth,
//         user.codeAuth
//     );
//     if (!passwordIsValid) {
//         return res.status(401).send({
//             accessToken: null,
//             message: "Mot de passe incorrect!"
//         });
//     }
//     let token = jwt.sign({ id: user.idUtilisateur }, config.secret, {
//         expiresIn: 86400 // 24 heures
//     });
//     res.status(200).send({
//         idUtilisateur: user.idUtilisateur,
//         name: user.email,
//         accessToken: token
//     });
//     })
//     .catch(err => {
//         res.status(500).send({ message: err.message });
//     });
};
