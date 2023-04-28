const { Router } = require("express")
const controller = require("./controller")

const router = Router()

router.get("", controller.get);
/**
 * @swagger
 * /api/teams:
 *   get:
 *      description: Used to get all team
 *      tags:
 *          - Team
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/:id", controller.getEquipe);
/**
 * @swagger
 * /api/teams/{id}:
 *   get:
 *      description: Used to get all team
 *      tags:
 *          - Team
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: Team id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post("", controller.post);
/**
 * @swagger
 * /api/teams/:
 *   post:
 *      description: Used to crate a team
 *      tags:
 *          - Team
 *      parameters:
 *          - in: body
 *            name: data
 *            description: data to change
 *            schema:
 *                type: object
 *                required:
 *                properties:
 *                    nom:
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

router.put("/:id", controller.put);
/**
 * @swagger
 * /api/teams/{id}:
 *   put:
 *      description: Used to uptade team's information by id
 *      tags:
 *          - Team
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: Team id
 *            required: true
 *          - in: body
 *            name: data
 *            description: data to change
 *            schema:
 *                type: object
 *                required:
 *                properties:
 *                    nom:
 *                        type: string
 *                        minLength: 1
 *                        maxLength: 45
 *                    enLice:
 *                        type: boolean
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete("/:id", controller.del);
/**
 * @swagger
 * /api/teams/{id}:
 *   delete:
 *      description: Used to del team by id
 *      tags:
 *          - Team
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            description: Team id
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router