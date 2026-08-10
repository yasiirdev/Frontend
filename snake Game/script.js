const game_board = document.getElementById("gameborad");
const foodSvg = document.getElementById("food");
let direction = { x: 0, y: 1 };
const grid = 13;

let coordinates = [{ x: 1, y: 1 }];

const main = () => {
  update();
  draw();
  eventStart();
};

const update = function () {
  let newhead = {
    x: coordinates[0].x + direction.x,
    y: coordinates[0].y + direction.y,
  };
  coordinates.unshift(newhead);

  coordinates.pop();
};

const draw = () => {
  game_board.innerHTML = "";
  coordinates.forEach((packet, idx) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridColumnStart = packet.x;
    snakeElement.style.gridRowStart = packet.y;
    snake_div.classList.add("snake");
    game_board.appendChild(snake_div);
  });
};

const foodPosition = () => {
  const x_random = Math.floor(Math.random() * grid) + 1;
  const y_random = Math.floor(Math.random() * grid) + 1;

  foodSvg.style.gridColumnStart = x_random;
  foodSvg.style.gridRowStart = y_random;
};

foodPosition();

function speed() {
  // if (
  //   coordinates[0].x === Number(foodSvg.style.gridColumnStart) &&
  //   coordinates[0].y === Number(foodSvg.style.gridRowStart)
  // ) {
  //   foodPosition();
  //   const snake_div = document.createElement("div");
  //   snake_div.style.gridColumnStart = coordinates[0].x;
  //   snake_div.style.gridRowStart = coordinates[0].y;
  //   snake_div.classList.add("snake");
  //   game_board.appendChild(snake_div);
  //   coordinates.unshift({ x: coordinates[0].x, y: coordinates[0].y });
  // }

  if (coordinates[0].y >= grid || coordinates[0].x >= grid)
    clearInterval(interval);
  else if (coordinates[0].y === -1 || coordinates[0].x === -1)
    clearInterval(interval);
}

const interval = setInterval(speed, 150);

const eventStart = () => {
  let checkdir = "down";
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && checkdir !== "down") {
      checkdir = "up";
    }
    if (e.key === "ArrowRight" && checkdir !== "left") {
      checkdir = "right";
    }
    if (e.key === "ArrowLeft" && checkdir !== "right") {
      checkdir = "left";
    }
    if (e.key === "ArrowDown" && checkdir !== "up") {
      checkdir = "down";
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});

/*
 
const board = document.getElementById('game-board');

 Grid dimensions
const GRID_SIZE = 20;

 Snake state
let snake = [
  { x: 10, y: 11 },
  { x: 10, y: 12 },
  { x: 10, y: 13 }
];
let direction = { x: 0, y: -1 }; // Moving UP initially

 1. Listen for arrow keys to change direction
window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':    if (direction.y !== 0) break; direction = { x: 0, y: -1 }; break;
    case 'ArrowDown':  if (direction.y !== 0) break; direction = { x: 0, y: 1 }; break;
    case 'ArrowLeft':  if (direction.x !== 0) break; direction = { x: -1, y: 0 }; break;
    case 'ArrowRight': if (direction.x !== 0) break; direction = { x: 1, y: 0 }; break;
  }
});

 2. The Game Loop
function main() {
  update();
  draw();
  setTimeout(main, 150); // Controls game speed (150ms per step)
}

3. Move the snake mathematically
function update() {
  Calculate new head position
  const newHead = { 
    x: snake[0].x + direction.x, 
    y: snake[0].y + direction.y 
  };

  Add new head
  snake.unshift(newHead); 
  
   Remove tail (Skip this step if the snake eats food to make it grow)
  snake.pop(); 
}

 4. Render the snake on the CSS Grid
function draw() {
  board.innerHTML = ''; // Clear previous frame
  
  snake.forEach(segment => {
    const snakeElement = document.createElement('div');
    
     CSS Grid coordinates start at 1, not 0
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    
    snakeElement.classList.add('snake');
    board.appendChild(snakeElement);
  });
}

 Start the game
main();
 */
