<script setup>

</script>

<template>
<main>
        <div class="about_intro">
            <h1>
                
                <span class="about_block"><span class="orange">C</span>reatief.</span>
                <span class="about_block">E<span class="orange">l</span>egant.</span>
                <span class="about_block">Developm<span class="orange">e</span>nt.</span>
                <span class="about_block"><span class="orange">M</span>od<span class="orange">e</span>r<span class="orange">n</span>.</span>
                <span class="about_block">En<span class="orange">t</span>hous<span class="orange">i</span>ast.</span>
                <span class="about_block">U<span class="orange">n</span>i<span class="orange">e</span>k.</span>
            </h1>
            <p class="arrow">&#8250;</p>
        </div>
        <div class="about_info">
            <div class="orange_rect"></div>
            <img src="../assets/about_kennismaking.jpg" alt="handshake">
            <div class="about_info_kennismaking">
                <h2>Kennismaking</h2>
                <p>Ik ben 24 jaar en altijd op zoek naar nieuwe uitdagingen! Momenteel rond ik mijn opleiding Experience Design af, waar ik mijn 
                    passie voor zowel grafisch ontwerp als webdevelopment volledig heb kunnen ontwikkelen. Het combineren van creatieve vormen en 
                    kleuren met passende technologieën om tot fraaie, en grafisch sterke, ontwerpen te komen, vind ik geweldig.</p>

                <p> Met behulp van verschillende software en development frameworks, zoals Vue.js of React, vertaal ik ideeën naar visueel aantrekkelijke en functionele ontwerpen voor webdevelopment en meer. 
                    Van strakke grafische elementen tot interactieve digitale oplossingen, ik zorg ervoor dat elk project zowel visueel als technisch 
                    sterk staat. Ik neem verantwoordelijkheid voor mijn werk en zet me volledig in om de kwaliteit van het eindproduct te waarborgen. 
                    De combinatie van creativiteit en code zorgt ervoor dat mijn ontwerpen niet alleen sterk in design zijn, maar ook werken en impact maken.</p>
            </div>
            <div class="orange_rect"></div>
            <img src="../assets/about_studies.jpg" alt="papieren, statistieken en vergrootglas">
            <div class="about_info_studies">
                <h2>Studies</h2>
                <p>In het middelbaar volgde ik de richting Accountancy en IT, waar ik voor het eerst leerde programmeren en mijn interesse in 
                    code ontstond. Hier werd de basis gelegd voor mijn alsmaar groeiende passie voor technologie en development.</p> 
                  
                <p> Tijdens mijn opleiding Experience Design heb ik deze interesse verder ontwikkeld en gecombineerd met mijn creativiteit. Niet alleen ben ik
                    bedreven in grafisch ontwerp, gebruikmakende van het volledige Adobe pakket/figma, maar ik ben ook bedreven in verschillende programmeertalen 
                    zoals HTML, CSS, JavaScript, Vue.js, Python, Jquery en React, waarmee ik 
                    functionele en visueel aantrekkelijke websites en applicaties bouw. De combinatie van webdevelopment en design stelt 
                    me in staat om digitale oplossingen te creëren die zowel gebruiksvriendelijk als grafisch aantrekkelijk zijn.</p>
            </div>
            <div class="orange_rect"></div>
            <img src="../assets/about_hobby3.jpg" alt="persoon met typmachine">
            <div class="about_info_hobby">
                <h2>Hobby</h2>
                <p>In mijn vrije tijd houd ik mezelf niet allen bezig met mijn kennis in webdevelopment of Vue.js te verdiepen, maar ook meet een reeds creatieve hobby's. Ik speel graag eens een rondje darts om even te ontspannen 
                    en scherp te blijven. Daarnaast vind ik koken geweldig; het geeft me de kans om te experimenteren met nieuwe recepten en vrienden te 
                    verrassen met een lekkere maaltijd. Tenslotte schrijf ik graag enorm korte verhalen en werk ik samen met vrienden aan gezamenlijke 
                    literaire projectjes. </p>
            </div>
        </div>
    </main>

</template>

<style scoped>

.about_intro {
    width: 62.5vw;
    margin: auto;
    height: 60vh;
    text-align: center;
}

.about_intro h1 {
   margin: auto;
   margin-top: 5vh;
  
}

.about_block {
    display: block;
}

.about_intro h1 :nth-child(1) {
   padding: 0.5em 0em; 
}

.about_intro h1 :nth-child(2) {
    padding: 0.5em 0em;  
}

.about_intro h1 :nth-child(3) {
    padding: 0.5em 0em;  
}

.about_intro h1 :nth-child(4) {
    padding: 0.5em 0em;  
} 

.about_intro h1 :nth-child(5) {
    padding: 0.5em 0em;  
} 


.about_info {
    width: 80%;
    margin: auto;
    z-index: 1;
}

.about_info img {
    width: 100%;
    height: 24em;
    margin: auto;
    object-fit: cover;
}

.about_info_kennismaking {
    position: relative;
    margin-bottom: 10em;
    box-shadow: 0px 6px 20px #dfdede;
}

.about_info_studies {
    position: relative;
    box-shadow: 0px 6px 20px #dfdede;
    margin-bottom: 10em;
}

.about_info_hobby {
    position: relative;
    box-shadow: 0px 6px 20px #dfdede;
    margin-bottom: 10em;
}

.about_info_kennismaking h2{
    margin: 0em;
    padding: 1em 2em 0.3em 1.65em;
}

.about_info_kennismaking p{
    padding: 0em 2em 1.5em 2.5em;
}

.about_info_studies h2{
    margin: 0em;
    padding: 1em 2em 0.3em 1.65em;
}

.about_info_studies p{
    padding: 0em 2em 1.5em 2.5em;
}

.about_info_hobby h2{
    margin: 0em;
    padding: 1em 2em 0.3em 1.65em;
}

.about_info_hobby p{
    padding: 0em 2em 1.5em 2.5em;
}

.orange_rect {
    background-color: #FDA147;
    position: relative;
    top: 1.5em; 
    left: -1em; 
    width: 8em;
    height: 3em;
    z-index: -1;
}

@media only screen and (max-width: 600px) {
    .about_block {
    font-size: 1.5em;
}
}

</style>