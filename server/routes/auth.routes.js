const { verifySignUp } = require("../middleware");
const controller = require("../controller/auth.controller");
module.exports = function(app) {

    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/signup",
        /*[
            verifySignUp.checkDuplicateUsername,
        ],*/
        controller.signup
    );
    app.post("/api/login", controller.signin);

};