const get = "SELECT * FROM vend;"
const getById = "SELECT * FROM vend WHERE idStock=$1;"
const getByStand = "SELECT * FROM vend WHERE libelle=$1 AND idStand=$2;"
const getByIdStand = "SELECT * FROM vend WHERE idStand=$1;"
const post = "INSERT INTO vend (libelle, nbStock, idStand, prix) values ($1,$2,$3,$4);"
const put = "UPDATE vend SET libelle=$1, nbStock=$2, idStand=$3, prix=$4 WHERE idStock = $5;"
const del = "DELETE FROM vend WHERE idStock = $1;"
const delByIdStand = "DELETE FROM vend WHERE idStand = $1;"


module.exports = {
    get,
    getByStand,
    getByIdStand,
    getById,
    post,
    put,
    del,
    delByIdStand
}