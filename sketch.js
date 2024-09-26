function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(4);
  background(0);
  rectMode(CENTER);
}
function draw() {
  background(random(100, 151), random(0, 90), 100);
  fill(mouseY, 100, 67);
  circle(mouseX + 80, mouseY, mouseX);
  fill(200, 200, 10);
  rect(mouseX, mouseY, 100, 100);
}
