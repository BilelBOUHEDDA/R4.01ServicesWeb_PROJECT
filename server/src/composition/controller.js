const pool = require("../../config/db")
const queries = require("./queries.js")

const get = (req,res) => {
    pool.query(queries.get, (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
}

const getJoueur = (req,res) => {
    const idEquipe = req.params.idEquipe;
    pool.query(queries.getPlayersByIdEquipe, [idEquipe], (error, results) => {
        if(error) throw error
        res.status(200).json(results.rows)
    })
}

const post = (req,res) => {
    const {idEquipe, idJoueur, idJeu, pseudo, nationnalite, role} = req.body;
    pool.query(queries.getByPk, [idEquipe, idJoueur, idJeu], (error, results) => {
        if(results.rowCount > 0)
            return res.status(409).send("Player already exist")
        // eslint-disable-next-line no-unused-vars
        pool.query(queries.post, [idEquipe, idJoueur, idJeu, pseudo, nationnalite, role], (error) => {
            if(error) throw error
            res.status(200).send("Player successfully created")
        })
    })
}

const put = (req,res) => {
    let {idEquipe, idJoueur, idJeu, pseudo, nationnalite, role} = req.body;
    pool.query(queries.getByPk, [idEquipe, idJoueur, idJeu], (error, results) => {
        if(results.rowCount === 0)
            res.status(409).send("Player doesn't exist")

        pseudo = typeof pseudo == 'undefined' ? results.rows[0].pseudo : pseudo;
        nationnalite = typeof nationnalite == 'undefined' ? results.rows[0].nationnalite : nationnalite;
        role = typeof role == 'undefined' ? results.rows[0].role : role;

        // eslint-disable-next-line no-unused-vars
        pool.query(queries.put, [idEquipe, idJoueur, idJeu, pseudo, nationnalite, role], (error) => {
            if(error) throw error
            res.status(200).send("Player successfully updated")
        })
    })
}

const del = (req,res) => {
    const {idEquipe, idJoueur, idJeu} = req.body;
    // eslint-disable-next-line no-unused-vars
    pool.query(queries.del, [idEquipe, idJoueur, idJeu], (error) => {
        if(error) throw error
        res.status(200).send("Player successfully deleted")
    })
}

const delEquipe = (req,res) => {
    const idEquipe = req.params.idEquipe;
    // eslint-disable-next-line no-unused-vars
    pool.query(queries.delByEquipe, [idEquipe], (error) => {
        if(error) throw error
        res.status(200).send("Player(s) successfully deleted")
    })
}

const delJoueur = (req,res) => {
    const idJoueur = req.params.idJoueur;
    // eslint-disable-next-line no-unused-vars
    pool.query(queries.delByJoueur, [idJoueur], (error) => {
        if(error) throw error
        res.status(200).send("Player successfully deleted")
    })
}

module.exports = {
    get,
    getJoueur,
    post,
    put,
    del,
    delEquipe,
    delJoueur
}