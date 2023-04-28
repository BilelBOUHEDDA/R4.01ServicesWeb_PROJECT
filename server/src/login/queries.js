const get = "SELECT idutilisateur, nom, email, idType FROM utilisateur WHERE email = $1 AND codeAuth = $2"
const post = "INSERT INTO utilisateur (nom, email, codeAuth,idType) values ($1,$2,$3,$4);"
const getByEmail = "SELECT * FROM utilisateur WHERE email=$1;"
const getPasswordByEmail = "SELECT codeAuth FROM utilisateur WHERE email = $1;"



module.exports = {
    getPasswordByEmail,
    getByEmail: 'SELECT * FROM users WHERE email = $1',
    post: 'INSERT INTO users (nom, email, codeAuth, idType) VALUES ($1, $2, $3, $4)',
    get: 'SELECT * FROM users WHERE email = $1 AND codeAuth = $2',
    getById: 'SELECT * FROM users WHERE id = $1',
    getByGoogleId: 'SELECT * FROM users WHERE googleId = $1',
    postGoogleUser: 'INSERT INTO users (nom, email, googleId) VALUES ($1, $2, $3) RETURNING *'
}