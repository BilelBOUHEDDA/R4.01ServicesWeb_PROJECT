const get = "SELECT * FROM billet;"
const getById = "SELECT * FROM billet WHERE idBillet=$1;"
const getByUser = "SELECT * FROM billet WHERE idUtilisateur=$1;"
const post = "INSERT INTO billet (idUtilisateur, idType, nbBillet) values ($1, $2, $3);"
const put = "UPDATE billet SET idUtilisateur=$2, idType=$3 WHERE idBillet = $1;"
const del = "DELETE FROM billet WHERE idBillet = $1;"
const delByUser = "DELETE FROM billet WHERE idUtilisateur=$1;"


module.exports = {
    get,
    getById,
    getByUser,
    post,
    put,
    del,
    delByUser
}