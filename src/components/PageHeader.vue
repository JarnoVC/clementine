<script setup>
// No script changes needed for this task
</script>

<template>
    <header>
        <nav>
            <router-link to="/">
                <img id="logo" src="../assets/logo_clementine.svg" alt="Image of the logo">
            </router-link>
            <label for="toggle">&#9776;</label>
            <input type="checkbox" id="toggle">
            <div class="menu">
                <ul>
                    <!-- Use the "exact-active-class" attribute to specify active styling -->
                    <router-link to="/" exact-active-class="active">
                        <li>
                            <a href="#"><span>Home</span></a>
                            <div class="square" v-if="$route.path === '/'">&#9642;</div>
                        </li>
                    </router-link>  
                    <router-link to="/about" exact-active-class="active">
                        <li>
                            <a href="#"><span>About</span></a>
                            <div class="square" v-if="$route.path === '/about'">&#9642;</div>
                        </li>
                    </router-link>  
                    <router-link to="/project" exact-active-class="active">
                        <li>
                            <a href="#"><span>Projecten</span></a>
                            <div class="square" v-if="$route.path === '/project'">&#9642;</div>
                        </li>
                    </router-link>  
                    <router-link to="/contact" exact-active-class="active">
                        <li>
                            <a href="#"><span>Contact</span></a>
                            <div class="square" v-if="$route.path === '/contact'">&#9642;</div>
                        </li>
                    </router-link>  
                </ul>
            </div>
        </nav>
        <div class="clear"></div>
    </header>
</template>

<style scoped>
/* Style for the active link */
.active a {
    color: #343434; /* Color for active link */
}

.active .square {
    visibility: visible;
    transform: rotate(45deg);
}

/* The rest of your CSS remains unchanged */
nav ul {
    list-style-type: none;
    overflow: hidden;
    letter-spacing: 1.5px;
    vertical-align: auto;
    margin-right: 0em;
    margin-top: 2em;
}

nav ul li {
    display: inline-block;    
}

nav ul li a {
    text-decoration: none;
    color: #C5C5C5;
    display: block;
    padding: 0em 1.5em 0em 1.5em;
    font-size: 1em;
    font-weight: 700;
    font-family: sans-serif;
    text-transform: uppercase;
}

nav ul li .square {
    text-align: center;
    visibility: hidden;
}

nav ul li .actv_square {
    text-align: center;
    visibility: visible;
    transform: rotate(45deg);
}

nav ul li a:hover {
    color: #343434;
}

nav ul li a:active {
    color: #343434;
}

nav ul img {
    width: 1em;
    top: 1em;
}

#logo {
    position: absolute;
    left: 2em;
    top: 2em;
    width: 4em;
}

nav label, input {
    display: none;
}
  
nav {
    float: right;
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    margin-top: 1em;
    margin-right: 1em;
}



@media only screen and (max-width: 600px) {


/* HEADER */

.menu {
    display: none;
    height: 100vh;
    margin-top: 20vh;
}

#toggle:checked + .menu {
    display: block;
}

nav ul {
    margin: 0;
    padding: 0;
}

nav ul li {
    display: block;
    padding: 1em;
}

nav ul li a {
    display: block;
    font-size: 1.2em;
    text-align: center;
}

nav label {
    font-size: 3em;
    margin: 0.5em 0.7em 0em 0em;
    display: block;
}



nav {
    display: block;
    width: 100%;
    background-color: white;
    z-index: 1;
}

nav label {
    font-size: 2.5em;
    margin: 0.4em 0.4em 0.2em 0em;
    text-align: right;
    display: block;
}
}

</style>
