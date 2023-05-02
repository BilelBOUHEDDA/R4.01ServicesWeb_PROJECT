const controller = require("./controller")

module.exports = async (fastify) => {
    fastify.get("", controller.get);
    fastify.get("/infos", controller.getPlanning);
    /**
     * @swagger
     * /api/rencontres/infos:
     *   get:
     *      description: Used to get infos of all match
     *      tags:
     *          - Match
     *      responses:
     *          '200':
     *              description: Resource added successfully
     *          '500':
     *              description: Internal server error
     *          '400':
     *              description: Bad request
     */

    fastify.post("", controller.post);
    fastify.delete("", controller.del);
    fastify.delete("/equipe/:idTeam", controller.delRelated);
}