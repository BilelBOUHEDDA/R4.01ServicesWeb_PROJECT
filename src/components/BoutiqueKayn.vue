<template>
    <div class="testt">
        <div class="Rectangle">
            <p class="BoutiqueText"><img class="boulion" src="/assets/Images/logolion.png" ></p>
            <h1 class="titrebou">Statue Kayn<br>Unlocked</h1>
            <p class="PrixBoutique">45,50 €</p>
            <button class="boutonbou">45,50 - Ajouter au panier</button>
            <p class="disclaimer BoutiqueText">Ce produit est un objet de collection<br>ne convenant pas aux enfants de moins de 14 ans.</p>
            <hr width="85%" color="black">
            <h2>Description</h2>
            <p class="BoutiqueText">«Je t'ai choisi. C'est toi qui vas me servir.»<br><br>Devenez le chef de l'Ordre de l'ombre grâce à cette figurine adorablement arrogante de Kayn.<br>Cette figurine est la N°08 de la 4e série et elle est <br>accompagnée d'un Rhaast attaché, qui ne risque pas<br>de vous corrompre si jamais vous le touchez.</p>
            <h2>Caractéristiques</h2>
            <li class="carac">Shieda Kayn détaillé, accompagné de Rhaast</li>
            <li class="carac">Boîte de collection de la 4e série</li>
            <h2>Dimensions aproximatives</h2>
            <li class="carac">Hauteur : 4.8 in / 12,2 cm</li>
            <li class="carac">Largeur : 2.9 in / 7,5 cm</li>
        </div>
    
        <div class="image">
        <img id="main-image" class="ImageP" v-bind:src="mainImage" />
        </div>
        <ul class="ListeImages">
          <li v-for="image in images" v-bind:key="image">
            <img  class="ImageG" v-bind:src="image" v-on:click="changeMainImage(image)" />
          </li>
        </ul>
        
        </div>  
    </template>
    <script>
    export default {
      data: () => ({
        mainImage: '/assets/Images/BoutiqueImages/Statue_Kayn1.jpg',
        images: [
          '/assets/Images/BoutiqueImages/Statue_Kayn1.jpg',
          '/assets/Images/BoutiqueImages/Statue_Kayn2.jpg',
          '/assets/Images/BoutiqueImages/Statue_Kayn3.jpg',
        ],
      }),
      props: ['idItem'],
      methods: {
        changeMainImage(imageUrl) {
          this.mainImage = imageUrl;
        },
      },
    };
    </script>