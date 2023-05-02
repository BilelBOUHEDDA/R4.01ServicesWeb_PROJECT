const controller = require("./controller")

// eslint-disable-next-line no-unused-vars
module.exports = async (fastify, options) => {
    fastify.get("", controller.get);
    fastify.post("", controller.post);
    fastify.put("/:id", controller.put);
    fastify.delete("user/:id", controller.delRelated);
    fastify.delete("/:id", controller.del);
}