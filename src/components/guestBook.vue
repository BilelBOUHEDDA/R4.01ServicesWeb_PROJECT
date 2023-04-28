<template>
  <html>
    <head>
      <title>Formulaire de satisfaction</title>
    </head>

    <body class="body-guestbook">
      <div class="contactez-nous">
        <h1>Formulaire de satisfaction</h1>
        <form action="/page-traitement-donnees" method="post">
          <div>
            <label for="nom">Votre nom</label>
            <input type="text" id="nom" name="nom" placeholder="MonNom" required>
          </div>
          <div>
            <label for="email">Votre e-mail</label>
            <input type="email" id="email" name="email" placeholder="MonAdresse@mail.com" required>
          </div>
          <div>
            <label for="internet">Comment avez-vous connu l'événement ?</label>
            <select name="internet" id="internet" required>
              <option value="" disabled selected hidden>Choisissez</option>
              <option value="reseaux">Par les réseaux sociaux</option>
              <option value="presse">Par la presse</option>
            </select>
          </div>
          <div>
            <label for="evaluation">Quelle est votre appréciation globale sur l'événement ?</label>
            <select name="evaluation" id="evaluation" required>
              <option value="" disabled selected hidden>Choisissez votre évaluation</option>
              <option value="Pas-du-tout-satisfait">Pas du tout satisfait</option>
              <option value="Peu-satisfait">Peu satisfait</option>
              <option value="Satisfait">Satisfait</option>
              <option value="Tout-à-fait-satisfait">Tout à fait satisfait</option>
            </select>
          </div>
          <div>
            <label for="sujet">Quel est le sujet de votre message ?</label>
            <select name="sujet" id="sujet" required>
              <option value="" disabled selected hidden>Choisissez le sujet de votre message</option>
              <option value="probleme-compte">Problème avec mon compte</option>
              <option value="question-produit">Question à propos d’un produit</option>
              <option value="autre">Autre...</option>
            </select>
          </div>
          <div>
            <label for="message">Votre message</label>
            <textarea id="message" name="message" placeholder="Bonjour, je vous contacte car...." required></textarea>
          </div>
          <div>
            <button type="submit">Envoyer mon message</button>
          </div>
        </form>
      </div>
    </body>

  </html>
</template>