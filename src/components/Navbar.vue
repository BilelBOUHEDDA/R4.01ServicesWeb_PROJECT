<template>
	<div class="navbar">
		<router-link tag="Acceuil" to="/">
			<a href="/">
				<img src="/assets/Images/logolion.png" class="boutonLogo">
			</a>
		</router-link>
		<router-link tag="planning" to="/planning">
			<a href="/planning" class="bouton">Planning</a>
		</router-link>
		<router-link tag="guestBook" to="/guestBook">
			<a href="/guestBook" class="bouton">Formulaire</a>
		</router-link>
		<router-link tag="equipe" to="/equipe">
			<a href="/equipe" class="bouton">Equipe</a>
		</router-link>
		<router-link tag="boutique" to="/boutique">
			<a href="/boutique" class="bouton">Boutique</a>
		</router-link>
		<router-link v-if="$store.state.connectedUser!=null" tag="profil" to="/profil">
			<a href="/profil" class="bouton">Profil</a>
		</router-link>
		<div v-if="$store.state.connectedUser!=null" @click="$store.commit('updateUser', null)">
			<a href="/" class="bouton">Se déconnecter</a>
		</div>
		<router-link v-else tag="login" to="/login">
			<a href="/login" class="bouton">Connectez-vous</a>
		</router-link>
		<a href="https://bob" class="bouton">&nbsp;<img src="/assets/Images/NavbarImages/téléchargement.png" alt="..."
				class="boutonLangue"></a>
	</div>
</template>

<style>
@import '../assets/CSS/nav.css';
</style>

