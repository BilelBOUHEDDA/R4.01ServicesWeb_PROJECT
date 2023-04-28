const express = require("express")
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUI = require("swagger-ui-express")
const { User, Team, GuestBook, Jeu, Rencontre, Stand, Stock, Dedicace, Compo, Billet, Login } = require("./src/index")
const cors = require('cors')

// Ajouter les clés API ici
const GOOGLE_CLIENT_ID = '659700673717-e4hqjta37mv8netrqssiisoe1sk5vdab.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';


const app = express()
const port = 3000
app.use(cors({
    origin: ['https://localhost:8080']
}))

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello")
})

/** Swagger Initialization - START */
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
        info: {
            title: "lion e-sport",
            description: "API documentation",
            contact: {
                name: "Arian5",
            },
            servers: ["http://localhost:3000/"],
        },
    }),
    apis: ["server.js", "./server/src/*/routes.js"],
}

const swaggerDocs = swaggerJsdoc(swaggerOption);

const passport = require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

// Google auth routes
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('https://localhost:8080/'); 
});


app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs))
app.use("/api/users", User)
app.use("/api/teams", Team)
app.use("/api/tickets", Billet)
app.use("/api/guestBooks", GuestBook)
app.use("/api/jeux", Jeu)
app.use("/api/rencontres", Rencontre)
app.use("/api/dedicaces", Dedicace)
app.use("/api/compositions", Compo)
app.use("/api/stands", Stand)
app.use("/api/stocks", Stock)

// Routes d'authentification
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.listen(port, () => console.log(`app listening on port ${port}`))
