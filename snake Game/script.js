const snake = document.querySelector(".snake");
const main = document.querySelector(".main")


const snakePosition = { x: 1, y: 1 };

function draw() { 
  snake.style.gridColumnStart = snakePosition.x;
  snake.style.gridRowStart = snakePosition.y;
 
}

//  setInterval(() => {
//    snakePosition.y === 1 ? snakeP: console.log("worng set");
//  }, 1000);

window.addEventListener("keydown", function (e) { 
  if (e.key === "ArrowUp") {
    console.log("up ");
    snakePosition.y > 1 ? snakePosition.y-- : console.log("worng up ");
    ;
  } else if (e.key === "ArrowDown") {
    console.log("dowm");
    snakePosition.y  ? snakePosition.y++ : console.log("down2");
    ;
  } else if (e.key === "ArrowLeft") {
    console.log("left");
    snakePosition.x > 1 ? snakePosition.x-- : console.log("left2");
  } else if (e.key === "ArrowRight") { 
    console.log("right");
    snakePosition.x ? snakePosition.x++ : console.log("right");
  } 
  draw();
})

draw();

