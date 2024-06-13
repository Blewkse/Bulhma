<template>
  <main>
    <div class="container-global">
      <h1>Caractéristique</h1>
      <div class="container-carac">
        <img src="../assets/90811-image2_448x448.png" class="rotating-image" />

        <table>
          <thead>
            <tr>
              <th>Compétence</th>
              <th>Stat</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Service</td>
              <td>{{ serviceStat }}</td>
              <td>
                <button @click="increaseStat('service')">+</button>
                <button @click="decreaseStat('service')">-</button>
              </td>
            </tr>
            <tr>
              <td>Backhand</td>
              <td>{{ backhandStat }}</td>
              <td>
                <button @click="increaseStat('backhand')">+</button>
                <button @click="decreaseStat('backhand')">-</button>
              </td>
            </tr>
            <tr>
              <td>Forehand</td>
              <td>{{ forehandStat }}</td>
              <td>
                <button @click="increaseStat('forehand')">+</button>
                <button @click="decreaseStat('forehand')">-</button>
              </td>
            </tr>
            <tr>
              <td>Smash</td>
              <td>{{ smashStat }}</td>
              <td>
                <button @click="increaseStat('smash')">+</button>
                <button @click="decreaseStat('smash')">-</button>
              </td>
            </tr>
            <tr>
              <td>Accurate</td>
              <td>{{ accurateStat }}</td>
              <td>
                <button @click="increaseStat('accurate')">+</button>
                <button @click="decreaseStat('accurate')">-</button>
              </td>
            </tr>
            <tr>
              <td>Attribution point</td>
              <td>{{ availablePoints }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      serviceStat: 50,
      backhandStat: 50,
      forehandStat: 50,
      smashStat: 50,
      accurateStat: 50,
      availablePoints: 5
    }
  },
  methods: {
    increaseStat(skill: string) {
      if (this.availablePoints > 0) {
        switch (skill) {
          case 'service':
            this.serviceStat++
            break
          case 'backhand':
            this.backhandStat++
            break
          case 'forehand':
            this.forehandStat++
            break
          case 'smash':
            this.smashStat++
            break
          case 'accurate':
            this.accurateStat++
            break
        }
        this.availablePoints--
      }
    },
    decreaseStat(skill: string) {
      switch (skill) {
        case 'service':
          if (this.serviceStat > 0) {
            this.serviceStat--
            this.availablePoints++
          }
          break
        case 'backhand':
          if (this.backhandStat > 0) {
            this.backhandStat--
            this.availablePoints++
          }
          break
        case 'forehand':
          if (this.forehandStat > 0) {
            this.forehandStat--
            this.availablePoints++
          }
          break
        case 'smash':
          if (this.smashStat > 0) {
            this.smashStat--
            this.availablePoints++
          }
          break
        case 'accurate':
          if (this.accurateStat > 0) {
            this.accurateStat--
            this.availablePoints++
          }
          break
      }
    }
  }
})
</script>

<style scoped>
.container-global {
  width: 100%;
}

h1 {
  display: flex;
  justify-content: center;
}

.container-carac {
  display: flex;
  margin-top: 100px;
}

.rotating-image {
  width: 40%;
  height: 40%;
  animation: rotateImage 4s linear infinite;
  transform-origin: center;
}

@keyframes rotateImage {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #4caf50;
}
</style>
