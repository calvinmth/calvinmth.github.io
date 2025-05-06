<template>
  <div id="game-container">
    <canvas ref="gameCanvas" width="400" height="400"></canvas>
  </div>
  <!-- <div>
    <Button @click="resetGame" id="retry-button">Retry</Button>
  </div> -->
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

interface Position {
  x: number;
  y: number;
}

const gameCanvas = ref<HTMLCanvasElement | null>(null);
const context = ref<CanvasRenderingContext2D | null>(null);

const gridSize = 20;
const snake: Position[] = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 },
]; // Initial snake length is 3 boxes
let food: Position = { x: 15, y: 15 };
let direction: Position = { x: 1, y: 0 }; // Initialize direction to move right
let gameInterval: number;

const drawRect = (x: number, y: number, color: string) => {
  if (context.value) {
    context.value.fillStyle = color;
    context.value.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
  }
};

const spawnFood = () => {
  food = {
    x: Math.floor(Math.random() * (400 / gridSize)),
    y: Math.floor(Math.random() * (400 / gridSize)),
  };
};

const updateGame = () => {
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

  // Check for collisions with walls or self
  if (
    head.x < 0 ||
    head.y < 0 ||
    head.x >= 400 / gridSize ||
    head.y >= 400 / gridSize ||
    snake.some(segment => segment.x === head.x && segment.y === head.y)
  ) {
    clearInterval(gameInterval);
    alert('Game Over!');
    return;
  }

  snake.unshift(head);

  // Check if the snake eats the food
  if (head.x === food.x && head.y === food.y) {
    spawnFood();
  } else {
    snake.pop();
  }

  drawGame();
};

const drawGame = () => {
  if (context.value) {
    context.value.clearRect(0, 0, 400, 400);

    // Draw food
    drawRect(food.x, food.y, 'red');

    // Draw snake
    snake.forEach(segment => drawRect(segment.x, segment.y, 'green'));
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'ArrowUp':
      if (direction.y === 0) direction = { x: 0, y: -1 };
      break;
    case 'ArrowDown':
      if (direction.y === 0) direction = { x: 0, y: 1 };
      break;
    case 'ArrowLeft':
      if (direction.x === 0) direction = { x: -1, y: 0 };
      break;
    case 'ArrowRight':
      if (direction.x === 0) direction = { x: 1, y: 0 };
      break;
  }
};

// const resetGame = () => {
//   snake.splice(0, snake.length, { x: 10, y: 10 }, { x: 9, y: 10 }, { x: 8, y: 10 });
//   direction = { x: 1, y: 0 };
//   spawnFood();
//   if (!gameInterval) {
//     gameInterval = setInterval(updateGame, 100);
//   }
// };

// Add touch event listeners for swipe controls
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

const handleTouchStart = (event: TouchEvent) => {
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
};

const handleTouchMove = (event: TouchEvent) => {
  touchEndX = event.touches[0].clientX;
  touchEndY = event.touches[0].clientY;
};

const handleTouchEnd = () => {
  const diffX = touchEndX - touchStartX;
  const diffY = touchEndY - touchStartY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    // Horizontal swipe
    if (diffX > 0 && direction.x === 0) {
      direction = { x: 1, y: 0 }; // Swipe right
    } else if (diffX < 0 && direction.x === 0) {
      direction = { x: -1, y: 0 }; // Swipe left
    }
  } else {
    // Vertical swipe
    if (diffY > 0 && direction.y === 0) {
      direction = { x: 0, y: 1 }; // Swipe down
    } else if (diffY < 0 && direction.y === 0) {
      direction = { x: 0, y: -1 }; // Swipe up
    }
  }
};

onMounted(() => {
  if (gameCanvas.value) {
    context.value = gameCanvas.value.getContext('2d');
  }

  window.addEventListener('keydown', handleKeydown);

  // Add touch event listeners for mobile controls
  if (gameCanvas.value) {
    gameCanvas.value.addEventListener('touchstart', handleTouchStart);
    gameCanvas.value.addEventListener('touchmove', handleTouchMove);
    gameCanvas.value.addEventListener('touchend', handleTouchEnd);
  }

  gameInterval = setInterval(updateGame, 100);

  return () => {
    clearInterval(gameInterval);
    window.removeEventListener('keydown', handleKeydown);

    // Remove touch event listeners
    if (gameCanvas.value) {
      gameCanvas.value.removeEventListener('touchstart', handleTouchStart);
      gameCanvas.value.removeEventListener('touchmove', handleTouchMove);
      gameCanvas.value.removeEventListener('touchend', handleTouchEnd);
    }
  };
});
</script>

<style scoped>
#game-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  /* background-color: #000; */
}

canvas {
  border: 1px solid #fff;
}
</style>