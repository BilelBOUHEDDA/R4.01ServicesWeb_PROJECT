<template>
  <body class="body-joueur">
    <div class="title-joueur">Joueur</div>

    <div class="container-description-joueur">
      <p class="p-title">{{ joueur.nom }}</p> <!-- Nom equipe -->
      <p class="p-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p> <!-- Description equipe -->
    </div>

    <div class="container-name-joueur">
      <p>Joueurs de l'equipe</p>
    </div>

    <div class="cards-joueur">

      <div class="card-joueur">
        <img class="img-joueur" src="/assets/Images/LogoTeam/KCrop.png" alt="Image"> <!-- Logo joueur 1 -->
        <p class="p-joueur">joueur 1</p> <!-- joueur 1 -->
      </div>

      <div class="card-joueur">
        <img class="img-joueur" src="/assets/Images/LogoTeam/G2.png" alt="Image"> <!-- Logo joueur 2 -->
        <p class="p-joueur">joueur 2</p> <!-- joueur 2 -->
      </div>

      <div class="card-joueur">
        <img class="img-joueur" src="/assets/Images/LogoTeam/PSG_eSports.png" alt="Image"> <!-- Logo joueur 3 -->
        <p class="p-joueur">joueur 3</p> <!-- joueur 3 -->
      </div>

      <div class="card-joueur">
        <img class="img-joueur" src="/assets/Images/LogoTeam/SolaryRL.png" alt="Image"> <!-- Logo joueur 4 -->
        <p class="p-joueur">joueur 4</p> <!-- joueur 4 -->
      </div>

      <div class="card-joueur">
        <img class="img-joueur" src="/assets/Images/LogoTeam/VitalityRL.png" alt="Image"> <!-- Logo joueur 5 -->
        <p class="p-joueur">joueur 5</p> <!-- joueur 5 -->
      </div>

    </div>

    <div class="space-joueur">
      <div class="circle-joueur">
        <img src="/assets/Images/LogoTeam/KCrop.png" alt="Image"> <!-- Logo equipe -->
      </div>

      <div class="container-message-joueur"> <!-- Encouragement -->
        <p>Encouragement</p>
      </div>
    </div>

  </body>
</template>

<style>
 @import "../assets/CSS/Joueur.css";
</style>

<script>
export default {
  name: "joueur",
  data: () => ({
    joueur: null
  }),
}
</script>
