document.getElementById("cardbase")
  .onmousemove = function(event) {cardRotator(event)};

document.getElementById("cardbase").onmouseleave = (e) => {
  const w = 210;
  const h = 300;
  let px = Math.floor(w/2)
  let py = Math.floor(h/2)
  document.getElementById("cardbase").style.transition = "all 0.8s";
  document.getElementById("holo").style.transition = "opacity 0.4s";
  document.getElementById("cardbase").style.transform = 
    `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
  document.getElementById("glare").style= `
    position:absolute; 
    height: 100%; 
    width:100%; 
    opacity: 0%;
    mix-blend-mode: overlay;
    background-image: radial-gradient(
    farthest-corner circle at ${px}px ${py}px,
    hsla(0, 0%, 100%, 0.8) 0%,
    hsla(0, 0%, 100%, 0.65) 0%,
    hsla(0, 0%, 0%, 0.5) 0%
    )`;
  document.getElementById("holo").style.setProperty(
    '--pointer-from-center', 0 
  )
  document.getElementById("border").style.setProperty(
    '--pointer-from-center', 0.6
  )
}


document.getElementById("cardbase").onmouseover = () => {
  document.getElementById("cardbase").style.transition = "all 0.1s";
  document.getElementById("holo").style.transition = "opacity 0.1s";
  console.log("enter")
}

function clamp(num, min, max) {
  return num <= min 
    ? min 
    : num >= max 
      ? max 
      : num
}

function cardRotator(e) {
  var offsets = document.getElementById("cardbase")
    .getBoundingClientRect();
  const w = 504;
  const h = 720;
  let px = Math.floor((e.clientX - offsets.x))
  let py = Math.floor((e.clientY - offsets.y))
  let x = Math.floor((e.clientX - offsets.x - w/2)/(w/2)*-16);
  let y = Math.floor((e.clientY - offsets.y - h/2)/(h/2)*30);
  let z = Math.floor(-x*y/70)
  document.getElementById("cardbase").style.transform = 
    `rotateX(${y}deg) rotateY(${x}deg) rotateZ(${z}deg)`;
  document.getElementById("glare").style= `
    position:absolute; 
    height: 100%; 
    width:100%; 
    mix-blend-mode: overlay;
    background-image: radial-gradient(
    farthest-corner circle at ${px}px ${py}px,
    hsla(0, 0%, 100%, 0.8) 10%,
    hsla(0, 0%, 100%, 0.65) 20%,
    hsla(0, 0%, 0%, 0.5) 90%
    )`;
  document.getElementById("holo").style.setProperty(
    '--pointer-x',
    Math.floor(px*100/w)+"%"
  )
  document.getElementById("holo").style.setProperty(
    '--pointer-y',
    Math.floor(py*100/h)+"%"
  )
  document.getElementById("holo").style.setProperty(
    '--pointer-from-center',
    clamp(Math.sqrt((x/16)*(x/16) + (y/30)*(y/30)), 0,1)
  )
  document.getElementById("border").style.setProperty(
    '--pointer-from-center',
    clamp(Math.sqrt((x/16)*(x/16) + (y/30)*(y/30)), 0,1)
  )
  document.getElementById("border").style.setProperty(
    '--pointer-x',
    Math.floor(px*100/w)+"%"
  )
  document.getElementById("border").style.setProperty(
    '--pointer-y',
    Math.floor(py*100/h)+"%"
  )
}
