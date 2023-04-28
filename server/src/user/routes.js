const { Router } = require("express")
const controller = require("./controller")

const router = Router()

router.get("", controller.get);
router.get("/:id", controller.getUser);
router.get("/:id/guesbook", controller.getGuesBook);
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

router.post("", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.del);

module.exports = router