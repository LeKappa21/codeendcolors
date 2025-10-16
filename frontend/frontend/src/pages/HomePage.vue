<template>
  <!-- SLIDESHOW -->
  <swiper
    :modules="modules"
    :space-between="50"
    :slides-per-view="1"
    :navigation="true"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    class="mySwiper"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <div class="slide-wrapper position-relative">
        <img :src="slide.image" :alt="'Slide ' + (index + 1)" />
        <div class="slide-text-overlay">
          <h1 class="site-title">
            <span class="text-code">CODE </span>
            <span class="text-end">and </span>
            <span class="text-colors">COLORS</span>
          </h1>
          <h2>{{ slide.title }}</h2>
          <p>{{ slide.description }}</p>
          <router-link to="/project" class="btn btn-warning mt-3">Scopri di più</router-link>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  <!-- <section class="hero-section py-5">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6 mb-4 mb-lg-0">
        <h1 class="hero-title mb-3">
          <span class="text-code">CODE</span>
          <span class="text-end">END</span>
          <span class="text-colors">COLORS</span>
        </h1>
        <p class="lead text-light">
          Costruiamo cabinati arcade su misura, fondendo artigianato e innovazione per offrirti esperienze di gioco indimenticabili.
        </p>
        <button class="btn btn-warning btn-lg mt-4 shadow">Scopri i nostri modelli</button>
      </div>
      <div class="col-lg-6 text-center">
        <img
          src="https://ropie.it/wp-content/uploads/2019/05/RetroPie_Joystick.png"
          alt="Cabinato Arcade"
          class="img-fluid rounded shadow-lg"
        />
      </div>
    </div>
  </div>
</section> -->


<section class="retropie-section container my-5">
  <div class="row align-items-center">
    <div class="col-md-6 text-center">
      <img
        src="https://www.retropie.it/wp-content/uploads/2019/05/RetroPie_Joystick.png"
        alt="Cabinato Arcade"
        class="img-fluid rounded shadow-sm small-image"
      />
    </div>
    <div class="col-md-6">
      <h3 class="retropie-title mb-3">Sistema RetroPie preinstallato</h3>
      <p class="retropie-description">
        Ogni nostro cabinato include <strong>RetroPie</strong>, un sistema di emulazione completo e personalizzabile che ti consente di rivivere le emozioni del passato.  
        Puoi giocare con <strong>centinaia di titoli classici</strong> per console come:
      </p>
      <ul>
        <li>NES, SNES</li>
        <li>Sega Mega Drive, Master System</li>
        <li>Game Boy, Game Boy Advance</li>
        <li>PlayStation 1</li>
        <li>PSP (PlayStation Portable)</li>
        <li>Arcade MAME</li>
      </ul>
      <p>
        Ideale per lunghi periodi di <strong>divertimento in famiglia o con amici</strong>, con salvataggi, configurazioni personalizzate e una vera esperienza da sala giochi!
      </p>
      <button class="btn btn-warning mt-3">Scopri di più</button>
    </div>
  </div>
</section>



<section class="services-section py-5 text-center">
  <div class="container">
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="service-card p-4 shadow-sm rounded bg-white h-100">
          <h4>🎨 Design Personalizzato</h4>
          <p>Scegli ogni dettaglio estetico del tuo cabinato.</p>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="service-card p-4 shadow-sm rounded bg-white h-100">
          <h4>💻 Hardware Moderno</h4>
          <p>Componenti potenti, affidabili e aggiornabili.</p>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="service-card p-4 shadow-sm rounded bg-white h-100">
          <h4>🕹️ Supporto Software</h4>
          <p>Configurazione completa con i migliori emulatori.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="cta-section text-center py-5">
  <div class="container">
    <h2 class="text-white">Costruisci ora il tuo cabinato arcade personalizzato!</h2>
    <p class="text-light">Richiedi un preventivo gratuito o vieni a trovarci nel nostro laboratorio.</p>
    <button class="btn btn-outline-light btn-lg mt-3">Contattaci</button>
  </div>
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

