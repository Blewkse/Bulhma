<template>
  <div id="app">
    <main>
      <h1>Classement des joueurs</h1>
      <table class="player-table">
        <thead>
        <tr>
          <th>Nom</th>
          <th>Victoires</th>
          <th>Défaites</th>
          <th>Points</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="player in players" :key="player.name">
          <td>{{ player.name }}</td>
          <td>{{ player.wins }}</td>
          <td>{{ player.losses }}</td>
          <td>{{ player.points }}</td>
        </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      players: [
        { name: 'Roger Federer', wins: 1242, losses: 271, points: 13000 },
        { name: 'Rafael Nadal', wins: 1020, losses: 210, points: 12000 },
        { name: 'Novak Djokovic', wins: 950, losses: 190, points: 14000 },
        { name: 'Andy Murray', wins: 670, losses: 210, points: 8500 }
      ]
    }
  }
}
</script>

<style scoped>
main{
  display: flex;
  height: calc(100vh - 78px);
  flex-direction: column;
}

h1{
  display: flex;
  justify-content: center;
  width: 100%;
}
.player-table {
  max-width: 600px;
  margin: auto;
  border-collapse: collapse;
  width: 100%;
}

.player-table th, .player-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.player-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
