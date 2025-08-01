<template>
  <!-- <div class="homepage">
    <p>Questa è la mia homepage semplice.</p>
  </div> -->

  <swiper
    :modules="modules"
    :space-between="50"
    :slides-per-view="1"
    :pagination="{ clickable: true }"
    class="mySwiper"
  >
    <swiper-slide>
      <img src="https://www.krollit.com/wp-content/uploads/2024/09/Progetto-cabinato-arcade-fai-da-te-con-guida-passo-passo.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://via.placeholder.com/800x300?text=Slide+2" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://via.placeholder.com/800x300?text=Slide+3" />
    </swiper-slide>
  </swiper>
    
  <section class="hero text-center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Space_Invader_Cabinet.jpg" class="hero-img" alt="Cabinato Arcade">
  <h1>CODE END COLORS</h1>
  <p>Realizziamo cabinati arcade artigianali su misura, moderni e personalizzati</p>
  <button class="btn btn-primary mt-3">Scopri i nostri modelli</button>
</section>

<section class="services mt-5">
  <div class="row text-center">
    <div class="col-md-4">
      <h3>Design Personalizzato</h3>
      <p>Scegli la grafica e i colori del tuo cabinato</p>
    </div>
    <div class="col-md-4">
      <h3>Hardware Moderno</h3>
      <p>Componenti potenti, affidabili e aggiornabili</p>
    </div>
    <div class="col-md-4">
      <h3>Supporto Software</h3>
      <p>Installiamo e configuriamo i migliori emulatori</p>
    </div>
  </div>
</section>

<section class="cta text-center my-5">
  <h2>Vuoi costruire il tuo cabinato arcade personalizzato?</h2>
  <p>Contattaci per un preventivo gratuito o passa a trovarci nel nostro laboratorio</p>
  <button class="btn btn-success mt-2">Contattaci</button>
</section>




</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/pagination'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

const modules = [Pagination]
</script>

<style scoped>

.hero {
  display: flex;
  align-items: center; /* allinea verticalmente */
  gap: 2rem; /* spazio tra immagine e testo */
  padding: 3rem 1rem;
  background-color: #f8f9fa;
}

.hero-image img {
  max-width: 400px;
  width: 100%;
  border-radius: 10px;
}

.hero-text {
  max-width: 600px;
}

.hero-text h1 {
  margin-bottom: 1rem;
}

.hero-text p {
  margin-bottom: 2rem;
  font-size: 1.25rem;
}
.services h3 {
  margin-top: 1rem;
}
.cta {
  background-color: #e9ecef;
  padding: 2rem;
  border-radius: 10px;
}

.homepage {
  padding: 2rem;
}
p {
  color: #42b983;
  font-weight: bold;
}

.mySwiper {
  width: 100%;
  height: 750px;
  margin-top: 0rem;
  border-top: 0px;
}
.mySwiper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
