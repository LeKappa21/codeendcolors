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
        aria-controls="navbarNav"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu di navigazione -->
      <div class="collapse navbar-collapse" :class="{ show: isMenuOpen }" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-for="(item, i) in navItems" :key="i">
            <router-link
              class="nav-link"
              :to="item.route"
              active-class="active"
              exact-active-class="active"
              @click="closeMenu"
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
import { ref } from 'vue';

const navItems = [
  { label: 'Home', route: '/' },
  { label: 'Chi Siamo', route: '/about' },
  { label: 'Progetti', route: '/project' },
  { label: 'Contatti', route: '/contatti' }
];

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
.custom-navbar {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  padding: 1.2rem 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-bottom: 3px solid #ffc107;
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.custom-navbar:hover {
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.12);
}

.container-fluid {
  max-width: 1400px;
  margin: 0 auto;
}

.navbar-brand {
  font-weight: 800;
  font-size: 1.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: transform 0.3s ease;
}

.navbar-brand:hover {
  transform: scale(1.05);
}

.navbar-nav {
  gap: 1rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  transition: all 0.3s ease;
  color: #1e3c72 !important;
  font-size: 1.15rem;
  font-weight: 600;
  padding: 0.8rem 1.5rem !important;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.15) 0%, rgba(255, 152, 0, 0.15) 100%);
  transition: left 0.3s ease;
  z-index: -1;
  border-radius: 50px;
}

.nav-link:hover::before {
  left: 0;
}

.nav-link:hover {
  color: #1e3c72 !important;
  transform: translateY(-2px);
  background: linear-gradient(135deg, rgba(255, 193, 7, 0.2) 0%, rgba(255, 152, 0, 0.2) 100%);
}

.nav-link.active {
  background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
  color: #000 !important;
  font-weight: 700;
  box-shadow: 0 5px 15px rgba(255, 193, 7, 0.4);
  border: none;
}

.nav-link.active:hover {
  background: linear-gradient(135deg, #ff9800 0%, #f57c00 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 193, 7, 0.5);
}

/* Branding colors */
.text-code {
  color: #ff3b3b;
  font-weight: 900;
  text-shadow: 0 2px 8px rgba(255, 59, 59, 0.3);
}

.text-end {
  color: #1e3c72;
  font-weight: 700;
  font-style: italic;
}

.text-colors {
  color: #ffc107;
  font-weight: 900;
  text-shadow: 0 2px 8px rgba(255, 193, 7, 0.3);
}

.logo-img {
  height: 70px;
  width: 70px;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
}

.navbar-brand:hover .logo-img {
  transform: rotate(5deg) scale(1.1);
}

/* Mobile toggler */
.navbar-toggler {
  border: 2px solid #1e3c72;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.navbar-toggler:hover {
  background: rgba(30, 60, 114, 0.1);
  border-color: #ffc107;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(30, 60, 114, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

/* Responsive */
@media (max-width: 991px) {
  .custom-navbar {
    padding: 1rem 1.5rem;
  }

  .navbar-brand {
    font-size: 1.4rem;
  }

  .logo-img {
    height: 55px;
    width: 55px;
  }

  .navbar-collapse {
    margin-top: 1rem;
    padding: 1.5rem;
    background: rgba(248, 249, 250, 0.98);
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }

  .navbar-nav {
    gap: 0.5rem;
  }

  .nav-link {
    padding: 0.7rem 1.2rem !important;
    font-size: 1.1rem;
    text-align: center;
  }
}

@media (max-width: 576px) {
  .custom-navbar {
    padding: 0.8rem 1rem;
  }

  .navbar-brand {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }

  .logo-img {
    height: 45px;
    width: 45px;
  }
}
</style>
