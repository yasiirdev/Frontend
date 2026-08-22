let _DIR = { x: 0, y: 1 };
const GRID = 13;
let snake = [
  { x: 3, y: 1 },
  { x: 3, y: 2 },
  { x: 3, y: 3 },
];
// food state
let foodDir = { x: 3, y: 5 };
let interval = undefined;

const main = () => {
  update();
  draw();
  checkClearState();
};

document.querySelector(".normal").addEventListener("click", () => {
  document.querySelector(".controler").style.display = "none";
  interval = setInterval(main, 250);
});

document.querySelector(".medium").addEventListener("click", () => {
  document.querySelector(".controler").style.display = "none";
  interval = setInterval(main, 150);
});

document.querySelector(".hard").addEventListener("click", () => {
  document.querySelector(".controler").style.display = "none";
  interval = setInterval(main, 100);
});

const clear = () => {
  clearInterval(interval);
  document.querySelector(".controler").style.display = "flex";
  document.querySelector(".gameboard").innerHTML = "";
  document.querySelector(".gameboard").classList.add("gameover");
  const gameOver = document.createElement("h1");
  gameOver.innerText = "Game Over";
  gameOver.classList.add("boardText");
  document.querySelector(".gameboard").appendChild(gameOver);
};

function checkClearState() {
  for (let i = 3; i <= snake.length; i++) {
    let elem = snake[i];
    snake[0].x === elem.x && snake[0].y === elem.y ? clear() : null;
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
    const x_random = Math.round(Math.random() * 11) + 1;
    const y_random = Math.round(Math.random() * 11) + 1;

    // loop start here
    snake.forEach((chuck) => {
      if (
        chuck.y !== Number(food.style.gridColumnStart) &&
        chuck.x !== Number(food.style.gridRowStart)
      ) {
        foodDir.x = x_random;
        foodDir.y = y_random;
      }
    }); // loop end

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
