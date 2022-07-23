const button = document.querySelectorAll(".btn");
const image = document.querySelector(".image");
const main = document.querySelector(".main");
const color = document.querySelector("#colorpicker");

let col = color.value;

console.log(col);

setInterval(cole, 1000);
console.log(color);

function cole() {
  col = color.value;
  return col;
}

let j = 1;

let click = 0;
let zoom = 1;

console.log(button);

{
  addEventListener("click", () => {
    console.log("you want to decrese the space in image");
    main.style.backgroundColor = `${col}`;
  });
}
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("mousedown", () => {
    button[i].classList.add("click");
  });
  button[i].addEventListener("mouseup", () => {
    button[i].classList.remove("click");
  });

  if (i == 0) {
    button[i].addEventListener("click", () => {
      console.log("you want to change the space in image");
      zoom = zoom + 0.1;
      image.style.transform = `scale(${zoom})`;
    });
  } else if (i == 1) {
    button[i].addEventListener("click", () => {
      console.log("you want to decrese the space in image");
      zoom = zoom - 0.1;
      if (zoom < 0) {
        zoom = 0;
        return;
      }
      image.style.transform = `scale(${zoom})`;
    });
  } else if (i == 2) {
    button[i].addEventListener("click", () => {
      console.log("you want to increse the blur  in image");
      click++;

      image.style.filter = `blur(${click}px)`;
    });
  } else if (i == 3) {
    button[i].addEventListener("click", () => {
      console.log("you want to decrese  the  blur in image");
      if (click <= 0) {
        click = 1;
      }
      click--;

      image.style.filter = `blur(${click}px)`;
    });
  }
}
