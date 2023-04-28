const get = "SELECT * FROM equipe;"
const getById = "SELECT * FROM equipe WHERE idEquipe=$1;"
const getByNom = "SELECT * FROM equipe WHERE nom=$1;"
const post = "INSERT INTO equipe (nom, enLice) values ($1,true);"
const put = "UPDATE equipe SET nom=$1, enLice=$2 WHERE  idEquipe = $3;"
const del = "DELETE FROM equipe WHERE idEquipe = $1;"


module.exports = {
    get,
    getById,
    getByNom,
    post,
    put,
    del
}