const { Router } = require("express")
const controller = require("./controller")

const router = Router()

router.get("", controller.get);
router.post("", controller.post);
router.put("", controller.put);
router.delete("", controller.del);
router.delete("/user/:id", controller.delUser)

module.exports = router