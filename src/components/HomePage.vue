<script>
import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta';

export default defineComponent({
  setup() {
    useMeta({
      title: 'Clementine Designs - Grafisch Ontwerp en Programmeren',
      meta: [
        { name: 'description', content: 'Portfolio grafisch ontwerp en programmeren. Creëer unieke visuele identiteiten en ontwikkel innovatieve weboplossingen.' },
        { name: 'keywords', content: 'grafisch ontwerp, programmeren, webdevelopment, logo ontwerp, visueel ontwerp, HTML, CSS, JavaScript, Vue.js, React.js' },
        { property: 'og:title', content: 'Clementine Designs - Grafisch Ontwerp en Programmeren' },
        { property: 'og:description', content: 'Unieke visuele identiteiten en innovatieve weboplossingen. Bekijk mijn portfolio voor grafisch ontwerp en webdevelopment.' },
        { property: 'og:image', content: 'https://www.clementinedesigns.be/img/Logo_clementine.png' }
      ]
    });

    return {};
  }
});
</script>

<template>

    <main>
        <div class="home_intro">
            <h1>Op zoek naar een <span>creatief</span> avontuur!</h1>
            <p>Toveren met vormen en kleuren zodat jouw product visueel <span><strong>opvalt</strong></span> tussen de massa!</p>
            <img src="../assets/logo_clementine.svg" alt="het trailup logo">
            <p class="arrow">&#8250;</p>
        </div>
        <div class="teaser">
            <div class="teaser_left">
                <h2>Wat Werk</h2>
                <div class="black_rect_home"></div>
                <p>
                    Enkele visuele werkjes waar ik gedurende mijn studies aan gewerkt heb. Op de projecten pagina
                    vind je er nog wat meer.
                </p>
                <router-link to="/project"><button><a href="#">projecten</a></button></router-link>
            </div>
            <div class="teaser_right">
                <img src="../assets/logo_kwipper.png" alt="het kwipper logo">
                <img src="../assets/logo_copoll.png" alt="het copoll logo">
                <img src="../assets/logo_ladybug.png" alt="logo ladybug">
                <img src="../assets/Logo_clementine.png" alt="het clementine logo">
            </div>
            <div class="clear"></div>
        </div>
        
    </main>
</template>

<style scoped>
.home_intro {
    background-color: white;
    text-align: center;
    Height: 60vh;
    padding-top: 10vh;
}

.home_intro p {
    margin: auto;
    width: 30em;
}

.home_intro img {
    margin-top: 8em;
    width: 12vw;
    margin-bottom: 10vh;
    z-index: -1;
}

.home_intro span {
    color: #FDA147;
}

.teaser {
    margin: auto;
    width: 60vw;
    padding: 15em 0em 15em 0em;
}

.teaser_left {
    float: left;
    width: 23em;
}

.teaser_left h2 {
    margin-bottom: 2em;
}

.teaser_left p {
    margin-bottom: 2em;
}

button a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    vertical-align: center;
    padding: 0.7em 1.2em 0.7em 1.2em;
}

button:hover {
    background-color: #F08624;
    color: white;
}

.teaser_right {
    float: right;
    width: 25em;
}

.teaser_right img{
    width: 10em;
    display: inline-block;
    margin: 1.2em 1.2em 0em 0em;
    box-shadow: 0px 6px 20px #dfdede;
    max-height: 100%;
    object-fit: cover;
}

.teaser_right :nth-child(1) {
    position: relative;
    top: 2.4em;
}

.teaser_right :nth-child(3) {
    position: relative;
    top: 2.4em;
}

.black_rect_home {
    width: 2.5em;
    height: 0.3em;
    background-color: #343434;
    position: relative;
    top: -2.5em;
    left: 0em;
}

</style>