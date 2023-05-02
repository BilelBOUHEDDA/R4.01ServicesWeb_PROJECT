const controller = require("./controller")

module.exports = async (fastify) => {
    fastify.get("", controller.get);
    /**
     * @swagger
     * /api/stands:
     *   get:
     *      description: Used to get all stand
     *      tags:
     *          - Stand
     *      responses:
     *          '200':
     *              description: Resource added successfully
     *          '500':
     *              description: Internal server error
     *          '400':
     *              description: Bad request
     */

    fastify.get("/:id", controller.getInfo)
    /**
     * @swagger
     * /api/stands/{id}:
     *   get:
     *      description: Used to get infos of a stand selected by Id
     *      tags:
     *          - Stand
     *      parameters:
     *          - in: path
     *            name: id
     *            type: integer
     *            description: Stand id
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
    /**
     * @swagger
     * /api/stands:
     *   post:
     *      description: Used to create a stand
     *      tags:
     *          - Stand
     *      parameters:
     *          - in: body
     *            name: data
     *            description: data to insert
     *            schema:
     *                type: object
     *                required:
     *                properties:
     *                    idUtilisateur:
     *                        type: integer
     *                        description: User id
     *                        required: true
     *                    idEmplacement:
     *                        type: integer
     *                        description: Spot id
     *                        required: true
     *                    libelle:
     *                        type: string
     *                        minLength: 1
     *                        maxLength: 45
     *      responses:
     *          '200':
     *              description: Resource added successfully
     *          '500':
     *              description: Internal server error
     *          '400':
     *              description: Bad request
     */

    fastify.put("/:id", controller.put);
    /**
     * @swagger
     * /api/stands/{id}:
     *   put:
     *      description: Used to update a stand
     *      tags:
     *          - Stand
     *      parameters:
     *          - in: path
     *            name: id
     *            type: integer
     *            description: Stand id
     *            required: true
     *
     *          - in: body
     *            name: data
     *            description: data to insert
     *            schema:
     *                type: object
     *                required:
     *                properties:
     *                    idUtilisateur:
     *                        type: integer
     *                        description: User id
     *                    idEmplacement:
     *                        type: integer
     *                        description: Spot id
     *                    libelle:
     *                        type: string
     *                        minLength: 1
     *                        maxLength: 45
     *      responses:
     *          '200':
     *              description: Resource added successfully
     *          '500':
     *              description: Internal server error
     *          '400':
     *              description: Bad request
     */

    fastify.delete("/user/:id", controller.delRelated);
    /**
     * @swagger
     * /api/stands/user/{id}:
     *   delete:
     *      description: Used to delete all stand related to a user
     *      tags:
     *          - Stand
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

    fastify.delete("/:id", controller.del);
    /**
     * @swagger
     * /api/stands/{id}:
     *   delete:
     *      description: Used to delete a stand
     *      tags:
     *          - Stand
     *      parameters:
     *          - in: path
     *            name: id
     *            type: integer
     *            description: Stand id
     *            required: true
     *      responses:
     *          '200':
     *              description: Resource added successfully
     *          '500':
     *              description: Internal server error
     *          '400':
     *              description: Bad request
     */
}