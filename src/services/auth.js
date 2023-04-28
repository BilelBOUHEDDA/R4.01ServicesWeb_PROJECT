const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

const app = express();
app.use(bodyParser.json());

const users = [];

// Enregistrement d'un user
app.post('/auth/signup', async (req, res) => {
    const { name, codeAuth } = req.body; // si password = codeAuth

    // Cryptez le MDP
    const hashedPassword = await bcrypt.hash(codeAuth, 10);

    // Créez un nouvel user -> nom d'user -> mot de passe crypté
    const newUser = {
        name,
        codeAuth: hashedPassword,
    };

    // Ajout utilisateur
    users.push(newUser);

    // Réponse succès
    res.status(201).json({ message: 'Utilisateur enregistré avec succès.' });
});

// Connexion d'un user
app.post('/auth/signin', async (req, res) => {
    const { name, codeAuth } = req.body;

    // MDP OK ?
    const passwordMatches = await bcrypt.compare(codeAuth, user.codeAuth);
    if (!passwordMatches) {
        return res.status(401).json({ message: 'Mot de passe incorrect.' });
    }

    // Génération d'un token
    const token = jwt.sign({ name }, 'secret');

    // Réponse du token
    res.json({ token });
});


module.exports = router;
