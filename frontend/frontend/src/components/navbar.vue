<template>
  <nav class="navbar navbar-expand-lg navbar-dark custom-navbar">
    <div class="container-fluid">
      <!-- Logo e brand -->
      <router-link class="navbar-brand d-flex align-items-center gap-2" to="/">
        <img src="/images/code&colors.png" alt="Logo" class="logo-img" />
        <i class="bi bi-braces"></i>
        <span>
          <span class="text-code">CODE </span>
          <span class="text-end">AND </span>
          <span class="text-colors">COLORS</span>
        </span>
      </router-link>

      <!-- Bottone toggle mobile -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu di navigazione -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-for="(item, i) in navItems" :key="i">
            <router-link
              class="nav-link"
              :to="item.route"
              active-class="active"
              exact-active-class="active"
            >
              {{ item.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const navItems = [
  { label: 'Home', route: '/' },
  { label: 'Chi Siamo', route: '/about' },
  { label: 'Progetti', route: '/project' },
  { label: 'Contatti', route: '/contatti' }
];
</script>

<style scoped>
.custom-navbar {
  /* background: linear-gradient(90deg, #1e3c72, #2a5298); */
   background: linear-gradient(90deg, #2964ca,  #0e2041);
  padding: 0.5rem 0.5rem;
  font-size: 1.1rem;
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nav-link {
  transition: all 0.3s ease-in-out;
  color: white !important;
}

.nav-link:hover {
  color: #ffcc00 !important;
  transform: translateY(-1px);
}

.nav-link.active {
  color: #ffd700 !important;
  font-weight: bold;
  border-bottom: 2px solid #ffd700;
}

/* Branding colors */
.text-code {
  color: #d42626;
  font-weight: bold;
}
.text-end {
  color: #ececec;
  font-weight: bold;
}
.text-colors {
  color: #fded0b;
  font-weight: bold;
}


.logo-img {
  height: 60px; /* o come preferisci */
  width: 60px;
  margin-bottom: 0px;
  padding-bottom: 0px;
}

</style>
