const get = "SELECT * FROM joueur_equipe;"
const getByPk = "SELECT * FROM joueur_equipe WHERE idEquipe=$1 AND idJoueur=$2 AND idJeu=$3;"
const getByIdJeu = "SELECT * FROM joueur_equipe WHERE idJeu=$1;"
const getByIdJoueur = "SELECT * FROM joueur_equipe WHERE idJoueur=$1;"
const getByIdEquipe = "SELECT * FROM joueur_equipe WHERE idEquipe=$1;"
const post = "INSERT INTO joueur_equipe (idEquipe, idJoueur, idJeu, pseudo, nationnalite, role) values ($1, $2, $3, $4, $5, $6);"
const put = "UPDATE joueur_equipe SET pseudo=$4, nationnalite=$5, role=$6 WHERE idEquipe=$1 AND idJoueur=$2 AND idJeu=$3;"
const del = "DELETE FROM joueur_equipe WHERE idEquipe=$1 AND idJoueur=$2 AND idJeu=$3;"
const delByJoueur = "DELETE FROM joueur_equipe WHERE idJoueur=$1;"
const delByEquipe = "DELETE FROM joueur_equipe WHERE idEquipe=$1"

const getPlayersByIdEquipe = "SELECT * FROM joueur_equipe je INNER JOIN utilisateur u ON je.idJoueur=u.idUtilisateur WHERE idEquipe=$1;"

module.exports = {
    get,
    getByPk,
    getByIdJeu,
    getByIdJoueur,
    getByIdEquipe,
    post,
    put,
    del,
    delByJoueur,
    delByEquipe,

    getPlayersByIdEquipe
}