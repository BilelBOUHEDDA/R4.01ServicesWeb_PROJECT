const get = "SELECT * FROM guestBook;"
const getByPk = "SELECT * FROM guestBook WHERE idUtilisateur=$1 AND idProvider=$2 AND horaire=$3;"
const getByUser = "SELECT * FROM guestBook WHERE idUtilisateur=$1;"
const getByProvider = "SELECT * FROM guestBook WHERE idProvider=$1;"
const post = "INSERT INTO guestBook (idUtilisateur, idProvider, horaire, message, jaime) values ($1,$2,$3,$4,$5);"
const put = "UPDATE guestBook SET message=$4, jaime=$5 WHERE  idUtilisateur=$1 AND idProvider=$2 AND horaire=$3;"
const del = "DELETE FROM guestBook WHERE idUtilisateur=$1 AND idProvider=$2 AND horaire=$3;"
const delByProvider = "DELETE FROM guestBook WHERE idProvider=$1;"
const delByUser = "UPDATE guestBook SET idUtilisateur=NULL WHERE idUtilisateur=$1;"


module.exports = {
    get,
    getByPk,
    getByUser,
    getByProvider,
    post,
    put,
    del,
    delByProvider,
    delByUser
}