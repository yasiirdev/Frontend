//In JavaScript, you represent the snake as an array of coordinate objects where the first element (snake[0]) is the head. Instead of shifting every body block simultaneously, you create a brand new head position based on your current direction, insert it at the very front of the array using .unshift(), and remove the very last segment of the tail using .pop(). This creates the illusion that the entire body is seamlessly slithering along the path

//const snake = document.querySelectorAll(".snake");
// const game = document.getElementById("game");
const snakePosition = { x: 1, y: 1 };
// const snakecoordinate = [snake[0],snake[1],snake[2],snake[3]];
// function draw() {
//   snake[0].style.gridColumnStart = snakePosition.x;
//   snake[0].style.gridRowStart = snakePosition.y;
// }

// // const speed = setInterval(() => {
// //   snakePosition.y += 1;

// // }, 100);

// window.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowUp") {
//     console.log("up ");
//     snakePosition.y > 1 ? snakePosition.y--  n: console.log("worng up ");
//   } else if (e.key === "ArrowDown") {
//     console.log("dowm");
//     snakePosition.y ? snakePosition.y++ : console.log("down2");
//   } else if (e.key === "ArrowLeft") {
//     console.log("left");
//     snakePosition.x > 1 ? snakePosition.x-- : console.log("left2");
//   } else if (e.key === "ArrowRight") {
//     console.log("right");
//     snakePosition.x ? snakePosition.x++ : console.log("right");
//   }
//   draw();
// });

// draw();

const snakeCoord = [
  { x: 1, y: 1 },
  { x: 1, y: 2 },
  { x: 1, y: 3 },
];
const movesnake = (position) => {
  if (position === "down") {
    snakeCoord.unshift({ x: snakePosition.x, y: --snakePosition.y });
    snakeCoord.pop();
  } else if (position === "right") {
    snakeCoord.unshift({ x: snakePosition.x++, y: snakePosition.y });
    snakeCoord.pop();
  }
  console.log(snakeCoord);
};

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") movesnake("up");
  if (e.key === "ArrowDown") movesnake("down");
  if (e.key === "ArrowLeft") movesnake("left");
  if (e.key === "ArrowRight") movesnake("right");
});

