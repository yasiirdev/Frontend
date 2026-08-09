const game_board = document.getElementById("gameborad");
const snake = document.querySelectorAll(".snake");
const foodSvg = document.getElementById("food");

let position = { x: 0, y: -1 };
let direction = "down";
const grid = 10;

let coordinates = [
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
];

// the main fun that crate new head move the snake
const upDate = function () {
  let newhead = {};

  if (direction === "down") {
    newhead = {
      x: position.x,
      y: ++position.y,
    };
  } else if (direction === "right") {
    newhead = {
      x: ++position.x,
      y: position.y,
    };
  } else if (direction === "left") {
    newhead = {
      x: --position.x,
      y: position.y,
    };
  } else if (direction === "up") {
    newhead = {
      x: position.x,
      y: --position.y,
    };
  }
  coordinates.unshift(newhead);
  //const snake_div = document.createElement("div");
  //snake_div.classList.add("snake");
  //  game_board.appendChild(snake_div);

  snake.forEach((sk, idx) => {
    sk.style.gridColumnStart = coordinates[idx].x;
    sk.style.gridRowStart = coordinates[idx].y;
  });

  coordinates.pop();
};

const foodPosition = () => {
  const x_random = Math.floor(Math.random() * grid);
  const y_random = Math.floor(Math.random() * grid);

  foodSvg.style.gridColumnStart = x_random;
  foodSvg.style.gridRowStart = y_random;
};

foodPosition();

const draw = () => {};

function speed() {
  upDate();

  if (
    coordinates[0].x === Number(foodSvg.style.gridColumnStart) &&
    coordinates[0].y === Number(foodSvg.style.gridRowStart)
  ) {
    foodPosition();
    const snake_div = document.createElement("div");
    snake_div.style.gridColumnStart = coordinates[0].x;
    snake_div.style.gridRowStart = coordinates[0].y;
    snake_div.classList.add("snake");
    game_board.appendChild(snake_div);
    coordinates.unshift({ x: coordinates[0].x, y: coordinates[0].y });
  }

  if (coordinates[0].y === grid || coordinates[0].x === grid) clearInterval(interval);
  else if (coordinates[0].y === -1 || coordinates[0].x === -1) clearInterval(interval);
}

const interval = setInterval(speed, 150);

const eventStart = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && e.key !== "ArrowDown") {
      direction = "up";
    }
    if (e.key === "ArrowRight" && e.key !== "ArrowLeft") {
      direction = "right";
    }
    if (e.key === "ArrowLeft" && e.key !== "ArrowRight") {
      direction = "left";
    }
    if (e.key === "ArrowDown" && e.key !== "ArrowUp") {
      direction = "down";
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  eventStart();
});

//if (direction.y >= grid || direction.x >= grid) {
//console.log("stop");
//clearInterval(interval);
//} else console.log("conitinous");
//speed()

/*
 
const board = document.getElementById('game-board');

// Grid dimensions
const GRID_SIZE = 20;

// Snake state
let snake = [
  { x: 10, y: 11 },
  { x: 10, y: 12 },
  { x: 10, y: 13 }
];
let direction = { x: 0, y: -1 }; // Moving UP initially

// 1. Listen for arrow keys to change direction
window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':    if (direction.y !== 0) break; direction = { x: 0, y: -1 }; break;
    case 'ArrowDown':  if (direction.y !== 0) break; direction = { x: 0, y: 1 }; break;
    case 'ArrowLeft':  if (direction.x !== 0) break; direction = { x: -1, y: 0 }; break;
    case 'ArrowRight': if (direction.x !== 0) break; direction = { x: 1, y: 0 }; break;
  }
});

// 2. The Game Loop
function main() {
  update();
  draw();
  setTimeout(main, 150); // Controls game speed (150ms per step)
}

// 3. Move the snake mathematically
function update() {
  // Calculate new head position
  const newHead = { 
    x: snake[0].x + direction.x, 
    y: snake[0].y + direction.y 
  };

  // Add new head
  snake.unshift(newHead); 
  
  // Remove tail (Skip this step if the snake eats food to make it grow)
  snake.pop(); 
}

// 4. Render the snake on the CSS Grid
function draw() {
  board.innerHTML = ''; // Clear previous frame
  
  snake.forEach(segment => {
    const snakeElement = document.createElement('div');
    
    // CSS Grid coordinates start at 1, not 0
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    
    snakeElement.classList.add('snake');
    board.appendChild(snakeElement);
  });
}

// Start the game
main();
 */
