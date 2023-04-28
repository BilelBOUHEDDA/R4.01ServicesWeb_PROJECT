<template>
    <div>
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Sofia&effect=neon|outline|emboss|shadow-multiple">
        <section class="acceuil">

            <div>
                <video src="/assets/Images/AcceuilImages/Manette - 86462.mp4" id="video" autoplay loop muted></video>
                <div class="titre font-effect-neon">Lion Esport</div>

                <router-link v-if="$store.state.connectedUser == null" tag="login" to="/login">
                    <a href="/login" class="boutonAcceuil">Inscrivez-vous pour&nbsp;<br>participer &nbsp;
                        l'évènement</a>
                </router-link>
                <router-link v-else tag="informations" to="/informations">
                    <a href="/informations" class="boutonAcceuil">Plus d'informations</a>
                </router-link>

                <div class="date">Date
                    <br>
                    <div class="dateNumero">13-10-2022&nbsp; - &nbsp;17-10-2022</div>
                </div>
                <div class="international font-effect-outline">International
                    <br>
                    <div class="pays font-effect-outline">Asie - Europe - Amerique</div>
                </div>
            </div>


            <div class="separation"></div>

            <div class="ligne1Accueil">

                <div class="card">
                    <div class="card-inner">
                        <div class="card-front card-front-1">
                        </div>
                        <div class="card-back">
                            <div class="card-top">
                                <div class="card-image1"></div>
                            </div>
                            <p class="description">FIFA est une franchise de jeux vidéo de football développée et
                                publiée par
                                Electronic Arts. Le jeu permet aux joueurs de contrôler des équipes de football
                                professionnelles de
                                différents pays et de participer à des matchs en utilisant une variété de modes de jeu.
                                FIFA est
                                considéré comme l'un des meilleurs jeux de football en termes de réalisme et de
                                gameplay, et il est très
                                populaire auprès des amateurs de football du monde entier.</p>
                            <div class="card-icons">
                                <a href="https://www.ea.com/fr-fr/games/fifa/fifa-23" target="_blank"><img
                                        class="logolien" src="/assets/Images/AcceuilImages/lien.png" alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="card">
                    <div class="card-inner">
                        <div class="card-front card-front-2">
                        </div>
                        <div class="card-back">
                            <div class="card-top">
                                <div class="card-image1"></div>
                            </div>
                            <p class="description">Dota 2 est un jeu de stratégie en ligne multijoueur développé et
                                publié par Valve
                                Corporation. Le jeu est le successeur de Defense of the Ancients (DotA), un mod
                                populaire pour Warcraft
                                III: Reign of Chaos et son extension, The Frozen Throne. Dans Dota 2, les joueurs
                                contrôlent des
                                personnages appelés "héros" et s'affrontent sur une carte divisée en deux camps opposés,
                                l'équipe de la
                                "Radiant" et l'équipe de la "Dire". Le but du jeu est de détruire le "sanctuaire ennemi"
                                en utilisant
                                des tactiques et des compétences uniques de chaque héros. Dota 2 est l'un des jeux de
                                stratégie en ligne
                                les plus populaires et a des tournois professionnels avec des prix en espèces élevés.
                            </p>
                            <a class="a-card" href="https://www.dota2.com/home" target="_blank"><img class="logolien"
                                    src="/assets/Images/AcceuilImages/lien.png" alt=""></a>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-inner">
                        <div class="card-front card-front-3">
                        </div>
                        <div class="card-back">
                            <div class="card-top">
                                <div class="card-image1"></div>
                            </div>
                            <p class="description">Counter-Strike: Global Offensive (CS: GO) est un jeu de tir en ligne
                                multijoueur
                                développé et publié par Valve Corporation. Le jeu est la quatrième itération de la
                                franchise
                                Counter-Strike, qui a été initialement lancée en 1999 comme un mod pour le jeu
                                Half-Life. Dans CS: GO,
                                les joueurs s'affrontent en équipes de terroristes et d'antiterroristes dans des
                                environnements
                                réalistes, en utilisant une variété d'armes et d'équipements tactiques. Le jeu est très
                                populaire auprès
                                des joueurs professionnels et a des tournois avec des prix en espèces élevés.</p>
                            <a class="a-card" href="https://blog.counter-strike.net" target="_blank"><img
                                    class="logolien" src="/assets/Images/AcceuilImages/lien.png" alt=""></a>
                        </div>
                    </div>
                </div>


            </div>

            <div class="ligne2Accueil">

                <div class="card">
                    <div class="card-inner">
                        <div class="card-front card-front-4">
                        </div>
                        <div class="card-back">
                            <div class="card-top">
                                <div class="card-image1"></div>
                            </div>
                            <p class="description">League of Legends (LoL) est un jeu de stratégie en ligne multijoueur
                                développé et
                                publié par Riot Games. Le jeu est basé sur un mod pour le jeu Warcraft III appelé
                                Defense of the
                                Ancients (DotA). Dans LoL, les joueurs contrôlent des personnages appelés "champions" et
                                s'affrontent en
                                équipes sur une carte divisée en trois routes appelées "lanes". Le but du jeu est de
                                détruire la "base
                                ennemie" située au fond de la carte, en utilisant des tactiques et des compétences
                                uniques de chaque
                                champion. LoL est l'un des jeux de stratégie en ligne les plus populaires et a des
                                tournois
                                professionnels avec des prix en espèces élevés.</p>
                            <a class="a-card" href="https://www.leagueoflegends.com/fr-fr/" target="_blank"><img
                                    class="logolien" src="/assets/Images/AcceuilImages/lien.png" alt=""></a>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-inner">
                        <div class="card-front card-front-5">
                        </div>
                        <div class="card-back">
                            <div class="card-top">
                                <div class="card-image1"></div>
                            </div>
                            <p class="description">Rocket League est un jeu de sports-voitures développé et publié par
                                Psyonix. Le jeu
                                combine les éléments de football et de conduite en donnant aux joueurs le contrôle de
                                voitures équipées
                                de fusées pour jouer au football. Les joueurs peuvent s'affronter en équipe ou en solo
                                dans différents
                                modes de jeu, y compris les matchs classiques de football, les batailles de ballons et
                                les parties
                                rapides. Rocket League est connu pour son gameplay dynamique et ses mécanismes de jeu
                                originaux, et il
                                est très populaire auprès des amateurs de sports et de jeux de voitures.</p>
                            <a class="a-card" href="https://www.rocketleague.com/fr/" target="_blank"><img
                                    class="logolien" src="/assets/Images/AcceuilImages/lien.png" alt=""></a>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-inner">
                        <div class="card-front card-front-6">
                        </div>
                        <div class="card-back">
                            <div class="card-top">
                                <div class="card-image1"></div>
                            </div>
                            <p class="description">Valorant est un jeu de tir à la première personne multijoueur en
                                ligne qui a été
                                développé et publié par Riot Games. Le jeu se déroule dans un univers futuriste et met
                                en scène des
                                agents, chacun ayant des compétences uniques et des armes spéciales. Les joueurs
                                s'affrontent en équipe
                                sur des cartes tactiques, en utilisant leur arsenal et leurs compétences pour atteindre
                                des objectifs et
                                vaincre l'équipe adverse. Valorant est connu pour son gameplay rapide et tactique, ainsi
                                que pour son
                                système de matchmaking équitable qui permet aux joueurs de s'affronter à des adversaires
                                de niveau
                                similaire.</p>
                            <a class="a-card"
                                href="https://playvalorant.com/fr-fr/?gclid=CjwKCAiAh9qdBhAOEiwAvxIokw3kWjWPlDP2I6tV5cF9FX_NivMbp5psCUQu1cHL5EhSHzwvCGjpgBoCEK0QAvD_BwE&gclsrc=aw.ds"
                                target="_blank"><img class="logolien" src="/assets/Images/AcceuilImages/lien.png"
                                    alt=""></a>
                        </div>
                    </div>
                </div>
                <br>
            </div>

            <div class="blockCarte">

                <router-link tag="map" to="/map">
                    <img class="carte" src="/assets/Images/Mapimages/Carte3D.jpg" alt="">
                </router-link>

            </div>

        </section>
    </div>
</template>

<script>
export default {
    name: "Acceuil",
}
</script>