const controller = require("./controller")

module.exports = async (fastify) => {
    fastify.get("", controller.get);
    fastify.post("", controller.post);
    fastify.put("/:id", controller.put);
    fastify.delete("/stand/:id", controller.delRelated);
    fastify.delete("/:id", controller.del);
}