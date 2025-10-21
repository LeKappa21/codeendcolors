<template>
  <section class="contatti-page">
    <!-- HERO SECTION -->
    <div class="hero-section">
      <div class="hero-background"></div>
      <div class="container">
        <div class="hero-content" data-aos="fade-up">
          <h1 class="hero-title">Contattaci</h1>
          <p class="hero-subtitle">
            Hai un'idea da realizzare? Vuoi un preventivo personalizzato?<br />
            Compila il form e ti risponderemo al più presto!
          </p>
        </div>
      </div>
    </div>

    <!-- FORM SECTION -->
    <section class="form-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="contact-card" data-aos="fade-up">
              <div class="card-header-custom">
                <div class="icon-wrapper">
                  <span class="contact-icon">✉️</span>
                </div>
                <h2 class="form-title">Inviaci un messaggio</h2>
                <p class="form-subtitle">Compila il modulo qui sotto e ti ricontatteremo entro 24 ore</p>
              </div>

              <!-- Messaggio di successo (visibile solo dopo l'invio) -->
              <div v-if="formSubmitted" class="success-container">
                <div class="success-icon">✓</div>
                <h3 class="success-title">Messaggio Inviato con Successo!</h3>
                <p class="success-text">{{ successMessage }}</p>
                <p class="redirect-info">Verrai reindirizzato alla home tra <strong>{{ countdown }}</strong> secondi...</p>
              </div>

              <!-- Form (nascosto dopo l'invio con successo) -->
              <form v-else class="contact-form" @submit.prevent="handleSubmit">
                <!-- Messaggio di errore -->
                <div v-if="errorMessage" class="alert alert-error">
                  {{ errorMessage }}
                </div>

                <div class="form-group">
                  <label for="name" class="form-label-custom">Nome completo</label>
                  <input
                    type="text"
                    id="name"
                    v-model="formData.name"
                    class="form-input-custom"
                    placeholder="Es. Mario Rossi"
                    required
                    :disabled="isSubmitting"
                  />
                </div>

                <div class="form-group">
                  <label for="email" class="form-label-custom">Email</label>
                  <input
                    type="email"
                    id="email"
                    v-model="formData.email"
                    class="form-input-custom"
                    placeholder="mario.rossi@example.com"
                    required
                    :disabled="isSubmitting"
                  />
                </div>

                <div class="form-group">
                  <label for="message" class="form-label-custom">Messaggio</label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    class="form-input-custom textarea-custom"
                    rows="8"
                    placeholder="Scrivi qui il tuo messaggio..."
                    required
                    :disabled="isSubmitting"
                  ></textarea>
                </div>

                <button type="submit" class="submit-button" :disabled="isSubmitting">
                  <span v-if="!isSubmitting">Invia messaggio</span>
                  <span v-else>Invio in corso...</span>
                  <span class="button-arrow" v-if="!isSubmitting">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INFO SECTION -->
    <section class="info-section">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="0">
            <div class="info-card">
              <div class="info-icon">📧</div>
              <h3 class="info-title">Email</h3>
              <p class="info-text">info@codeandcolors.it</p>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div class="info-card">
              <div class="info-icon">📱</div>
              <h3 class="info-title">Telefono</h3>
              <p class="info-text">+39 123 456 7890</p>
            </div>
          </div>
          <div class="col-md-4" data-aos="fade-up" data-aos-delay="400">
            <div class="info-card">
              <div class="info-icon">📍</div>
              <h3 class="info-title">Sede</h3>
              <p class="info-text">Roma, Italia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// API endpoint
const API_URL = 'http://localhost:3001/api/contact'

// Stato del form
const formData = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')
const formSubmitted = ref(false)
const countdown = ref(4)

// Funzione per avviare il countdown e reindirizzare
const startCountdown = () => {
  const interval = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(interval)
      router.push('/') // Redirect alla home
    }
  }, 1000) // Ogni secondo
}

// Funzione per gestire l'invio del form
const handleSubmit = async () => {
  // Reset messaggi
  successMessage.value = ''
  errorMessage.value = ''
  isSubmitting.value = true

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData.value)
    })

    const data = await response.json()

    if (response.ok && data.success) {
      successMessage.value = data.message
      formSubmitted.value = true // Nasconde il form e mostra il messaggio di successo

      // Reset form
      formData.value = {
        name: '',
        email: '',
        message: ''
      }

      // Avvia il countdown e redirect
      startCountdown()
    } else {
      errorMessage.value = data.error || 'Errore durante l\'invio del messaggio'
    }
  } catch (error) {
    console.error('Errore:', error)
    errorMessage.value = 'Errore di connessione. Verifica che il backend sia avviato.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* GLOBAL STYLES */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* HERO SECTION */
.hero-section {
  position: relative;
  padding: 120px 0 80px;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #3f6eb8 100%);
  z-index: 0;
}

.hero-background::before {
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

.hero-content {
  position: relative;
  z-index: 1;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 20px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  color: #fff;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

/* FORM SECTION */
.form-section {
  padding: 80px 0;
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
}

.form-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.form-section .row {
  justify-content: center;
}

.contact-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 50px 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  border: 2px solid rgba(255, 193, 7, 0.2);
  transition: all 0.3s ease;
  margin: 0 auto;
}

.contact-card:hover {
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.15);
  transform: translateY(-5px);
}

.card-header-custom {
  text-align: center;
  margin-bottom: 40px;
}

.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #ffc107 0%, #ff9800 100%);
  border-radius: 50%;
  margin-bottom: 25px;
  box-shadow: 0 10px 30px rgba(255, 193, 7, 0.3);
}

