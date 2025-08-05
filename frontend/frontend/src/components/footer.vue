<template>
    <footer class="footer text-white py-4 mt-5">
      <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        
        <div class="footer-brand mb-3 mb-md-0">
          <span class="fw-bold">
            CODE <span class="text-end-footer">END</span>
            <span class="text-colors-footer">COLORS</span>
          </span>
        </div>
  
        <ul class="footer-nav list-unstyled d-flex gap-3 mb-3 mb-md-0">
          <li><a href="#" class="text-white text-decoration-none">Home</a></li>
          <li><a href="#" class="text-white text-decoration-none">Modelli</a></li>
          <li><a href="#" class="text-white text-decoration-none">Contatti</a></li>
        </ul>
  
        <div class="footer-social d-flex gap-3">
          <a href="#" class="text-white"><i class="bi bi-facebook"></i></a>
          <a href="#" class="text-white"><i class="bi bi-instagram"></i></a>
          <a href="#" class="text-white"><i class="bi bi-envelope"></i></a>
        </div>
      </div>
  
      <div class="text-center mt-3 small text-secondary">
        © 2025 CODE END COLORS. Tutti i diritti riservati.
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  // Nessun JS per ora, ma puoi aggiungere dinamica se vuoi
  </script>
  
  <style scoped>
  .footer {
    background-color: #1c1c1c;
  }
  
  .text-end-footer {
    color: #2980b9;
  }
  
  .text-colors-footer {
    color: #16a085;
  }
  
  .footer-social a:hover,
  .footer-nav a:hover {
    opacity: 0.7;
  }
  </style>
  