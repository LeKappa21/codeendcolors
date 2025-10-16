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
      <div class="slide-wrapper">
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

  <!-- RETROPIE SECTION -->
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

  <!-- SERVICES SECTION -->
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

  <!-- CTA SECTION -->
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
import 'swiper/css/effect-fade'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules'

const modules = [Pagination, Navigation, Autoplay, EffectFade]

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
/* SLIDER */
.mySwiper {
  width: 100%;
  height: 100vh;
}

.slide-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slide-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.5s ease;
}

.slide-wrapper:hover img {
  transform: scale(1.05);
}

.slide-text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 800px;
  background: rgba(0,0,0,0.45);
  padding: 30px 40px;
  border-radius: 12px;
  text-align: center;
  color: #fff;
}

.slide-text-overlay h1 {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.slide-text-overlay h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.slide-text-overlay p {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

/* COLORS */
.text-code { color: #d42626; }
.text-end { color: #ececec; }
.text-colors { color: #fded0b; }

/* RETROPIE */
.retropie-section {
  background-color: #f8f9fa;
  padding: 60px 20px;
  border-top: 4px solid #ffc107;
  border-bottom: 4px solid #ffc107;
  border-radius: 12px;
}

.retropie-section img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  margin-bottom: 20px;
}

.retropie-title {
  color: #1e3c72;
  font-weight: 700;
  margin-bottom: 15px;
}

.retropie-description {
  color: #333;
  font-size: 1.1rem;
}

.retropie-section ul li {
  list-style-type: disc;
  margin-left: 20px;
  margin-bottom: 5px;
}

.retropie-section button {
  background-color: #ffc107;
  border: none;
  color: #000;
  font-weight: 600;
  padding: 10px 25px;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.retropie-section button:hover {
  background-color: #e0a800;
  color: #fff;
}

/* SERVICES */
.services-section {
  background-color: #f4f4f4;
  padding: 60px 20px;
}

.service-card {
  background-color: #fff;
  padding: 30px 20px;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

.service-card h4 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #1e3c72;
}

.service-card p {
  font-size: 1rem;
  color: #333;
}

/* CTA */
.cta-section {
  background: linear-gradient(135deg, #1e3c72, #3f51b5);
  padding: 80px 20px;
  border-top: 5px solid #ffc107;
  border-radius: 12px;
  text-align: center;
}

.cta-section h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
}

.cta-section p {
  font-size: 1.2rem;
  color: #ddd;
  margin-bottom: 30px;
}

.cta-section button {
  font-size: 1.1rem;
  padding: 15px 40px;
  border-radius: 50px;
  font-weight: 700;
  transition: all 0.3s ease;
}

.cta-section button:hover {
  background-color: #ffc107;
  color: #000;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .slide-text-overlay h1 { font-size: 1.8rem; }
  .slide-text-overlay h2 { font-size: 1.2rem; }
  .slide-text-overlay p { font-size: 0.95rem; }

  .cta-section h2 { font-size: 1.6rem; }
  .cta-section p { font-size: 1rem; }

  .service-card { margin-bottom: 20px; }
}
</style>
