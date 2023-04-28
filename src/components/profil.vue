<template>
    <div class="michou">
        <h1> Profil de l'utilisateur</h1>
        <p>Nom : {{ nom }}</p>
        <p>Email : {{ email }}</p>
        <p>codepostale : {{codepostale }}</p>
        <p>type : {{ type[idtype-1] }}</p>
    </div>
</template>

<script>
import axios from 'axios';
const axiosagent = axios.create({ baseURL: 'http://localhost:3000/api/' })


export default {
    name:'profil',
    data() {
        return {
            nom: '',
            email: '',
            id:'',
            codepostale:'',
            idtype:'',
            type: ['Utilisateur','Prestataire','Joueur','Admin']
        };
    },
    props: {
        userId: Number
    },
   async created() {
        await axiosagent.get(`/users/${this.userId}`).then(response => {
            this.nom = response.data[0].nom;
            this.email = response.data[0].email;
            this.codepostale = response.data[0].codepostal;
            this.idtype = response.data[0].idtype
            
        });
    }
};
</script>

<style scoped>
@import '../assets/CSS/profil.css';
</style>