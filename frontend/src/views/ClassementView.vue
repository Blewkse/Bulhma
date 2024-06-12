<template>
  <div id="app">
    <main>
      <h1>Classement des joueurs</h1>
      <table class="player-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Forehand win</th>
            <th>Backhand win</th>
            <th>Fault</th>
            <th>Smash</th>
            <th>Serve fault</th>
            <th>Marked points</th>
            <th>Tasked points</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in players" :key="player.name">
            <td>{{ player.name }}</td>
            <td>{{ player.forehandWin }}</td>
            <td>{{ player.backhandWin }}</td>
            <td>{{ player.fault }}</td>
            <td>{{ player.smash }}</td>
            <td>{{ player.serveFault }}</td>
            <td>{{ player.markedPoints }}</td>
            <td>{{ player.taskedPoints }}</td>
            <td>{{ player.wins }}</td>
            <td>{{ player.losses }}</td>
            <td>{{ player.points }}</td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Player {
  name: string
  forehandWin: number
  backhandWin: number
  fault: number
  smash: number
  serveFault: number
  markedPoints: number
  taskedPoints: number
  wins: number
  losses: number
  points: number
}

export default defineComponent({
  data() {
    return {
      players: [
        {
          name: 'Roger Federer',
          forehandWin: 600,
          backhandWin: 500,
          fault: 100,
          smash: 300,
          serveFault: 50,
          markedPoints: 1500,
          taskedPoints: 700,
          wins: 1242,
          losses: 271,
          points: 13000
        },
        {
          name: 'Rafael Nadal',
          forehandWin: 700,
          backhandWin: 450,
          fault: 120,
          smash: 280,
          serveFault: 60,
          markedPoints: 1400,
          taskedPoints: 680,
          wins: 1020,
          losses: 210,
          points: 12000
        },
        {
          name: 'Novak Djokovic',
          forehandWin: 650,
          backhandWin: 520,
          fault: 110,
          smash: 290,
          serveFault: 55,
          markedPoints: 1450,
          taskedPoints: 690,
          wins: 950,
          losses: 190,
          points: 14000
        },
        {
          name: 'Andy Murray',
          forehandWin: 400,
          backhandWin: 300,
          fault: 90,
          smash: 200,
          serveFault: 40,
          markedPoints: 1000,
          taskedPoints: 500,
          wins: 670,
          losses: 210,
          points: 8500
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
