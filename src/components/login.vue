<template>
	<div class="conteneur">
		<div class="carde" @submit.prevent="login">
			<h1 class="carde__title" v-if="mode == 'login'">Connexion</h1>
			<h1 class="carde__title" v-else>Inscription</h1>
			<p class="carde__subtitle" v-if="mode == 'login'">Tu n'as pas encore de compte ? <span class="carde__action"
					@click="switchToCreateAccount()">Créer un compte</span></p>
			<p class="carde__subtitle" v-else>Tu as déjà un compte ? <span class="carde__action" @click="switchToLogin()">Se
					connecter</span></p>
			<div class="form-row">
				<input id="email" class="form-row__input" v-model="email" type="email" name="email" placeholder="Email">
			</div>
			<div class="form-row" v-if="mode == 'create'">
				<input v-model="nom" class="form-row__input" type="text" placeholder="Nom" />
			</div>
			<div class="form-row">
				<input v-model="codeAuth" class="form-row__input" type="password" placeholder="Mot de passe" />
			</div>
			<div class="form-row">
				<button @click="login()" class="button" type="submit" :class="{ 'button--disabled': !validatedFields }"
					v-if="mode == 'login'">
					<span>Connexion</span>
				</button>
				<button @click="submit()" class="button" type="submit" :class="{ 'button--disabled': !validatedFields }"
					v-else>
					<span>Créer mon compte</span>
				</button>
			</div>
			<!-- Ajoutez ces lignes après le bouton de connexion / création de compte -->
				<div class="social-signin">
					<button @click="loginWithGoogle" class="button button--google">
						<span>Se connecter avec Google</span>
					</button>
					<button @click="loginWithTwitter" class="button button--twitter">
						<span>Se connecter avec Twitter</span>
					</button>
				</div>

		</div>
	</div>
</template>

<style scoped>
@import '../assets/CSS/login.css';
</style>
<script>
import axios from 'axios';

const axiosagent = axios.create({ baseURL: 'http://localhost:3000/api' })


export default {
	data() {
		return {
			mode: 'login',
			nom: "",
			email: "",
			codeAuth: "",
			accessToken: '',
			refreshToken: ''
		};
	},
	computed: {
		validatedFields: function () {
			if (this.mode == 'create') {
				if (this.email != "" && this.nom != "" && this.codeAuth != "") {
					return true;
				} else {
					return false;
				}
			} else {
				if (this.email != "" && this.codeAuth != "") {
					return true;
				} else {
					return false;
				}
			}
		},

	},
	methods: {
		switchToCreateAccount: function () {
			this.mode = 'create';
		},
		switchToLogin: function () {
			this.mode = 'login';
		},
		async login() {
			try {
				const response = await axiosagent.get('/login?email=' + this.email + '&codeAuth=' + this.codeAuth);
				localStorage.setItem('userId', response.data[0].idutilisateur);

				if (response.status === 200) {
					// Connexion réussie, redirigez l'utilisateur
					this.$store.commit('updateUser', response.data[0])
					this.$router.push({ name: 'profil', params: {id: response.data[0].idutilisateur} })
				}
			} catch (error) {
				console.error(error);
				alert('Impossible de se connecter email ou mot de passe incorrect');
			}
		},
		async submit() {
			try {
				const response = await axiosagent.post('/login', {
					nom: this.nom,
					email: this.email,
					codeAuth: this.codeAuth,
				});

				if (response.status === 200)
					this.$router.push({ name: 'Acceuil' })
			} catch (error) {
				console.error(error);
				alert(`'Impossible de s'inscrire email ou mot de passe incorrect'`);
			}
		},
		loginWithGoogle() {
    window.location.href = 'http://localhost:3000/auth/google';
  },
  loginWithTwitter() {
    window.location.href = 'http://localhost:3000/auth/twitter';
  },
	},
};
</script>


