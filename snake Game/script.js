const snake = document.querySelectorAll(".snake");
const food = document.querySelector(".food");
const gameborad = document.getElementById("game");
const snakePosition = { x: 0, y: 0 };
let foodIntial = { x: 0, y: 0 };
const snakeCoord = [
  { x: 1, y: 1 }, // head
  { x: 2, y: 1 }, // body
  { x: 3, y: 1 }, // tail
];

/*const speed = setInterval(() => {
  let y = 1;  
  snake.forEach((s)=>{
     s.style.gridRowStart = y++;
  })
}, 1000);
*/

function draw() {
  snake.forEach((s, idx) => {
    s.style.gridColumnStart = snakeCoord[idx].x;
    s.style.gridRowStart = snakeCoord[idx].y;
  });
}

function rm_num() {
  const x = Math.floor(Math.random() * 9);
  const y = Math.floor(Math.random() * 9);
  foodIntial.x += x;
  foodIntial.y += y;
}

const movesnake = (position) => {
  food.style.gridColumnStart = foodIntial.x;
  food.style.gridRowStart = foodIntial.y;

  if (snakeCoord[0].x === foodIntial.x && snakeCoord[0].y === foodIntial.y) {
       console.log(snakeCoord[0].x , snakeCoord[0].y , foodIntial.x , foodIntial.y)  
              rm_num();
    console.log("eating");
  }

   console.log(snakeCoord[0].x , snakeCoord[0].y , foodIntial.x , foodIntial.y)  


  if (position === "down") {
    snakeCoord.unshift({ x: snakePosition.x, y: snakePosition.y++ });
    snakeCoord.pop();
  } else if (position === "right") {
    snakeCoord.unshift({ x: snakePosition.x++, y: snakePosition.y });
    snakeCoord.pop();
  } else if (position === "up") {
    snakeCoord.unshift({ x: snakePosition.x, y: snakePosition.y-- });
    snakeCoord.pop();
  } else if (position === "left") {
    snakeCoord.unshift({ x: snakePosition.x--, y: snakePosition.y });
    snakeCoord.pop();
  }
};

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") movesnake("up");
  if (e.key === "ArrowDown") movesnake("down");
  if (e.key === "ArrowLeft") movesnake("left");
  if (e.key === "ArrowRight") movesnake("right");
  draw();
});

draw();
