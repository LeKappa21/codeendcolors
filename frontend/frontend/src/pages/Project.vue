<template>
    <section class="projects py-5">
      <div class="container">
        <h1 class="text-center mb-5">I Nostri Progetti</h1>
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
  .projects {
    background-color: #f8f9fa;
  }
  
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  
  .card-title {
    font-weight: bold;
  }
  
  .card-text {
    font-size: 0.95rem;
    color: #555;
  }
  </style>
  