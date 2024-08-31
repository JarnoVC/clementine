<script setup>

import Header from './components/PageHeader.vue';
import Footer from './components/PageFooter.vue';
import '@fortawesome/fontawesome-free/css/all.min.css';

</script>

<template>
  <div id="app">
    <Header />
    <main class="content">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 60px;
}

.clear {
    clear: both;
}

html {
    font-family: 'Open Sans', sans-serif; font-weight: 400; font-style: normal;
}

button {
    background-color: #FDA147;
    border: none; 
    padding: 0em;
    padding: 0.7em 1.2em 0.7em 1.2em;
    color: white;
}

.orange {
    color: #FDA147;
}

.arrow {
    transform: rotate(90deg);
    text-align: center;
    margin: auto;
    font-size: 4em;
    position: relative;
    max-width: 1em;
    padding-bottom: 0.25em;
}

@media only screen and (max-width: 600px) {

html {
    font-size: 0.8em;
}
}


</style>
