<template>
  <swiper
    :modules="modules"
    :space-between="50"
    :slides-per-view="1"
    :navigation="true"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    class="mySwiper"
  >
    <swiper-slide>
      <img
        src="https://i.ebayimg.com/images/g/PIoAAOSw2JRl~b1L/s-l1600.webp"
        alt="Slide 1"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://media.gqitalia.it/photos/6065e1797e700acff2f6451c/16:9/w_2560%2Cc_limit/IIRCADE-KICKSTARTER-GFX39-1.jpg"
        alt="Slide 2.1"
      />
    </swiper-slide>
    <swiper-slide>
      <img src="https://madeforarcade.com/wp-content/uploads/2022/05/bartop.webp" alt="Slide 3" />
    </swiper-slide>
  </swiper>


  <section class="hero container d-flex align-items-center justify-content-between py-5">
  <div class="hero-text me-4">
    <h1 class="hero-title">
      <span class="text-code">CODE</span>
      <span class="text-end">END</span>
      <span class="text-colors">COLORS</span>
    </h1>
    <p class="hero-description">
      Realizziamo cabinati arcade artigianali su misura, unendo design raffinato e tecnologia moderna per esperienze di gioco uniche.
    </p>
    <button class="btn btn-primary btn-lg mt-3">Scopri i nostri modelli</button>
  </div>
  <div class="hero-image">
    <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Space_Invader_Cabinet.jpg" alt="Cabinato Arcade" />
  </div>
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
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

const modules = [Pagination, Navigation, Autoplay]
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: 750px;
  margin-top: 0;
  position: relative;
}
.mySwiper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  width: 48px;
  height: 48px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  color: transparent;
  position: absolute;
  top: 50%;
  z-index: 10;
  transform: translateY(-50%);
}

:deep(.swiper-button-next) {
  background-image: url('/icons/arrow-left.png');
  right: 20px;
}

:deep(.swiper-button-prev) {
  background-image: url('/icons/arrow-right.png');
  left: 20px;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  transform: translateY(-50%) scale(1.15);
  filter: brightness(0.8);
}

/* Hero section */
.hero {
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
}

.hero-text {
  flex: 1;
  max-width: 600px;
}

.hero-title {
  font-weight: 700;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.text-code {
  color: #2c3e50; /* blu scuro elegante */
}

.text-end {
  color: #2980b9; /* blu più chiaro */
  margin: 0 0.4rem;
}

.text-colors {
  color: #16a085; /* verde acqua */
}

.hero-description {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

.hero-image img {
  max-width: 400px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }
  .hero-text {
    max-width: 100%;
    margin-bottom: 2rem;
  }
  .hero-image img {
    max-width: 100%;
  }
}


.btn-primary {
  font-weight: 700;
  font-size: 1.1rem;
  padding: 0.6rem 2rem;
}
</style>
