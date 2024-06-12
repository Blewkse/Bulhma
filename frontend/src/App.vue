<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="home">
    <div class="img">
      <img src="./assets/balle-tennis.png" />
    </div>
    <RouterLink to="/"><h1>Bulhma</h1></RouterLink>
    <nav>
      <RouterLink to="/connexion">Connexion</RouterLink>
    </nav>
  </div>
  <div class="redirect">
    <RouterLink to="/match">Match</RouterLink>
    <RouterLink to="/info">Info player</RouterLink>
    <RouterLink to="/caracteristique">Caractéristique</RouterLink>
    <RouterLink to="/classement">Classement</RouterLink>
  </div>

  <RouterView />
</template>

<style scoped>
.redirect {
  display: flex;
  text-transform: uppercase;
  justify-content: space-evenly;
  width: 100%;
  background-color: deepskyblue;
}

.home {
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.home h1 {
  font-size: 30px;
}

.home img {
  width: 40px;
}

nav {
  font-size: 15px;
}
</style>
