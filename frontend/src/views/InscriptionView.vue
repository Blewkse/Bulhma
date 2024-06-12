<template>
  <div class="inscription">
    <div class="signup-form">
      <h2>Inscription</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="name">Fullname</label>
          <input type="text" id="fullname" v-model="fullname" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirm password</label>
          <input type="password" id="confirm-password" v-model="confirmPassword" required />
        </div>
        <button type="submit">Sign in</button>
      </form>
      <div class="redirect-text">
        <p>Already have an account? <a href="/connexion">Sign in</a></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const fullname = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const register = () => {
  alert(
    `Nom: ${fullname.value}\nEmail: ${email.value}\nMot de passe: ${password.value}\nConfirmer le mot de passe: ${confirmPassword.value}`
  )
}
</script>

<style scoped>
.inscription {
  display: flex;
  height: calc(100vh - 78px);
}

.signup-form {
  width: calc(100vh - 44px);
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.redirect-text {
  text-align: center;
  margin-top: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 8px;

  button {
    margin-top: 20px;
  }
}
</style>
