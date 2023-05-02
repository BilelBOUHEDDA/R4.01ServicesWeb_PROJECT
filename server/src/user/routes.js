const controller = require("./controller");

module.exports = async (fastify) => {
    fastify.get("", controller.get);
    fastify.get("/:id", controller.getUser);
    fastify.get("/:id/guesbook", controller.getGuesBook);

    /**
     * @swagger
     * /api/users/{id}/guesbook:
     *   get:
     *      description: Used to get all message let to a provider
     *      tags:
     *          - User
     *      parameters:
     *          - in: path
     *            name: id
     *            type: integer
     *            description: User id
     *            required: true
     *      responses:
     *          '200':
     *              description: Resource added successfully
     *          '500':
     *              description: Internal server error
     *          '400':
     *              description: Bad request
     */

    fastify.post("", controller.post);
    fastify.put("/:id", controller.put);
    fastify.delete("/:id", controller.del);
};