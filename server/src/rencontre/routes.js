const { Router } = require("express")
const controller = require("./controller")

const router = Router()

router.get("", controller.get);
router.get("/infos", controller.getPlanning);
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

router.post("", controller.post);
router.delete("", controller.del);
router.delete("/equipe/:idTeam", controller.delRelated);

module.exports = router