<template>
  <section class="projects-page">
    <!-- HERO -->
    <div class="hero text-center py-5 text-white">
      <div class="container">
        <h1 class="fw-bold mb-3">I Nostri Progetti</h1>
        <p class="lead text-light">
          Scopri i nostri cabinati arcade personalizzati, realizzati con passione e attenzione ai dettagli.
        </p>
      </div>
    </div>

    <!-- PROJECTS SECTION -->
    <section class="projects py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-4" v-for="(project, index) in projects" :key="index">
            <div class="card h-100 shadow-sm">
              <img :src="project.image" class="card-img-top" :alt="project.title" />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
                <a href="#" class="btn btn-primary mt-auto">Scopri di più</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
  
  <script setup lang="ts">
  const projects = [
    {
      title: 'Bartop Retro',
      description: 'Cabinato in stile retrò con grafica personalizzata e pulsanti LED.',
      image: 'https://madeforarcade.com/wp-content/uploads/2022/05/bartop.webp'
    },
    {
      title: 'Mini Arcade',
      description: 'Versione compatta per piccoli spazi, perfetto per i nostalgici.',
      image: 'https://i.ebayimg.com/images/g/PIoAAOSw2JRl~b1L/s-l1600.webp'
    },
    {
      title: 'Custom Full Size',
      description: 'Cabinato full-size per esperienze arcade complete e immersive.',
      image: 'https://media.gqitalia.it/photos/6065e1797e700acff2f6451c/16:9/w_2560%2Cc_limit/IIRCADE-KICKSTARTER-GFX39-1.jpg'
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

/* --- PROJECTS SECTION --- */
.projects {
  background-color: #f8f9fa;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card {
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border-color: #ffc107;
}

.card-title {
  font-weight: 700;
  color: #1e3c72;
}

.card-text {
  font-size: 0.95rem;
  color: #555;
}

.btn-primary {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  border: none;
  padding: 0.6rem 1.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #2a5298 0%, #3f6eb8 100%);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(30, 60, 114, 0.4);
}

/* --- RESPONSIVE --- */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }
}
</style>
  