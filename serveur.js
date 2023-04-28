const express = require('express');
const mongoose = require('mongoose');
const imagesRouter = require('./routers/imageRouter.js');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Images', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion : '));
db.once('open', function() {
  console.log('Connexion réussie à la base de données.');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/images', imagesRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
