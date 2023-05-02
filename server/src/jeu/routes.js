const controller = require("./controller")

module.exports = async (fastify) => {
    fastify.get("", controller.get);
    fastify.post("", controller.post);
    fastify.put("/:id", controller.put);
}