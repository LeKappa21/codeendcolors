<template>
  <section class="about-page">
    <!-- HERO -->
    <div class="hero text-center py-5 text-white">
      <div class="container">
        <h1 class="fw-bold mb-3">Chi Siamo</h1>
        <p class="lead text-light">
          Un team di creativi, sviluppatori e designer uniti dalla passione per la tecnologia e il design.
        </p>
      </div>
    </div>

    <!-- INTRO -->
    <div class="container py-5">
      <div class="row align-items-center mb-5">
        <div class="col-md-6">
          <img
            src="/images/20250309_171508.jpg"
            alt="Team al lavoro"
            class="img-fluid rounded shadow-sm"
          />
        </div>
        <div class="col-md-6">
          <h2 class="section-title">La Nostra Storia</h2>
          <p>
            Code & Colors nasce dal desiderio di unire <strong>sviluppo software</strong> e <strong>design moderno</strong>
            in progetti su misura.  
            Ogni linea di codice, ogni interfaccia grafica, è pensata per offrire esperienze digitali semplici, belle e funzionali.
          </p>
          <p>
            Collaboriamo con startup, aziende e privati per trasformare idee in prodotti concreti, curando ogni dettaglio
            tecnico e visivo.
          </p>
        </div>
      </div>

      <!-- MISSION -->
      <div class="mission-section bg-light p-5 rounded shadow-sm mb-5">
        <h2 class="section-title text-center mb-4">La Nostra Missione</h2>
        <p class="text-center mx-auto" style="max-width: 800px;">
          Offrire soluzioni digitali creative e performanti, che uniscano estetica, usabilità e tecnologia.
          Puntiamo su <strong>qualità, innovazione e collaborazione</strong> per creare esperienze digitali che lasciano il segno.
        </p>
      </div>

      <!-- TEAM -->
      <div class="team-section text-center">
        <h2 class="section-title mb-5">Il Nostro Team</h2>
        <div class="row justify-content-center">
          <div class="col-md-4 mb-4" v-for="(member, index) in team" :key="index">
            <div class="team-card p-4 rounded shadow-sm">
              <img
                :src="member.image"
                :alt="member.name"
                class="rounded-circle mb-3 team-photo"
              />
              <h5 class="fw-bold">{{ member.name }}</h5>
              <p class="text-muted mb-1">{{ member.role }}</p>
              <p class="small">{{ member.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const team = [
  {
    name: 'Kevin Rossi',
    role: 'Front-End Developer',
    description:
      'Appassionato di interfacce pulite e funzionali, specializzato in Vue.js e UI design.',
    image: 'https://i.postimg.cc/W3GkGzQ2/profile-demo.jpg',
  },
  {
    name: 'Luca Bianchi',
    role: 'Back-End Engineer',
    description:
      'Ama l’architettura software e costruire sistemi scalabili, sicuri e performanti.',
    image: 'https://i.postimg.cc/Dyf4dZL6/avatar-2.jpg',
  },
  {
    name: 'Sara Verdi',
    role: 'Graphic Designer',
    description:
      'Unisce estetica e funzionalità per dare forma visiva a ogni progetto digitale.',
    image: 'https://i.postimg.cc/fbByPbDs/avatar-3.jpg',
  },
]
</script>

<style scoped>
/* --- HERO --- */
.hero {
  background: linear-gradient(135deg, #1e3c72, #3f51b5);
  border-bottom: 4px solid #ffc107;
}

.hero h1 {
  font-size: 2.8rem;
}

.hero p {
  font-size: 1.2rem;
}

/* --- SECTION TITLES --- */
.section-title {
  font-weight: 700;
  color: #1e3c72;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: #ffc107;
  margin: 10px auto 0;
  border-radius: 2px;
}

/* --- TEAM --- */
.team-photo {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 4px solid #ffc107;
}

.team-card {
  background: #fff;
  transition: all 0.3s ease;
}

.team-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

/* --- MISSION --- */
.mission-section {
  background: #f8f9fa;
}

/* --- RESPONSIVE --- */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .team-photo {
    width: 100px;
    height: 100px;
  }
}
</style>
