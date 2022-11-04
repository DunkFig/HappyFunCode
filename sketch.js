function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('myContainer')
}

function draw() {

  let mapRed = map(mouseX, 0, windowWidth, 0, 255)
  background(mapRed, 196, 0, 1);
  noStroke()
  fill(255, 0, 0, 4)
 
  ellipse(mouseX + random(-10, 10) , mouseY  + random(-10, 10) , 500, 500)
}
