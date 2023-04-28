const get = "SELECT * FROM rencontre;"
const getByPk = "SELECT * FROM rencontre WHERE idEmplacement=$1 AND idEquipeA=$2 AND idEquipeB=$3 AND horaire=$4;"
const getByEquipe = "SELECT * FROM rencontre WHERE idEquipeA=$1 OR idEquipeB=$1;"
const post = "INSERT INTO rencontre (idEmplacement, idEquipeA, idEquipeB, horaire) values ($1,$2,$3,$4);"
const del = "DELETE FROM rencontre WHERE idEmplacement=$1 AND idEquipeA=$2 AND idEquipeB=$3 AND horaire=$4;"
const delByEquipe = "DELETE FROM rencontre WHERE idEquipeA=$1 OR idEquipeB=$1;"

const getPlanning = "SELECT e1.nom AS equipeA, e2.nom AS equipeB, e.nom AS salle, r.horaire FROM rencontre r INNER JOIN equipe e1 ON r.idEquipeA=e1.idEquipe INNER JOIN equipe e2 ON r.idEquipeB=e2.idEquipe INNER JOIN emplacement e ON r.idEmplacement=e.idEmplacement;"

module.exports = {
    get,
    getByPk,
    getByEquipe,
    post,
    del,
    delByEquipe,

    getPlanning
}