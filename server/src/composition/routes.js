const controller = require("./controller")

// eslint-disable-next-line no-unused-vars
module.exports = async (fastify) => {
    fastify.get("", controller.get);
    fastify.get("/equipes/:idEquipe", controller.getJoueur);
    fastify.post("", controller.post);
    fastify.put("/", controller.put);
    fastify.delete("", controller.del);
    fastify.delete("/teams/:idEquipe", controller.delEquipe);
    fastify.delete("/players/:idJoueur", controller.delJoueur);
}