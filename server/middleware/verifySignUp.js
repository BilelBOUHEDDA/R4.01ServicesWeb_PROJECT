const db = require("../config/db")
const User = db.user;

// Vérifier si l'email existe déjà
// eslint-disable-next-line no-undef
checkDuplicateUsername = (req, res, next) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Échoué! Nom d'utilisateur est déjà utilisé!"
            });
            return;
        }
        next();
    });
};
const verifySignUp = {
    // eslint-disable-next-line no-undef
    checkDuplicateUsername: checkDuplicateUsername
};
module.exports = verifySignUp;