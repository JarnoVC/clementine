<script setup>
import { ref } from 'vue';

const naam = ref('');
const email = ref('');
const naamColor = ref('Black');
const emailColor = ref('Black');

const validatenaam = () => {
  if (naam.value === '') {
    naamColor.value = 'Red';
    return false;
  } else {
    naamColor.value = 'Black';
    return true;
  }
};

const validateemail = () => {
  if (email.value === '') {
    emailColor.value = 'Red';
    return false;
  } else {
    emailColor.value = 'Black';
    return true;
  }
};

const check = () => {
  const isNaamValid = validatenaam();
  const isEmailValid = validateemail();

  if (isNaamValid && isEmailValid) {
    // Proceed with form submission
    alert("Form is valid and ready to submit!");
  } else {
    // Show a warning
    document.getElementById("warning").style.visibility = "visible";
  }
};

</script>

<template>
    <main>
        <div class=contact_intro>
            <div class="contact_intro_left">
                <h1>Interesse?</h1>
                <div class="black_rect_contact1"></div>
                <p>Ben je geïnteresseerd, heb je een vraag of opmerking? Aarzel dan niet om me te contacteren. 
                </p>
                <p>
                    Hieronder kan je mijn contactgegevens vinden of kan je een berichtje opstellen in het formulier en het verzenden.
                    Ik beantwoord met plezier alle berichten zo snel mogelijk.
                </p>
                <div class="contact_intro_info">
                    <div class="contact_intro_info_left">
                        <img src="../assets/mail.png" alt="">
                        <p><a href="mailto:jarno.vanclemen@hotmail.com">jarno.vanclemen@hotmail.com</a></p>
                    </div>
                    <div class="contact_intro_info_right">
                        <img src="../assets/phone.jpg" alt="">
                        <p>+32 4 7359 3663</p>
                    </div>
                </div>
            </div>
            <div class="contact_intro_right">
                <img src="../assets/visual_contact.svg" alt="idee lamp">
            </div>
        </div>
        <h2 class="contact_form_h2">Laat een boodschap achter!</h2>
    <p class="text" id="warning">Vul je naam en emailadres in voor je een bericht verstuurd.</p>
    <div class="formular">
      <div class="black_rect_contact2"></div>
      <form @submit.prevent="check">
        <label class="formular_text" for="naam">Naam</label>
        <input
          class="formular_text"
          type="text"
          id="naam"
          v-model="naam"
          :style="{ color: naamColor }"
          @blur="validatenaam"
          placeholder="Je naam..."
        />
        <br>
        <label class="formular_text" for="email">Email</label>
        <input
          class="formular_text"
          type="text"
          id="email"
          v-model="email"
          :style="{ color: emailColor }"
          @blur="validateemail"
          placeholder="Je email..."
        />
        <br>
        <label class="formular_text" for="bericht">Bericht</label>
        <input class="formular_text" type="text" id="bericht" name="bericht" placeholder="Bericht..." />
        <input type="submit" value="verzend" />
      </form>
        </div>
    </main>

</template>

<style scoped>



/* CONTACT */

.contact_intro_left h1 {
    margin-bottom: 2em;
}

.contact_intro {
    height: 60vh;
    width: 65vw;
    margin: auto;
    margin-top: 30vh;
    margin-bottom: 10vh;
}

.contact_intro_right img {
    width: 12vw;
    position: relative;
    top: 3em;
    box-shadow: 0px 6px 20px #dfdede;
    transform: rotate(45deg);

}

.contact_intro_left {
    float: left;
    width: 40vw;
}

.contact_intro_right {
    float: right;
}

.contact_intro_info {
    display: inline-block;
    margin-top: 5em;
    vertical-align: center;
}

.contact_intro_info img {
    width: 1.8em;
    float: left;
    margin: 0.5em 0.5em 0em 0em;
}

.contact_intro_info p {
    display: inline-block;
}

.contact_intro_info_left {
    float: left;
    margin-right: 6vw;
    width: 16em;
}

.contact_intro_info_right {
    float: right;
    width: 10em;
}

.contact_form_h2 {
    width: 65vw;
    margin: 0 auto;
}

.formular {
    width: 65vw;
    margin: 0 auto;
}

form {
    width: 65vw;
    margin-bottom: 10em;
}

#naam, #email, #bericht  {
    background-color: #F6F6F6;
    color: #8A8A8A;
    font-size: 1em;
    font-weight: 400;
    font-style: italic;
    margin: 1em 0em 0em 0em;
}

#naam, #email {
    background-color: #F6F6F6;
    color: #8A8A8A;
    font-size: 1em;
    font-weight: 400;
    width: 20vw;
    font-style: italic;
    margin: 1em 0em 1.5em 0em;
}

form label {
    color: #404040;
    width: 100%;
    font-weight: 600;
}

input, select {
    padding: 0.8em;
    resize: vertical;
    border: 0px transparent;
}

textarea {
    width: 100%;
}

input {
    display: block;
    width: 60%;
}

input[type=submit] {
    border: 0px solid transparent;
    cursor: pointer;
    background-color: #0053F9;
    color: white;
    padding: 0.5em 1em 0.5em 1em;
    width: 8em;
    font-weight: 600;
    text-transform: uppercase;
    margin-top: 4em;
}

#warning {
    visibility: hidden;
    color: red;
    width: 65vw;
    margin: 0 auto;
    padding: 2em 0em;
}

#toggle{
    display: none;
}

.black_rect_contact1 {
    width: 2.5vw;
    height: 0.3em;
    background-color: #343434;
    position: relative;
    top: -3.5em;
    left: 0em;
}

.black_rect_contact2 {
    width: 2.5vw;
    height: 0.3em;
    background-color: #343434;
    position: relative;
    top: -4.5em;
    left: 0em;
}

a {
    text-decoration: none;
    list-style-type: none;
    color: #343434;
}


</style>