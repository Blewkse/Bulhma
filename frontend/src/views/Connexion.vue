<script setup lang="ts">
</script>

<template>
  <div class="inscription">
      <div class="login-form">
        <h2>Connexion</h2>
        <form >
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email"  required>
          </div>
          <div class="form-group">
            <label for="password">Mot de passe</label>
            <input type="password" id="password"required>
          </div>
          <button type="submit">Se connecter</button>
        </form>
        <div class="redirect-text">
          <p>Pas encore inscrit ? <a href="/inscription">Inscrivez-vous ici</a></p>
        </div>
      </div>
  </div>
</template>

<style scoped>

.inscription{
  display: flex;
  height: calc(100vh - 48px);
}
.login-form {
  width: calc(100vh - 44px);
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
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
form{
  display: flex;
  flex-direction: column;
  gap: 8px;

  button{
    margin-top: 20px;
  }
}

</style>