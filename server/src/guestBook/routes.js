const controller = require("./controller")

module.exports = async (fastify) => {
    fastify.get("", controller.get);
    fastify.post("", controller.post);
    fastify.put("", controller.put);
    fastify.delete("", controller.del);
    fastify.delete("/user/:id", controller.delUser)
}