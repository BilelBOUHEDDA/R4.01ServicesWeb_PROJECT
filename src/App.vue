<template>
    <div id="app">
        <Navbar />
        <div class="navbar-mr">
            <router-view name="main"/>
        </div>
        <pied />
    </div>
</template>
<style>
@import './assets/CSS/Planning.css';
@import './assets/CSS/GuestBook.css';
@import './assets/CSS/Informations.css';
@import './assets/CSS/Acceuil.css';
@import './assets/CSS/footer.css';
@import './assets/CSS/Boutique.css';
@import './assets/CSS/BoutiqueKayn.css';

.navbar-mr {
    padding-top: 74px;
    padding-bottom: 74px;
}

body{
    background-color: #1c1b1b;
}
</style>


<script>
import Navbar from './components/Navbar.vue';
import pied from './components/pied.vue';


export default {
    name: 'App',
    components: {
        Navbar,
        pied,

    }
}

</script>

