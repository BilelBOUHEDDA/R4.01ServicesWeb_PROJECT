const get = "SELECT * FROM dedicace;"
const getByUser = "SELECT * FROM dedicace WHERE idUtilisateur=$1 OR idProvider=$1;"
const getByPk = "SELECT * FROM dedicace WHERE idUtilisateur=$1 AND idProvider=$2 AND horaire=$3;"
const post = "INSERT INTO dedicace (idUtilisateur, idProvider, horaire) values ($1,$2,$3);"
const del = "DELETE FROM dedicace WHERE idUtilisateur=$1 AND idProvider=$2 AND horaire=$3;"
const delByUser = "DELETE FROM dedicace WHERE idUtilisateur=$1 OR idProvider=$1;"


module.exports = {
    get,
    getByUser,
    getByPk,
    post,
    del,
    delByUser
}