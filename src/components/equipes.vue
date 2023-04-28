<template>
  <section class="body-equipe">
    <div class="title-equipe">Equipe</div>
    <div class="cards-equipe">

      <div class="card-equipe" v-for="(equipe, index) in equipes" :key="index" @click="$router.push({ name: 'team', params: {id: index+1} })">
        <img v-if="equipe.enlyce" class="img-equipe" :src="findSRC(equipe.nom)" alt="Logo">
        <img v-else class="img-equipe grayscale" :src="findSRC(equipe.nom)" alt="Logo">
        <p class="p-equipe"> {{ equipe.nom }} </p>
      </div>
      
    </div>
  </section>
</template>
<script>
export default {
    data: () => ({
        equipes: [
            {nom: 'VitalityRL',enlyce: true},
            {nom: 'SolaryRL',enlyce: true},
            {nom: 'teamRL1',enlyce: false},
            {nom: 'teamRL2',enlyce: false},
            {nom: 'STK1',enlyce: false},
            {nom: 'G2',enlyce: true},
            {nom: 'Vitality.Bee',enlyce: true},
            {nom: 'KCrop',enlyce: true},
            {nom: 'Mandatory',enlyce: true},
            {nom: 'Liquide',enlyce: true},
            {nom: 'PSG Esports',enlyce: true},
            {nom: 'Monaco Esport',enlyce: true},
            {nom: 'FC SILMY',enlyce:true}
        ],
        src: "/assets/Images/LogoTeam/"
    }),
    methods: {
        findSRC(nom) {
            nom = nom.replaceAll(" ", "_")
            return this.src + nom + ".png"
        }
    },
    computed: {
    }
};
</script>
<style scoped>
@import "../assets/CSS/Equipe.css";
</style>