.contact-icon {
  font-size: 2.5rem;
}

.form-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: #1e3c72;
  margin-bottom: 15px;
  position: relative;
}

.form-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: #ffc107;
  margin: 15px auto 0;
  border-radius: 2px;
}

.form-subtitle {
  font-size: 1.1rem;
  color: #666;
  margin-top: 20px;
}

/* SUCCESS CONTAINER */
.success-container {
  text-align: center;
  padding: 80px 40px;
  animation: fadeInScale 0.5s ease;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.success-icon {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  font-size: 4rem;
  color: white;
  box-shadow: 0 10px 30px rgba(40, 167, 69, 0.3);
  animation: checkPulse 1s ease infinite;
}

@keyframes checkPulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.success-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: #1e3c72;
  margin-bottom: 20px;
}

.success-text {
  font-size: 1.15rem;
  color: #28a745;
  margin-bottom: 30px;
  font-weight: 600;
}

.redirect-info {
  font-size: 1.05rem;
  color: #666;
  font-weight: 500;
}

.redirect-info strong {
  color: #ffc107;
  font-size: 1.3rem;
  font-weight: 800;
}

/* ALERT STYLES */
.alert {
  padding: 15px 20px;
  border-radius: 10px;
  margin-bottom: 25px;
  font-weight: 600;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.alert-error {
  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
  color: #721c24;
  border: 2px solid #dc3545;
}

/* FORM STYLES */
.contact-form {
  margin-top: 40px;
}

.form-group {
  margin-bottom: 30px;
}

.form-label-custom {
  display: block;
  font-weight: 600;
  color: #1e3c72;
  margin-bottom: 10px;
  font-size: 1.05rem;
}

.form-input-custom {
  width: 100%;
  padding: 15px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  color: #333;
  transition: all 0.3s ease;
  background: #f8f9fa;
}

.form-input-custom:focus {
  outline: none;
  border-color: #ffc107;
  background: #ffffff;
  box-shadow: 0 5px 15px rgba(255, 193, 7, 0.2);
}

.form-input-custom::placeholder {
  color: #999;
}

.textarea-custom {
  resize: vertical;
  min-height: 150px;
  font-family: inherit;
}

.submit-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 50px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  color: #fff;
  border: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 10px 25px rgba(30, 60, 114, 0.3);
  width: 100%;
  justify-content: center;
  margin-top: 20px;
}

.submit-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(30, 60, 114, 0.4);
  background: linear-gradient(135deg, #2a5298 0%, #3f6eb8 100%);
}

.button-arrow {
  font-size: 1.3rem;
  transition: transform 0.3s;
}

.submit-button:hover .button-arrow {
  transform: translateX(5px);
}

/* INFO SECTION */
.info-section {
  padding: 80px 0 120px;
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%);
}

.info-section .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.info-section .row {
  justify-content: center;
  align-items: stretch;
}

.info-card {
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 2px solid transparent;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.info-card:hover {
  transform: translateY(-10px);
  border-color: #ffc107;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
}

.info-icon {
  font-size: 3.5rem;
  margin-bottom: 20px;
  display: block;
}

.info-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3c72;
  margin-bottom: 15px;
}

.info-text {
  font-size: 1.05rem;
  color: #666;
  margin: 0;
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .hero-section {
    padding: 100px 0 60px;
  }

  .form-section {
    padding: 60px 0;
  }

  .contact-card {
    padding: 40px 30px;
  }

  .info-section {
    padding: 60px 0 100px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 80px 0 50px;
  }

  .contact-card {
    padding: 35px 25px;
  }

  .card-header-custom {
    margin-bottom: 30px;
  }

  .icon-wrapper {
    width: 70px;
    height: 70px;
  }

  .contact-icon {
    font-size: 2rem;
  }

  .form-group {
    margin-bottom: 25px;
  }

  .submit-button {
    padding: 16px 40px;
    font-size: 1rem;
  }

  .info-card {
    padding: 35px 25px;
    margin-bottom: 20px;
  }
}
</style>
