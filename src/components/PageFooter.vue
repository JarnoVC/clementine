<script setup>

</script>

<template>

    <footer>
        <div class="footer_left">
            <p>Contact</p>
            <p>Jarno.vanclemen@hotmail.com</p>
            <a href="https://www.linkedin.com/in/jarno-van-clemen/" target="_blank"><i class="fab fa-linkedin fa-sm"></i></a>
            <a href="https://www.facebook.com/jarno.vanclemen" target="_blank"><i class="fab fa-facebook-square fa-3x"></i></a>
        </div>
        <div class="footer_right">
            <img src="../assets/logo_clementine.svg" alt="het trailup logo in lichte kleuren">
        </div>
        <div class="clear"></div>
    </footer>
</template>

<style scoped>

footer {
    background-color: #343434;
    color: white;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
}

.footer_left {
    float: left;
    margin: 0em 0em 0em 1.5em;
}

.fab {
    color: white;
    font-size: bold;
}

.footer_left :nth-child(1){
    font-size: 2em;
    margin: 0.6em 0em 0.4em 0em;
}

.footer_left :nth-child(2){
    font-size: 1em;
    margin: 0em 0em 0em 0em;
}

.footer_left a {
    margin: 0em 1em 0em 0em;
    font-size: 1em;
}

.footer_right img {
    width: 7em;
    padding: 1.5em 1.5em 1.5em 0em;
    position: relative;
    float: right;
}

</style>