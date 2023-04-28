const get = "SELECT * FROM jeu;"
const getById = "SELECT * FROM jeu WHERE idJeu=$1;"
const getByNom = "SELECT * FROM jeu WHERE nom=$1;"
const post = "INSERT INTO jeu (nom) values ($1);"
const put = "UPDATE jeu SET nom=$1 WHERE  idJeu = $2;"


module.exports = {
    get,
    getById,
    post,
    put
}