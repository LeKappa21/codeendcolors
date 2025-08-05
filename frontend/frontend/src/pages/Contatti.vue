<template>
    <div class="container my-5">
      <h1>Contattaci</h1>
      <p>Compila il modulo qui sotto per richiedere informazioni.</p>
  
      <form class="mt-4">
        <div class="mb-3">
          <label for="name" class="form-label">Nome</label>
          <input type="text" id="name" class="form-control" />
        </div>
  
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" class="form-control" />
        </div>
  
        <div class="mb-3">
          <label for="message" class="form-label">Messaggio</label>
          <textarea id="message" class="form-control" rows="4"></textarea>
        </div>
  
        <button type="submit" class="btn btn-primary">Invia</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  // puoi aggiungere gestione del form se vuoi
  </script>
  