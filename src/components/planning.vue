<template>
    <html>

    <head>
        <title>Planning</title>
    </head>

    <div class="bgInfo">
        <body class="body-planning">
            <div class="schedule-planning">
                <div class="day">
                    <div class="title-planning">Planning</div>
                    <!-- Jeudi - 13 octobre -->
                    <div class="day-name">Jeudi - 13 octobre</div> <!-- Jeudi -->
                        <div class="border">
                        <div class="activity">

                            <div class="activity-time">09:00</div>
                            <div class="activity-equipe1">Equipe 1</div> <!-- Equipe 1 -->
                            <div class="activity-versus">
                                <img class="img-planning" src="/assets/Images/LogoTeam/KCrop.png" />
                                <!-- Logo Equipe 1 -->
                                VS
                                <img class="img-planning" src="/assets/Images/LogoTeam/PSG_eSports.png" />
                                <!-- Logo Equipe 2 -->
                            </div>
                            <div class="activity-equipe2">Equipe 2</div> <!-- Equipe 2 -->

                        </div>
                        </div>

                        <div class="border">
                        <div class="activity">

                            <div class="activity-time">11:00</div>
                            <div class="activity-equipe1">Equipe 1</div> <!-- Equipe 1 -->
                            <div class="activity-versus">
                                <img class="img-planning" src="/assets/Images/LogoTeam/G2.png" /> <!-- Logo Equipe 1 -->
                                VS
                                <img class="img-planning" src="/assets/Images/LogoTeam/VitalityRL.png" />
                                <!-- Logo Equipe 2 -->
                            </div>
                            <div class="activity-equipe2">Equipe 2</div> <!-- Equipe 2 -->

                        </div>
                    </div>

                    <!-- Vendredi - 14 octobre -->
                    <div class="day-name">Vendredi - 14 octobre</div> <!-- Vendredi -->
                    <div class="border">
                        <div class="activity">

                            <div class="activity-time">13:00</div>
                            <div class="activity-equipe1">Equipe 1</div> <!-- Equipe 1 -->
                            <div class="activity-versus">
                                <img class="img-planning" src="/assets/Images/LogoTeam/KCrop.png" />
                                <!-- Logo Equipe 1 -->
                                VS
                                <img class="img-planning" src="/assets/Images/LogoTeam/PSG_eSports.png" />
                                <!-- Logo Equipe 2 -->
                            </div>
                            <div class="activity-equipe2">Equipe 2</div> <!-- Equipe 2 -->

                        </div>
                    </div>

                    <!-- Samedi - 15 octobre -->
                    <div class="day-name">Samedi - 15 octobre</div> <!-- Samedi -->
                    <div class="border">
                        <div class="activity">

                            <div class="activity-time">10:00</div>
                            <div class="activity-equipe1">Equipe 1</div> <!-- Equipe 1 -->
                            <div class="activity-versus">
                                <img class="img-planning" src="/assets/Images/LogoTeam/KCrop.png" />
                                <!-- Logo Equipe 1 -->
                                VS
                                <img class="img-planning" src="/assets/Images/LogoTeam/PSG_eSports.png" />
                                <!-- Logo Equipe 2 -->
                            </div>
                            <div class="activity-equipe2">Equipe 2</div> <!-- Equipe 2 -->

                        </div>
                    </div>

                    <!-- Dimanche - 16 octobre -->
                    <div class="day-name">Dimanche - 16 octobre</div> <!-- Dimanche -->
                    <div class="border">
                        <div class="activity">

                            <div class="activity-time">09:00</div>
                            <div class="activity-equipe1">Equipe 1</div> <!-- Equipe 1 -->
                            <div class="activity-versus">
                                <img class="img-planning" src="/assets/Images/LogoTeam/KCrop.png" />
                                <!-- Logo Equipe 1 -->
                                VS
                                <img class="img-planning" src="/assets/Images/LogoTeam/PSG_eSports.png" />
                                <!-- Logo Equipe 2 -->
                            </div>
                            <div class="activity-equipe2">Equipe 2</div> <!-- Equipe 2 -->

                        </div>
                    </div>

                </div>
            </div>
        </body>
    </div>

    </html>
</template>

<script>
import axios from 'axios';
const axiosagent = axios.create({ baseURL: 'http://localhost:3000/api/' })

export default {
  name: "planning",
  data: () => ({
    planning: null
  }),
  async created() {
        await axiosagent.get(`/rencontres/infos`).then(response => {
            this.planning=response.data
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
