let _DIR = { x: 0, y: 1 };
const GRID = 13;
let snake = [
  { x: 3, y: 1 },
  { x: 3, y: 2 },
  { x: 3, y: 3 },
];
// food state
let foodDir = { x: 3, y: 5 };
let interval = null;

const main = () => {
  update();
  draw();
  checkClearState();
};

document.querySelector(".start").style.display = "none";

document.querySelector(".start").addEventListener("click", (e) => {
  history.go(0);
  e.stopPropagation();
  document.querySelector(".start").style.display = "none";
  document.querySelector(".normal").style.display = "block";
  document.querySelector(".medium").style.display = "block";
  document.querySelector(".hard").style.display = "block";
});

document.querySelector(".normal").addEventListener("click", (e) => {
  e.stopPropagation();
  document.querySelector(".controler").style.display = "none";
  interval = setInterval(main, 250);
});

document.querySelector(".medium").addEventListener("click", (e) => {
  e.stopPropagation();
  document.querySelector(".controler").style.display = "none";
  interval = setInterval(main, 150);
});

document.querySelector(".hard").addEventListener("click", (e) => {
  e.stopPropagation();
  document.querySelector(".controler").style.display = "none";
  interval = setInterval(main, 100);
});

function clear() {
  clearInterval(interval);
  document.querySelector(".controler").style.display = "flex";
  document.querySelector(".gameboard").innerHTML = "";
  document.querySelector(".gameboard").classList.add("gameover");
  const gameOver = document.createElement("h1");
  gameOver.innerText = "Game Over";
  gameOver.classList.add("boardText");
  document.querySelector(".gameboard").appendChild(gameOver);

  document.querySelector(".normal").style.display = "none";
  document.querySelector(".medium").style.display = "none";
  document.querySelector(".hard").style.display = "none";
  document.querySelector(".start").style.display = "block";
}

function checkClearState() {
  if (snake[3]) {
    for (let i = 3; i <= snake.length; i++) {
      let elem = snake[i];
      snake[0].x == elem?.x && snake[0].y == elem?.y ? clear() : null;
    }
  }

  snake[0].y > GRID || snake[0].x > GRID || snake[0].y <= 0 || snake[0].x <= 0 ? clear() : null;
}

function update() {
  let newhead = {
    x: snake[0].x + _DIR.x,
    y: snake[0].y + _DIR.y,
  };
  snake.unshift(newhead);
  snake.pop();
}

const foodIn = () => {
  const food = document.createElement("img");
  food.classList.add("food");
  document.querySelector(".gameboard").appendChild(food);

  // set the state value
  food.style.gridColumnStart = foodDir.x;
  food.style.gridRowStart = foodDir.y;

  if (snake[0].x === foodDir.x && snake[0].y === foodDir.y) {
    // start
    const x_random = Math.round(Math.random() * GRID);
    const y_random = Math.round(Math.random() * GRID);

    // loop start here
    if (x_random !== 0 && y_random !== 0) {
      foodDir.x = x_random;
      foodDir.y = y_random;
    }

    snake.unshift({ x: Number(food.style.gridColumnStart), y: Number(food.style.gridRowStart) });
  } // end
};

function draw() {
  const gameboard = document.querySelector(".gameboard");
  gameboard.innerHTML = "";
  gameboard.classList.add("gameboard");
  snake.forEach((packet) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridColumnStart = packet.x;
    snakeElement.style.gridRowStart = packet.y;
    snakeElement.classList.add("snake");
    gameboard.appendChild(snakeElement);
  });

  foodIn();
}

const eventStart = () => {
  let checkdir = "down";
  document.addEventListener("keydown", (e) => {
    e.stopPropagation();
    if (e.key === "ArrowUp" && checkdir !== "down") {
      checkdir = "up";
      _DIR.y = -1;
      _DIR.x = 0;
    } else if (e.key === "ArrowRight" && checkdir !== "left") {
      checkdir = "right";
      _DIR.x = 1;
      _DIR.y = 0;
    } else if (e.key === "ArrowLeft" && checkdir !== "right") {
      checkdir = "left";
      _DIR.x = -1;
      _DIR.y = 0;
    } else if (e.key === "ArrowDown" && checkdir !== "up") {
      checkdir = "down";
      _DIR.y = 1;
      _DIR.x = 0;
    }
  });
};

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  eventStart();
});
