const { Router } = require("express")
const controller = require("./controller")

const router = Router()

router.get("", controller.get);
router.post("", controller.post);
router.put("/:id", controller.put);
router.delete("user/:id", controller.delRelated);
router.delete("/:id", controller.del);

module.exports = router