






























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
