const get = "SELECT * FROM utilisateur;"
const getByEmail = "SELECT * FROM utilisateur WHERE email=$1;"
const getById = "SELECT * FROM utilisateur WHERE idUtilisateur=$1;"
const post = "INSERT INTO utilisateur (nom, email, codePostal, codeAuth, idType) values ($1,$2,$3,$4,$5);"
const put = "UPDATE utilisateur SET nom=$1, email=$2, codePostal=$3, codeAuth=$4 WHERE  idUtilisateur = $5;"
const del = "DELETE FROM utilisateur WHERE idUtilisateur = $1;"

const getGuesBook = "SELECT * FROM utilisateur u INNER JOIN guestBook g ON u.idUtilisateur=g.idUtilisateur WHERE g.idProvider=$1;"
const getProvider = "SELECT u.nom FROM utilisateur u INNER JOIN typeUtilisateur t ON u.idType=t.idType WHERE NOT(t.idType=1);"

module.exports = {
    get,
    getByEmail,
    getById,
    post,
    put,
    del,

    getGuesBook,
    getProvider
}