const { Router } = require("express")
const controller = require("./controller")

const router = Router()

router.get("", controller.get);
router.get("/equipes/:idEquipe", controller.getJoueur);
router.post("", controller.post);
router.put("/", controller.put);
router.delete("", controller.del);
router.delete("/teams/:idEquipe", controller.delEquipe);
router.delete("/players/:idJoueur", controller.delJoueur);

module.exports = router