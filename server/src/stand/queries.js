const get = "SELECT * FROM stand;"
const getByUser = "SELECT * FROM stand WHERE idUtilisateur=$1;"
const getByIdEmplacement = "SELECT * FROM stand WHERE idEmplacement=$1 AND libelle=$2;"
const getByIdStand = "SELECT * FROM stand WHERE idStand=$1;"
const getByIdUtilisateur = "SELECT * FROM stand WHERE idUtilisateur=$1;"
const post = "INSERT INTO stand (idUtilisateur, idEmplacement, libelle) values ($1,$2,$3);"
const put = "UPDATE stand SET idUtilisateur=$1, idEmplacement=$2, libelle=$3 WHERE idStand = $4;"
const del = "DELETE FROM stand WHERE idStand = $1;"
const delByIdUtilisateur = "DELETE FROM stand WHERE idUtilisateur = $1;"

const getInfo = "SELECT s.libelle, s.idUtilisateur, u.nom AS provider, e.nom AS position FROM stand s INNER JOIN utilisateur u ON u.idUtilisateur=s.idUtilisateur INNER JOIN emplacement e ON e.idEmplacement=s.idEmplacement WHERE s.idStand=$1;"

module.exports = {
    get,
    getByUser,
    getByIdEmplacement,
    getByIdStand,
    getByIdUtilisateur,
    post,
    put,
    del,
    delByIdUtilisateur,

    getInfo
}