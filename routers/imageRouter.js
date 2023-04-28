const express = require('express');
const router = express.Router();
const imagesController = require('../controllers/imageControllers.js');

router.get('/compressed/:id', imagesController.getCompressedImage);
router.get('/', imagesController.getAllImages);
router.get('/:id', imagesController.getImage);
router.post('/', imagesController.createImage);
router.put('/:id', imagesController.updateImage);
router.delete('/:id', imagesController.deleteImage);


module.exports = router;