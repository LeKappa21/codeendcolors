<template>
  <!-- SLIDESHOW -->
  <swiper
    :modules="modules"
    :space-between="50"
    :slides-per-view="1"
    :navigation="true"
    :autoplay="{ delay: 5000, disableOnInteraction: false }"
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
  <section class="retropie-section">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-6">
          <div class="image-container" data-aos="fade-right">
            <div class="image-glow"></div>
            <img
              src="https://www.retropie.it/wp-content/uploads/2019/05/RetroPie_Joystick.png"
              alt="Cabinato Arcade"
              class="retropie-image"
            />
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-left">
          <div class="badge-pill">Sistema Completo</div>
          <h2 class="section-title">Sistema RetroPie preinstallato</h2>
          <p class="section-description">
            Ogni nostro cabinato include <strong>RetroPie</strong>, un sistema di emulazione completo e personalizzabile che ti consente di rivivere le emozioni del passato.  
            Puoi giocare con <strong>centinaia di titoli classici</strong> per console come:
          </p>
          <div class="console-grid">
            <div class="console-item">🎮 NES, SNES</div>
            <div class="console-item">🎯 Sega Mega Drive</div>
            <div class="console-item">📱 Game Boy, GBA</div>
            <div class="console-item">🎪 PlayStation 1</div>
            <div class="console-item">🎰 PSP</div>
            <div class="console-item">🕹️ Arcade MAME</div>
          </div>
          <p class="highlight-text">
            Ideale per lunghe sessioni di <strong>divertimento in famiglia o con amici</strong>, con salvataggi, configurazioni personalizzate e una vera esperienza da sala giochi!
          </p>
          <button class="modern-button">
            Scopri di più
            <span class="button-icon">→</span>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICES SECTION -->
  <section class="services-section">
    <div class="container">
      <div class="text-center mb-5" data-aos="fade-up">
        <h2 class="section-title">Perché scegliere i nostri cabinati</h2>
        <p class="section-subtitle">Qualità, personalizzazione e passione in ogni dettaglio</p>
      </div>
      <div class="row g-4">
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="0">
          <div class="service-card">
            <div class="service-icon">🎨</div>
            <h3 class="service-title">Design Personalizzato</h3>
            <p class="service-description">Scegli ogni dettaglio estetico del tuo cabinato, dai colori alle grafiche personalizzate.</p>
            <div class="service-hover-effect"></div>
          </div>
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
          <div class="service-card">
            <div class="service-icon">💻</div>
            <h3 class="service-title">Hardware Moderno</h3>
            <p class="service-description">Componenti potenti, affidabili e aggiornabili per prestazioni ottimali.</p>
            <div class="service-hover-effect"></div>
          </div>
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="400">
          <div class="service-card">
            <div class="service-icon">🕹️</div>
            <h3 class="service-title">Supporto Software</h3>
            <p class="service-description">Configurazione completa con i migliori emulatori e assistenza dedicata.</p>
            <div class="service-hover-effect"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA SECTION -->
  <section class="cta-section">
    <div class="cta-background"></div>
    <div class="container">
      <div class="cta-content" data-aos="zoom-in">
        <h2 class="cta-title">Costruisci il tuo cabinato arcade dei sogni</h2>
        <p class="cta-description">Richiedi un preventivo gratuito o vieni a trovarci nel nostro laboratorio</p>
        <button class="cta-button-large">
          Contattaci ora
          <span class="pulse-dot"></span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// @ts-ignore
import 'swiper/css'
// @ts-ignore
import 'swiper/css/pagination'
// @ts-ignore
import 'swiper/css/navigation'
// @ts-ignore
import 'swiper/css/autoplay'
// @ts-ignore
import 'swiper/css/effect-fade'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules'

const modules = [Pagination, Navigation, Autoplay, EffectFade]

const slides = [
  {
    image: 'images/20250622_155407.jpg',
    title: 'Il Fascino del Retro',
    description: 'Un design ispirato ai classici degli anni 80, ma con hardware moderno.'
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
/* GLOBAL STYLES */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* SLIDER */
.mySwiper {
  width: 100%;
  height: 80vh;
  max-height: 900px;
  min-height: 600px;
  position: relative;
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
  transition: transform 3s ease;
  filter: brightness(0.85);
}

.slide-wrapper:hover img {
  transform: scale(1.05);
  filter: brightness(0.75);
}

.slide-text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 900px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(30, 60, 114, 0.7) 100%);
  padding: 60px 50px;
  border-radius: 25px;
  text-align: center;
  color: #fff;
  backdrop-filter: blur(15px);
  border: 3px solid rgba(255, 193, 7, 0.4);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease;
}

.slide-text-overlay:hover {
  border-color: rgba(255, 193, 7, 0.6);
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.7);
}

.site-title {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 900;
  margin-bottom: 25px;
  letter-spacing: 3px;
  line-height: 1.2;
}

.text-code {
  color: #ff3b3b;
  text-shadow: 0 0 25px rgba(255, 59, 59, 0.7), 0 0 50px rgba(255, 59, 59, 0.4);
}

.text-end {
  color: #ffffff;
  font-weight: 400;
  font-style: italic;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
}

.text-colors {
  color: #fded0b;
  text-shadow: 0 0 25px rgba(253, 237, 11, 0.7), 0 0 50px rgba(253, 237, 11, 0.4);
}

.slide-text-overlay h2 {
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 0 3px 15px rgba(0, 0, 0, 0.7);
}

.slide-text-overlay p {
  font-size: clamp(1rem, 2vw, 1.25rem);
  margin-bottom: 30px;
  line-height: 1.7;
  color: #f0f0f0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
}

