<template>
  <section class="about-page">
    <!-- HERO -->
    <div class="hero text-center text-white">
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
      <div class="team-section">
        <div class="text-center mb-5">
          <h2 class="section-title">Il Nostro Team</h2>
          <p class="team-subtitle">Le persone dietro Code and Colors</p>
        </div>

        <!-- Team Members - Ogni persona in una sezione separata -->
        <div v-for="(member, index) in team" :key="index" class="team-member-section" :class="{ 'reverse': index % 2 !== 0 }">
          <div class="container">
            <div class="row align-items-center g-5">
              <!-- Immagine -->
              <div class="col-lg-5" data-aos="fade-right">
                <div class="member-image-container">
                  <div class="image-glow-effect"></div>
                  <img
                    :src="member.image"
                    :alt="member.name"
                    class="member-photo"
                  />
                  <div class="member-badge">{{ member.role }}</div>
                </div>
              </div>

              <!-- Info e Descrizione -->
              <div class="col-lg-7" data-aos="fade-left">
                <div class="member-info">
                  <h3 class="member-name">{{ member.name }}</h3>
                  <p class="member-role-text">{{ member.role }}</p>
                  <div class="divider"></div>
                  <p class="member-description">{{ member.description }}</p>
                  <p class="member-bio">{{ member.bio }}</p>

                  <!-- Skills/Tags -->
                  <div class="member-skills">
                    <span v-for="(skill, i) in member.skills" :key="i" class="skill-tag">
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>
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
    name: 'Kevin Manno',
    role: 'Full Stack Developer',
    description: 'Sviluppatore full stack appassionato di tecnologie moderne, specializzato in Vue.js, Node.js e architetture scalabili.',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    image: 'https://i.postimg.cc/W3GkGzQ2/profile-demo.jpg',
    skills: ['Vue.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'UI/UX']
  },
  {
    name: 'Cinzia Buttironi',
    role: 'Falegnameria e Restaurazione',
    description: 'Esperta artigiana specializzata nella lavorazione del legno, costruzione di strutture per cabinati e restauro di pezzi vintage.',
    bio: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    image: 'images/IMG-20250209-WA0010.jpg',
    skills: ['Falegnameria', 'Restauro Legno', 'Carpenteria', 'Design Strutturale', 'Verniciatura']
  }
]
</script>

<style scoped>
/* --- HERO --- */
.hero {
  background: linear-gradient(135deg, #1e3c72, #3f51b5);
  border-bottom: 4px solid #ffc107;
  padding: 3rem 0;
  margin-top: 0;
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

/* --- TEAM SECTION --- */
.team-section {
  margin-top: 60px;
}

.team-subtitle {
  font-size: 1.2rem;
  color: #777;
  margin-top: 10px;
}

.team-member-section {
  padding: 80px 0;
  position: relative;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
}

.team-member-section.reverse .row {
  flex-direction: row-reverse;
}

/* Member Image Container */
.member-image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.image-glow-effect {
  position: absolute;
  width: 80%;
  height: 80%;
  background: radial-gradient(circle, rgba(255, 193, 7, 0.2) 0%, transparent 70%);
  filter: blur(40px);
  animation: glow 3s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% {
    transform: scale(0.9);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.member-photo {
  width: 100%;
  max-width: 400px;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 20px;
  position: relative;
  z-index: 1;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border: 5px solid #ffc107;
  transition: all 0.4s ease;
}

.member-photo:hover {
  transform: scale(1.05) rotate(-2deg);
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2);
}

.member-badge {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
  color: #000;
  padding: 10px 25px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.9rem;
  z-index: 2;
  box-shadow: 0 8px 20px rgba(255, 193, 7, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Member Info */
.member-info {
  padding: 20px 0;
}

.member-name {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 800;
  color: #1e3c72;
  margin-bottom: 10px;
}

.member-role-text {
  font-size: 1.3rem;
  color: #ffc107;
  font-weight: 600;
  margin-bottom: 20px;
}

.divider {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #ffc107 0%, #ff9800 100%);
  margin: 20px 0;
  border-radius: 2px;
}

.member-description {
  font-size: 1.15rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 20px;
  font-weight: 500;
}

.member-bio {
  font-size: 1.05rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 30px;
  text-align: justify;
}

/* Skills */
.member-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 25px;
}

.skill-tag {
  display: inline-block;
  padding: 10px 20px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: 2px solid #ffc107;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  color: #1e3c72;
  transition: all 0.3s ease;
  cursor: default;
}

.skill-tag:hover {
  background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
  color: #000;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 193, 7, 0.3);
}

/* --- MISSION --- */
.mission-section {
  background: #f8f9fa;
}

/* --- RESPONSIVE --- */
@media (max-width: 992px) {
  .team-member-section {
    padding: 60px 0;
  }

  .team-member-section.reverse .row {
    flex-direction: column;
  }

  .member-photo {
    max-width: 300px;
  }

  .member-info {
    text-align: center;
  }

  .divider {
    margin-left: auto;
    margin-right: auto;
  }

  .member-skills {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .team-member-section {
    padding: 40px 0;
  }

  .member-photo {
    max-width: 250px;
  }

  .member-badge {
    font-size: 0.8rem;
    padding: 8px 20px;
  }

  .member-bio {
    text-align: left;
  }

  .skill-tag {
    font-size: 0.85rem;
    padding: 8px 16px;
  }
}
</style>
