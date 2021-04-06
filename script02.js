let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(ctx);

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(100, 100, 30, 0, Math.PI * 2);
  ctx.fill();
});

let mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("click", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  let size = Math.random() * 30;
  if (size < 1) {
    size = +1;
  }
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, size, 0, Math.PI * 2);
  ctx.fill();
  console.log(event);
});

// canvas.addEventListener("mousemove", function (event) {
//   mouse.x = event.x;
//   mouse.y = event.y;
//   let size = Math.random() * 30;
//   if (size < 1) {
//     size = +1;
//   }
//   ctx.fillStyle = "red";
//   ctx.beginPath();
//   ctx.arc(mouse.x, mouse.y, size, 0, Math.PI * 2);
//   ctx.fill();
//   console.log(event);
// });