.slide-text-overlay .btn {
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 50px;
  background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
  border: none;
  color: #000;
  transition: all 0.4s ease;
  box-shadow: 0 8px 25px rgba(255, 193, 7, 0.5);
  text-decoration: none;
  display: inline-block;
}

.slide-text-overlay .btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(255, 193, 7, 0.7);
  background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);
}

/* RETROPIE SECTION */
.retropie-section {
  padding: 120px 0;
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
  position: relative;
  overflow: hidden;
}

.retropie-section .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
}

.retropie-section .row {
  justify-content: center;
  align-items: center;
}

.retropie-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: -50%;
  width: 200%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 193, 7, 0.05) 0%, transparent 70%);
  animation: pulse 15s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.image-glow {
  position: absolute;
  width: 80%;
  height: 80%;
  background: radial-gradient(circle, rgba(255, 193, 7, 0.3) 0%, transparent 70%);
  filter: blur(40px);
  animation: glow 3s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% { transform: scale(0.9); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

.retropie-image {
  max-width: 70%;
  height: auto;
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2));
  transition: transform 0.5s ease;
}

.retropie-image:hover {
  transform: scale(1.05) rotate(2deg);
}

.badge-pill {
  display: inline-block;
  padding: 8px 20px;
  background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
  color: #000;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.section-title {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  color: #1e3c72;
  margin-bottom: 25px;
  line-height: 1.2;
}

.section-description {
  font-size: 1.15rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 30px;
}

.console-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin: 30px auto;
  max-width: 600px;
}

.console-item {
  padding: 15px 20px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  font-weight: 600;
  color: #333;
  text-align: center;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.console-item:hover {
  border-color: #ffc107;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 193, 7, 0.2);
}

.highlight-text {
  font-size: 1.05rem;
  color: #666;
  line-height: 1.7;
  margin: 25px 0;
}

.modern-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 40px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: #fff;
  border: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 8px 20px rgba(30, 60, 114, 0.3);
}

.modern-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(30, 60, 114, 0.4);
  background: linear-gradient(135deg, #2a5298 0%, #3f6eb8 100%);
}

.button-icon {
  font-size: 1.3rem;
  transition: transform 0.3s;
}

.modern-button:hover .button-icon {
  transform: translateX(5px);
}

/* SERVICES SECTION */
.services-section {
  padding: 120px 0;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
}

.services-section .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
}

.services-section .row {
  justify-content: center;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #777;
  margin-top: 10px;
}

.service-card {
  position: relative;
  padding: 50px 30px;
  background: #ffffff;
  border-radius: 20px;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 2px solid transparent;
  overflow: hidden;
  height: 100%;
}

.service-hover-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(30, 60, 114, 0.1) 100%);
  transition: left 0.5s;
  z-index: 0;
}

.service-card:hover .service-hover-effect {
  left: 0;
}

.service-card:hover {
  transform: translateY(-15px);
  border-color: #ffc107;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
}

.service-icon {
  font-size: 4rem;
  margin-bottom: 25px;
  position: relative;
  z-index: 1;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e3c72;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
}

.service-description {
  font-size: 1.05rem;
  color: #666;
  line-height: 1.7;
  position: relative;
  z-index: 1;
}

/* CTA SECTION */
.cta-section {
  position: relative;
  padding: 150px 0;
  overflow: hidden;
}

.cta-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #3f6eb8 100%);
  z-index: 0;
}

.cta-background::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 193, 7, 0.1) 0%, transparent 70%);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.cta-section .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
}

.cta-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cta-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 20px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.cta-description {
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  line-height: 1.6;
}

.cta-button-large {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 15px;
  padding: 22px 55px;
  background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
  color: #000;
  border: none;
  border-radius: 50px;
  font-weight: 800;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 10px 30px rgba(255, 193, 7, 0.5);
  overflow: hidden;
}

.cta-button-large::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.cta-button-large:hover::before {
  width: 300px;
  height: 300px;
}

.cta-button-large:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(255, 193, 7, 0.7);
}

.pulse-dot {
  width: 10px;
  height: 10px;
  background: #ff3b3b;
  border-radius: 50%;
  animation: pulse-dot 2s infinite;
}

@keyframes pulse-dot {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
}

/* SWIPER CUSTOMIZATION */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #ffc107;
  background: rgba(0, 0, 0, 0.5);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

:deep(.swiper-button-next):hover,
:deep(.swiper-button-prev):hover {
  background: rgba(255, 193, 7, 0.9);
  color: #000;
  transform: scale(1.1);
}

:deep(.swiper-button-next)::after,
:deep(.swiper-button-prev)::after {
  font-size: 20px;
  font-weight: bold;
}

:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 1;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  background: #ffc107;
  width: 35px;
  border-radius: 6px;
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .mySwiper {
    height: 65vh;
  }

  .retropie-section {
    padding: 80px 0;
  }

  .services-section {
    padding: 80px 0;
  }

  .cta-section {
    padding: 100px 0;
  }

  .console-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .mySwiper {
    height: 70vh;
    min-height: 500px;
  }

  .slide-text-overlay {
    width: 92%;
    padding: 40px 30px;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(30, 60, 114, 0.75) 100%);
    border-width: 2px;
  }

  .site-title {
    margin-bottom: 20px;
  }

  .slide-text-overlay h2 {
    margin-bottom: 15px;
  }

  .slide-text-overlay p {
    margin-bottom: 25px;
  }

  .console-grid {
    grid-template-columns: 1fr;
  }

  .retropie-image {
    max-width: 90%;
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    width: 40px;
    height: 40px;
  }

  :deep(.swiper-button-next)::after,
  :deep(.swiper-button-prev)::after {
    font-size: 16px;
  }
}
</style>