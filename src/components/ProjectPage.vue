<script setup>

</script>

<template>
    <main>
        <div class=projects_intro>
            <div class="projects_intro_left">
                <h1>Projecten</h1>
                <div class="black_rect_projects"></div>
                <p>Onderaan vind je enkele projecten waar ik gedurende mijn studies aan gewerkt heb. Deze projecten zijn gevarieerd en gaan van logo's
                    en illustraties tot prototypes en animaties. Door het maken van deze projecten heb ik veel geleerd en heb ik ook massa's ervaring op gedaan.
                </p>
                <p>
                    Heb je een vraag? Aarzel niet om me te contacteren!
                </p>
            </div>
            <div class="projects_intro_right">
                <img src="../assets/visual_projects.svg" alt="diagram">
            </div>
        </div>
        <div class="projects_showcase">
            <div class="projects_showcase_right">
                <div class="projects_showcase_right_text">
                <h2>Clementine Logo</h2>
                <p>Dit logo is ontworpen voor mijn eigen portfolio site. De negatieve ruimte symboliseert 2 bergen waartussen een pad (trail) naarboven loopt.</p>
                </div>
                <img src="../assets/Logo_clementine.png" alt="het clementine logo">
                <div class="clear"></div>
            </div>
        </div>
        <div class="projects_showcase">
            <div class="projects_showcase_left">
                <div class="projects_showcase_left_text">
                <h2>Ladybug</h2>
                <p> Ladybug is een promotiecampagne die ik samen met enkele medestudenten heb opgezet om onze studierichting meer 
                    onder de aandacht te brengen bij vrouwen. We maakten hierbij gebruik van getuigenissen die zijn ingestuurd door onze vrouwelijke collega's. </p>
                </div>
                <img src="../assets/logo_ladybug.png" alt="logo ladybug">
                <div class="clear"></div>
            </div>
        </div>
        <div class="projects_showcase">
            <div class="projects_showcase_right">
                <div class="projects_showcase_right_text">
                <h2>Kwipper Logo</h2>
                <p>Kwipper is een platform waar kleinschallige organisaties and jeugdbewegingen materiaal dat zij op dat moment niet nodig hebben kunnen 
                    verhuren aan andere jeugdbewegingen en groepen.</p> 
                </div>
                <img src="../assets/logo_kwipper.png" alt="het kwipper logo">
                <div class="clear"></div>
            </div>
        </div>
        <div class="projects_showcase">
            <div class="projects_showcase_left">
                <div class="projects_showcase_left_text">
                <h2>Copoll Logo</h2>
                <p>Copoll is een applicatie dat ontworpen is om burgerparticipatie in lokale gemeente aan te moedigen. Het geeft gemeentes
                    de mogelijkheid om projecten en bevragingen te organiseren waaraan bewoners en lokale organisaties aan kunnen meewerken.</p>
                </div>
                <img src="../assets/logo_copoll.png" alt="het copoll logo">
                <div class="clear"></div>
            </div>
        </div>
        <div class="projects_showcase">
            <div class="projects_showcase_right">
                <div class="projects_showcase_right_text">
                <h2>Smashing Magazine</h2>
                <p>Een visuele kalender ontworpen om mee te doen aan de Smashing Magazine wedstrijd. Het thema waar ik rond gewerkt heb was nationale science fiction dag.</p>
                </div>
                <img src="../assets/space_magazine.png" alt="kalender met popcorn achtergrond">
                <div class="clear"></div>
            </div>
        </div>
    </main>

</template>

<style scoped>


.projects_intro_left h1 {
    margin-bottom: 2em;
}

.projects_intro_left p {
    padding-bottom: 2em;
}

.projects_intro {
    height: 60vh;
    width: 65vw;
    margin: auto;
    margin-top: 30vh;
    margin-bottom: 10vh;
}

.projects_intro img {
    width: 12vw;
    transform: rotate(45deg);
    box-shadow: 0px 6px 20px #dfdede;
    position: relative;
    top: 3em;

}

.projects_intro_left {
    float: left;
    width: 40vw;
}

.projects_intro_right {
    float: right;
}

.projects_showcase {
    width: 63.3vw;
    margin: auto;
    margin-bottom: 15vh;
}

.projects_showcase_right, .projects_showcase_left {
    box-shadow: 0px 6px 20px #dfdede;
    transition: transform .2s; /* Animation */
}

.projects_showcase_right {
    height: 30vh;
}

.projects_showcase_left {
    height: 30vh;
}

.projects_showcase_right img {
    width: 30vw;
    height: 100%;
    float: right;
    object-fit: cover;
}

.projects_showcase_right_text {
    width: 20vw;
    float: left;
    margin: 0;
    padding: 1em 0em 1em 2em;
}

.projects_showcase_left img {
    width: 30vw;
    height: 100%;
    float: left;
    object-fit: cover;
}

.projects_showcase_left_text {
    width: 20vw;
    margin: 0;
    padding: 1em 0em 1em 2em;
    float: right;
    margin-right: 15%;
}

.projects_showcase img {
    transition: transform 0.2s;
  }

.projects_showcase img:hover {
    transform: scale(1.15); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }

.black_rect_projects {
    width: 2.5vw;
    height: 0.3em;
    background-color: #343434;
    position: relative;
    top: -3.5em;
    left: 0em;
}

</style>