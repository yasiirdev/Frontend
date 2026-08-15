let _DIR = { x: 0, y: 1 };
const GRID = 12;
let snake = [{ x: 3, y: 1 }  , {x:3 , y:2}, {x:3 , y:3} ];
// food state
let foodDir = { x: 3, y: 5 };
// speed state
let SPEED = 100;

const main = () => {
  update();
  draw();
  if (snake[0].y > GRID || snake[0].x > GRID || snake[0].y <= 0 || snake[0].x <= 0) {
    clearInterval(interval);
    document.getElementById("gameborad").innerHTML = "";
    document.getElementById("gameborad").style.display = "flex";
    document.getElementById("gameborad").style.alignItems = "center";
    document.getElementById("gameborad").style.justifyContent = "center";
    const gameOver = document.createElement("h1");
    gameOver.innerText = "Game Over";
    gameOver.classList.add("gameover");
    document.getElementById("gameborad").appendChild(gameOver);
    //
    const normal = document.createElement("button");
    const medium = document.createElement("button");
    const hard = document.createElement("button");
    
    normal.innerHTML = "Normal";
    medium.innerHTML = "Medium";
    hard.innerHTML = "Hard";
 

  }
};

const interval = setInterval(main, SPEED);

console.log(interval);

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
  document.getElementById("gameborad").appendChild(food);

  // set the state value
  food.style.gridColumnStart = foodDir.x;
  food.style.gridRowStart = foodDir.y;

  if (
    snake[0].x === Number(food.style.gridColumnStart) &&
    snake[0].y === Number(food.style.gridRowStart)
  ) {
    const x_random = Math.round(Math.random() * GRID) + 1;
    const y_random = Math.round(Math.random() * GRID) + 1;

    // undate
    snake.forEach((chuck) => {
      if (chuck.x !== x_random || chuck.y !== y_random) {
        foodDir.x = x_random;
        foodDir.y = y_random;
      }
    });
    snake.unshift({ x: Number(food.style.gridColumnStart), y: Number(food.style.gridRowStart) });
  }
};

function draw() {
  const gameboard = document.getElementById("gameborad");
  gameboard.innerHTML = "";
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
    }
    if (e.key === "ArrowRight" && checkdir !== "left") {
      checkdir = "right";
      _DIR.x = 1;
      _DIR.y = 0;
    }
    if (e.key === "ArrowLeft" && checkdir !== "right") {
      checkdir = "left";
      _DIR.x = -1;
      _DIR.y = 0;
    }
    if (e.key === "ArrowDown" && checkdir !== "up") {
      checkdir = "down";
      _DIR.y = 1;
      _DIR.x = 0;
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  eventStart();
  main();
});
