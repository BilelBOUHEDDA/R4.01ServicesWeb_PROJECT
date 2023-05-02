const controller = require("./controller")

module.exports = async (fastify) => {
    fastify.get("", controller.get);
    fastify.post("", controller.post);
    fastify.delete("", controller.del);
    fastify.delete("/user/:id", controller.delRelated);
}