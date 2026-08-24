class snakeGame {
  constructor() {
    this.eventStart();
    this.direction = { x: 0, y: 1 };
    this.GRID = 13;
    this.snakebody = [
      { x: 3, y: 1 },
      { x: 3, y: 2 },
      { x: 3, y: 3 },
    ];
    this.foodState = { x: 3, y: 5 };
    this.interval = null;
    this.gameboard = document.querySelector(".gameboard");
    this.startbtu = document.querySelector(".start");
    this.normalbtu = document.querySelector(".normal");
    this.mediumbtu = document.querySelector(".medium");
    this.hardbtu = document.querySelector(".hard");
    this.buttonFunctionality();
  } 

  main() {
    this.update();
    this.draw();
    this.foodIn();
    this.checkClearState();
  }

  update() {
    let newhead = {
      x: this.snakebody[0].x + this.direction.x,
      y: this.snakebody[0].y + this.direction.y,
    };

    this.snakebody.unshift(newhead);
    this.snakebody.pop();
  }

  draw() {
    this.gameboard.innerHTML = "";
    this.gameboard.classList.add("gameboard");
    this.snakebody.forEach((packet) => {
      const snakeElement = document.createElement("div");
      snakeElement.style.gridColumnStart = packet.x;
      snakeElement.style.gridRowStart = packet.y;
      snakeElement.classList.add("snake");
      this.gameboard.appendChild(snakeElement);
    });
  }

  foodIn() {
    const food = document.createElement("img");
    food.classList.add("food");
    this.gameboard.appendChild(food);

    food.style.gridColumnStart = this.foodState.x;
    food.style.gridRowStart = this.foodState.y;

    if (this.snakebody[0].x === this.foodState.x && this.snakebody[0].y === this.foodState.y) {
      const x_random = Math.round(Math.random() * this.GRID);
      const y_random = Math.round(Math.random() * this.GRID);

      if (x_random !== 0 && y_random !== 0) {
        this.foodState.x = x_random;
        this.foodState.y = y_random;
      }
      this.snakebody.unshift({
        x: Number(food.style.gridColumnStart),
        y: Number(food.style.gridRowStart),
      });
    } 
  }

  checkClearState() {
    if (this.snakebody[3]) {
      for (let i = 3; i <= this.snakebody.length; i++) {
        let elem = this.snakebody[i];
        this.snakebody[0].x == elem?.x && this.snakebody[0].y == elem?.y ? this.clear() : null;
      }
    }

    this.snakebody[0].y > this.GRID ||
    this.snakebody[0].x > this.GRID ||
    this.snakebody[0].y <= 0 ||
    this.snakebody[0].x <= 0
      ? this.clear()
      : null;
  }

  clear() {
    clearInterval(this.interval);
    document.querySelector(".controler").style.display = "flex";
    this.gameboard.innerHTML = "";
    this.gameboard.classList.add("gameover");
    const gameOverHeading = document.createElement("h1");
    gameOverHeading.innerText = "Game Over";
    gameOverHeading.classList.add("boardText");
    this.gameboard.appendChild(gameOverHeading);

    this.normalbtu.style.display = "none";
    this.mediumbtu.style.display = "none";
    this.hardbtu.style.display = "none";
    this.startbtu.style.display = "block";
  }

  buttonFunctionality() {
    this.startbtu.style.display = "none";

    this.startbtu.addEventListener("click", (e) => {
      history.go(0);
      e.stopPropagation();
      this.startbtu.style.display = "none";
      this.normalbtu.style.display = "block";
      this.mediumbtu.style.display = "block";
      this.hardbtu.style.display = "block";
    });

    this.normalbtu.addEventListener("click", (e) => {
      e.stopPropagation();
      document.querySelector(".controler").style.display = "none";
      this.interval = setInterval(() => this.main(), 250);
    });

    this.mediumbtu.addEventListener("click", (e) => {
      e.stopPropagation();
      document.querySelector(".controler").style.display = "none";
      this.interval = setInterval(() => this.main(), 200);
    });

    this.hardbtu.addEventListener("click", (e) => {
      e.stopPropagation();
      document.querySelector(".controler").style.display = "none";
      this.interval = setInterval(() => this.main(), 100);
    });
  }

  eventStart() {
    let checkdir = "down";
    document.addEventListener("keydown", (e) => {
      e.stopPropagation();
      if (e.key === "ArrowUp" && checkdir !== "down") {
        checkdir = "up";
        this.direction.y = -1;
        this.direction.x = 0;
      } else if (e.key === "ArrowRight" && checkdir !== "left") {
        checkdir = "right";
        this.direction.x = 1;
        this.direction.y = 0;
      } else if (e.key === "ArrowLeft" && checkdir !== "right") {
        checkdir = "left";
        this.direction.x = -1;
        this.direction.y = 0;
      } else if (e.key === "ArrowDown" && checkdir !== "up") {
        checkdir = "down";
        this.direction.y = 1;
        this.direction.x = 0;
      }
    }); 
  } 
} 





document.addEventListener("DOMContentLoaded", () => {
  new snakeGame();
});