const slides = [
  {
    image: 'images/20250622_155407.jpg',
    title: 'Il Fascino del Retro',
    description: 'Un design ispirato ai classici degli anni ‘80, ma con hardware moderno.'
  },
  {
    image: 'images/IMG-20250421-WA0013.jpg',
    title: 'Prestazioni da Sala Giochi',
    description: 'Potenza, fluidità e dettagli grafici che riportano in vita il tuo passato arcade.'
  },
  {
    image: 'images/20250322_182200.jpg',
    title: 'Personalizzazione Totale',
    description: 'Scegli il tema, i colori e le funzionalità: il cabinato diventa tuo.'
  }
]
</script>

<style scoped>



.mySwiper {
  width: 100%;
  height: 700px;
  position: relative;
}

.slide-wrapper {
  position: relative;
  width: 90%;
  height: 90%;
  margin-top: 20px; 
  margin-bottom: 40px;
}

.slide-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
.slide-text-overlay {
  position: absolute;
  bottom: 0%; /* o top: 10% se preferisci */
  left: 0;
  right: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.55);
  color: white;
  padding: 20px 40px;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.site-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.slide-text-overlay h2 {
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 10px;
}

.slide-text-overlay p {
  font-size: 1rem;
}

.text-code {
  color: #d42626;
}

.text-end {
  color: #ececec;
}

.text-colors {
  color: #fded0b;
}
.hero-title span {
  font-size: 3rem;
  display: inline-block;
  margin-right: 8px;
}

.text-code {
  color: #d42626;
}
.text-end {
  color: #ffffff;
}
.text-colors {
  color: #fded0b;
}

.lead {
  font-size: 1.1rem;
  line-height: 1.6;
}

.hero-image img {
  max-width: 400px;
}

.services h3 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.cta h2 {
  font-size: 2rem;
}




/* ihi */

/* HERO SECTION */
.hero-section {
  background: linear-gradient(135deg, #81a8eb, #83f589);
  color: white;
  border-bottom: 5px solid #ffc107;
}

.hero-title span {
  font-size: 2.8rem;
  font-weight: 800;
  letter-spacing: 2px;
}

.text-code {
  color: #ff5252;
}

.text-end {
  color: #ffffff;
}

.text-colors {
  color: #ffeb3b;
}

/* SERVICES SECTION */
.services-section {
  background-color: #f4f4f4;
}

.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.service-card h4 {
  color: #1e3c72;
  font-weight: 600;
}

.service-card p {
  color: #333;
}

/* CTA SECTION */
.cta-section {
  background: #1e3c72;
  padding: 60px 20px;
  border-top: 5px solid #ffc107;
}

.cta-section h2 {
  font-weight: 700;
  font-size: 2rem;
}

.cta-section p {
  font-size: 1.1rem;
  margin-top: 10px;
  margin-bottom: 20px;
  color: #ddd;
}

/* BUTTON STYLES */
button.btn-warning {
  background-color: #ffc107;
  border: none;
  color: #000;
}

button.btn-warning:hover {
  background-color: #e0a800;
}

button.btn-outline-light:hover {
  background-color: #ffffff;
  color: #1e3c72;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .hero-title span {
    font-size: 2rem;
  }

  .cta-section h2 {
    font-size: 1.6rem;
  }

  .cta-section p {
    font-size: 1rem;
  }
}

.retropie-section {
  background-color: #f8f9fa;
  padding: 40px 20px;
  border-top: 4px solid #ffc107;
  border-bottom: 4px solid #ffc107;
}

.retropie-title {
  color: #1e3c72;
  font-weight: 700;
}

.retropie-description {
  color: #333;
  font-size: 1.1rem;
}

.small-image {
  max-width: 300px;
  height: auto;
}


</style>
