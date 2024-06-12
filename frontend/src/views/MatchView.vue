<template>
  <div class="court" :style="{ backgroundColor: courtColor }">
    <div class="net"></div>
    <div class="racket" id="racket1"></div>
    <div class="player-name" id="player1">{{ player1Name }}</div>
    <div class="racket" id="racket2"></div>
    <div class="player-name" id="player2">{{ player2Name }}</div>
    <div class="ball"></div>
    <button class="reload-button" @click="reloadDOM">Start match</button>
    <div class="buttons">
      <button @click="changeCourtColor('orange')">Terre battue</button>
      <button @click="changeCourtColor('green')">Gazon</button>
      <button @click="changeCourtColor('blue')">Dur</button>
    </div>
    <div class="scoreboard">
      <table>
        <caption>Score du Match</caption>
        <thead>
        <tr>
          <th></th>
          <th>{{ player1Name }}</th>
          <th>{{ player2Name }}</th>
        </tr>
        </thead>
        <tbody style="width: 100%; z-index: 1000; color: black;">
        <tr>
          <td>Sets</td>
          <td>{{ player1Sets }}</td>
          <td>{{ player2Sets }}</td>
        </tr>
        <tr>
          <td>Games</td>
          <td>{{ player1Games }}</td>
          <td>{{ player2Games }}</td>
        </tr>
        <tr>
          <td>Points</td>
          <td>{{ player1Points }}</td>
          <td>{{ player2Points }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Define a union type for points
type Point = 0 | 15 | 30 | 40 | 'Adv';

const courtColor = ref('#4CAF50');
const player1Name = ref('Player 1');
const player2Name = ref('Player 2');

const player1Points = ref<Point>(0);
const player2Points = ref<Point>(0);
const player1Games = ref(0);
const player2Games = ref(0);
const player1Sets = ref(0);
const player2Sets = ref(0);

const pointMap: Point[] = [0, 15, 30, 40, 'Adv'];

const changeCourtColor = (color: string) => {
  switch (color) {
    case 'orange':
      courtColor.value = '#ff7f00';
      break;
    case 'green':
      courtColor.value = '#4CAF50';
      break;
    case 'blue':
      courtColor.value = '#7ba7c4';
      break;
    default:
      courtColor.value = '#4CAF50';
  }
};

const incrementPoints = (player: number) => {
  if (player === 1) {
    if (player1Points.value === 'Adv' || (typeof player1Points.value === 'number' && player1Points.value >= 40)) {
      player1Games.value++;
      resetPoints();
      checkGames(1);
    } else {
      player1Points.value = getNextPoint(player1Points.value);
    }
  } else {
    if (player2Points.value === 'Adv' || (typeof player2Points.value === 'number' && player2Points.value >= 40)) {
      player2Games.value++;
      resetPoints();
      checkGames(2);
    } else {
      player2Points.value = getNextPoint(player2Points.value);
    }
  }
};

const getNextPoint = (currentPoint: Point): Point => {
  if (currentPoint === 40) {
    return 'Adv';
  }
  const index = pointMap.indexOf(currentPoint);
  return pointMap[index + 1];
};

const resetPoints = () => {
  player1Points.value = 0;
  player2Points.value = 0;
};

const checkGames = (player: number) => {
  if (player === 1) {
    if (player1Games.value >= 6 && (player1Games.value - player2Games.value) >= 2) {
      player1Sets.value++;
      resetGames();
      checkSets(1);
    }
  } else {
    if (player2Games.value >= 6 && (player2Games.value - player1Games.value) >= 2) {
      player2Sets.value++;
      resetGames();
      checkSets(2);
    }
  }
};

const resetGames = () => {
  player1Games.value = 0;
  player2Games.value = 0;
};

const checkSets = (player: number) => {
  if (player === 1) {
    if (player1Sets.value === 3) {
      alert('Player 1 wins the match!');
      resetMatch();
    }
  } else {
    if (player2Sets.value === 3) {
      alert('Player 2 wins the match!');
      resetMatch();
    }
  }
};

const resetMatch = () => {
  player1Points.value = 0;
  player2Points.value = 0;
  player1Games.value = 0;
  player2Games.value = 0;
  player1Sets.value = 0;
  player2Sets.value = 0;
};

document.addEventListener('DOMContentLoaded', function () {
  const ball = document.querySelector('.ball') as HTMLElement | null;
  const racket1 = document.getElementById('racket1') as HTMLElement | null;
  const racket2 = document.getElementById('racket2') as HTMLElement | null;

  if (ball && racket1 && racket2) {
    const startLeft = racket1.offsetLeft + racket1.offsetWidth;
    const startTop = racket1.offsetTop + racket1.offsetHeight / 2;
    ball.style.left = startLeft + 'px';
    ball.style.top = startTop + 'px';

    const endLeft = racket2.offsetLeft - ball.offsetWidth;
    const endTop = racket2.offsetTop + racket2.offsetHeight / 2;

    ball.animate(
        [
          { left: startLeft + 'px', top: startTop + 'px' },
          { left: endLeft + 'px', top: endTop + 'px' }
        ],
        {
          duration: 2000,
          easing: 'ease-in-out',
          iterations: Infinity,
          direction: 'alternate'
        }
    );

    ball.addEventListener('animationiteration', () => {
      const random = Math.random();
      if (random < 0.5) {
        incrementPoints(1);
      } else {
        incrementPoints(2);
      }
    });
  }
});

const reloadDOM = () => {
  location.reload();
  window.location.reload();
};
</script>
<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #7ba7c4;
  margin: 0;
}

button {
  height: 30px;
}

.court {
  display: flex;
  justify-content: center;
  position: relative;
  height: calc(100vh - 84px);
  border: 5px solid white;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.net {
  position: absolute;
  margin-top: 30px;
  top: 0;
  left: 50%;
  width: 5px;
  height: 96%;
  background-color: white;
  transform: translateX(-50%);
}

.racket {
  position: absolute;
  width: 10px;
  height: 80px;
  background-color: white;
}

#racket1 {
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}

#racket2 {
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}

.player-name {
  position: absolute;
  color: white;
  font-size: 20px;
  font-weight: bold;
}

#player1 {
  top: 40%;
  left: 50px;
  transform: translateY(-50%);
}

#player2 {
  top: 40%;
  right: 50px;
  transform: translateY(-50%);
}

.ball {
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 20px;
  height: 20px;
  background-color: yellow;
  border-radius: 50%;
  animation: bounce 2s infinite ease-in-out;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-150px);
  }
}

.scoreboard {
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 30%;

}

table {
  color: #181818;
  width: 500px;
  border-collapse: collapse;
  height: 200px;
  margin: 0 auto;
  background-color: white;
  text-align: center;
  border: 2px solid #4CAF50;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

caption {
  font-size: 1.5em;
  margin-bottom: 10px;
  font-weight: bold;
  color: #333;
}

thead {
  background-color: #594caf;
  color: white;
}

th, td {
  padding: 12px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}
</style>
