const Image = require('../models/imageModel.js');
const sharp = require('sharp');
const { Readable } = require('stream');
const request = require('request');
const rp = require('request-promise-native');

exports.getAllImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getImage = (req, res, next) => {
  Image.findById(req.params.id)
    .then(image => {
      if (!image) {
        throw new Error('Image not found');
      }
      res.status(200).json(image);
    })
    .catch(error => {
      res.status(400).json({ error });
    });
};

exports.createImage = (req, res, next) => {
  const { title, description, imageUrl } = req.body;
  const image = new Image({ title, description, imageUrl });
  image.save()
    .then(() => {
      res.status(201).json({ message: 'Image created successfully' });
    })
    .catch(error => {
      res.status(400).json({ error });
    });
};

exports.updateImage = (req, res, next) => {
  const { title, description, imageUrl } = req.body;
  Image.findByIdAndUpdate(req.params.id, { title, description, imageUrl })
    .then(() => {
      res.status(200).json({ message: 'Image updated successfully' });
    })
    .catch(error => {
      res.status(400).json({ error });
    });
};

exports.deleteImage = (req, res, next) => {
  Image.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'Image deleted successfully' });
    })
    .catch(error => {
      res.status(400).json({ error });
    });
};

const fs = require('fs');

const axios = require('axios');
const path = require('path');

// Le chemin où vous souhaitez enregistrer les images
const imageDirectory = '../image';

// Votre contrôleur pour récupérer l'image compressée à partir de l'ID
exports.getCompressedImage = async (req, res) => {
    try {
      const id = req.params.id;
      const image = await Image.findById(id);
      if (!image) {
        return res.status(404).json({ error: 'Image not found' });
      }
  
      const imageUrl = image.imageUrl;
      const imageFilename = "test.png";
      const originalPath = path.join(__dirname, '..', 'image', imageFilename);
      const compressedPath = path.join(__dirname, '..', 'image/compressed', imageFilename);
  
      // Télécharger l'image uniquement si elle n'a pas déjà été enregistrée sur le disque dur
      if (!fs.existsSync(originalPath)) {
        const response = await axios.get(imageUrl, { responseType: 'stream' });
        response.data.pipe(fs.createWriteStream(originalPath));
        await new Promise(resolve => {
          response.data.on('end', () => {
            resolve();
          });
        });
        console.log(`L'image originale a été téléchargée et enregistrée dans ${originalPath}`);
  
        // Réduire la taille de l'image et enregistrer la version compressée avec sharp
        await sharp(originalPath)
        .jpeg({quality: 20})
        .toFile(compressedPath);

        console.log(`L'image compressée a été enregistrée dans ${compressedPath}`);
      } else {
        console.log(`L'image ${imageFilename} existe déjà dans le dossier images/original`);
      }
      fs.unlinkSync(originalPath);
      const compressedImage = fs.readFileSync(compressedPath);
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.end(compressedImage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };



  
  
