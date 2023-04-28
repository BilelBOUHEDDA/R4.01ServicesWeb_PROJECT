<template>
    <body class="body-joueur">  
      <div class="container-description-joueur">
        <p class="p-title">{{ equipe.nom }}</p> <!-- Nom equipe -->
        <p class="p-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p> <!-- Description equipe -->
      </div>
  
      <div class="container-name-joueur">
        <p>Joueurs de l'equipe</p>
      </div>
  
      <div class="cards-joueur">
  
        <div class="card-joueur" v-for="(joueur, index) in joueurs" :key="index" >
          <img class="img-joueur" src="/assets/Images/defaultUser.jpg" alt="Image">
          <p class="p-joueur">{{ joueur.nom }}</p> 
        </div>
  
      </div>
  
      <div class="space-joueur">
        <div class="circle-joueur">
          <img :src="findSRC(equipe.nom)" alt="Image"> <!-- Logo equipe -->
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
  import axios from 'axios';
  const axiosagent = axios.create({ baseURL: 'http://localhost:3000/api/' })

  export default {
    name: "equipe",
    data: () => ({
        equipe: null,
        joueurs: null
        }),
    props: ['idteam'],
    async created() {
        await axiosagent.get(`/teams/${this.idteam}`).then(response => {
            this.equipe=response.data[0]
        });
        await axiosagent.get(`/compositions/equipes/${this.idteam}`).then(response => {
            this.joueurs=response.data.map(j => {
                let nom = j.pseudo == null ? j.nom : j.pseudo
                return {
                    nom: nom,
                    idJoueur: j.idjoueur,
                    nationnalite: j.nationnalite,
                    role: j.role
                }
            })
        });
    },
    methods: {
        findSRC(nom) {
            nom = nom.replaceAll(" ", "_")
            return "/assets/Images/LogoTeam/" + nom + ".png"
        }
    },
  }
  </script>
  