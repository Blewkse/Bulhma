<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="home">
      <div class="img">
         <img src="./assets/balle-tennis.png"/>
      </div>
      <h1>Bulhma</h1>
      <nav>
        <RouterLink to="/connexion">Connexion</RouterLink>
      </nav>
    </div>
  <div class="redirect">
    <RouterLink to="/match">Match</RouterLink>
    <RouterLink to="/caracteristique">Caractéristique</RouterLink>
    <RouterLink to="/classement">Classement</RouterLink>
  </div>

  <RouterView />
</template>

<style scoped>
      .redirect{
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

        h1{
          font-size: 30px;
        }
        img{
          width: 40px;
        }
      }
      nav{
        font-size: 15px;
      }
      .redirect{
        display: flex;
        justify-content: center;
      }
</style>
