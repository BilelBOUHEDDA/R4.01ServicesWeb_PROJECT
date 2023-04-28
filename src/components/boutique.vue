<template>
  <div class="LetoutBoutique">
    <section>
      <img class="imagefond" src="/assets/Images/BoutiqueImages/fond.jpg">
      <div class="carreau1">
        <p class="carreau1Texte">Consulte&nbsp;<br>ton&nbsp;<br>panier</p>
      </div>

      <div class="carreau2">
        <a href="/assets/Images/BoutiqueImages/panier.jpg" class="carreau2Texte">/ Panier</a>
      </div>

      <div class="BoutiqueLigne1">
        <div class="BoutiqueBlock" v-for="(item, index) in items" :key="index">
          <router-link tag="informations" :to="{ name: 'boutiqueDetail', params: {id: item.idstock} }">
            <button class="ButtonImage">
              <img :src=findSRC(item.libelle) class="BoutiqueImage" data-href="https://bob">
            </button>
          </router-link>
          <p class="Produit">{{ item.libelle }}</p>
          <p class="Prix">{{ item.prix }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
const axiosagent = axios.create({ baseURL: 'http://localhost:3000/api/' })

export default {
  name: "boutique",
  data: () => ({
      items: null,
      }),
  async created() {
      await axiosagent.get(`/stocks`).then(response => {
          this.items=response.data
      });
  },
  methods: {
      findSRC(nom) {
          nom = nom.replaceAll(" ", "_")
          return "/assets/Images/BoutiqueImages/" + nom + "1.jpg"
      }
  },
}
</script>