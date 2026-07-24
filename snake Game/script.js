const food = document.querySelector(".food");
const main = document.querySelector(".main");

document.addEventListener("keydown", (e) => {
    let rectLocation = main.getBoundingClientRect()
 console.log(rectLocation);
 

    

  if (e.key === "ArrowUp") {
    console.log("up");

    gsap.to(".food", {
      y: -200,
      duration: 2,
    });
  }

  if (e.key === "ArrowDown") {
    console.log("down");

    gsap.to(".food", {
      y: 100,
      duration: 2,
    });
  }

  if (e.key === "ArrowLeft") {
    console.log("left");

    gsap.to(".food", {
      x: -100,
      duration: 2,
    });
  }

  if (e.key === "ArrowRight") {
    console.log("right");

    gsap.to(".food", {
      x: 200,
      duration: 2,
    });
  }
});
