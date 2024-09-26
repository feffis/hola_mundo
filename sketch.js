function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  background(0);
  rectMode(CENTER);
}
function draw() {
  background(random(100, 151), random(0, 90), 100, 10);
  //el cuarto valor es transparencia
  strokeWeight(5);
  noFill();
  stroke(mouseY, 255, 0);
  circle(mouseX + 80, mouseY, mouseX);

  strokeWeight(1);
  stroke(0, 255.0);
  fill(200, 200, 10);
  rect(mouseX, mouseY, 100, 100);
}
