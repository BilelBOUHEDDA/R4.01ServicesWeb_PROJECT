const { Router } = require("express")
const User = require("./user/routes")
const Team = require("./team/routes")
const Billet = require("./billet/routes")
const GuestBook = require("./guestBook/routes")
const Jeu = require("./jeu/routes")
const Rencontre = require("./rencontre/routes")
const Dedicace = require("./dedicace/routes")
const Compo = require("./composition/routes")
const Stand = require("./stand/routes")
const Stock = require("./vend/routes")
const Login = require("./login/routes")

//const api = Router();
//api.use("/user",User);

module.exports = {
    User,
    Team,
    Billet,
    GuestBook,
    Jeu,
    Rencontre,
    Dedicace,
    Compo,
    Stand,
    Stock,
    Login
}