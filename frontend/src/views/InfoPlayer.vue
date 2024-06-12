<template>
  <div id="app">
    <main>
      <h1>Infos players</h1>
      <table class="player-table">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Rank</th>
            <th>Best rank</th>
            <th>Worst rank</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in players" :key="player.firstname + player.lastname">
            <td>{{ player.firstname }}</td>
            <td>{{ player.lastname }}</td>
            <td>{{ player.rank }}</td>
            <td>{{ player.bestRank }}</td>
            <td>{{ player.worstRank }}</td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Player {
  firstname: string
  lastname: string
  rank: number
  bestRank: number
  worstRank: number
}

export default defineComponent({
  data() {
    return {
      players: [
        {
          firstname: 'Roger',
          lastname: 'Federer',
          rank: 600,
          bestRank: 100,
          worstRank: 500
        },
        {
          firstname: 'Rafael',
          lastname: 'Nadal',
          rank: 600,
          bestRank: 100,
          worstRank: 800
        },
        {
          firstname: 'Novak',
          lastname: 'Djokovic',
          rank: 10,
          bestRank: 1,
          worstRank: 800
        },
        {
          firstname: 'Andy',
          lastname: 'Murray',
          rank: 8,
          bestRank: 4,
          worstRank: 200
        }
      ] as Player[]
    }
  }
})
</script>

<style scoped>
main {
  display: flex;
  height: calc(100vh - 78px);
  flex-direction: column;
}

h1 {
  display: flex;
  justify-content: center;
  width: 100%;
}

.player-table {
  max-width: 1000px;
  margin: auto;
  border-collapse: collapse;
  width: 100%;
}

.player-table th,
.player-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.player-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>
