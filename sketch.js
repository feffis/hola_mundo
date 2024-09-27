function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  background(0);
  rectMode(CENTER);
}

function draw() {
  //Color del fondo RGB y el cuarto valor es la transparencia
  background(40, random(0, 95), 102, 10);

  strokeWeight(2);
  stroke(mouseY, 255, 255);
  noFill();
  circle(mouseX, mouseY + 40, 60, 60);

  strokeWeight(1);
  noStroke();
  fill(94, 213, 235);
  circle(mouseX, mouseY + 40, 50, 60);

  strokeWeight(1);
  stroke(mouseY, 255, 255);
  fill(94, 213, 235);
  frameRate(45);
  let biteSize = PI / 24;
  let startAngle = biteSize * sin(frameCount * 0.6) + biteSize;
  let endAngle = TWO_PI - startAngle;
  arc(mouseX, mouseY, 80, 80, startAngle, endAngle, PIE);

  strokeWeight(1);
  noStroke();
  fill(255, 255, 255);
  circle(mouseX + 120, mouseY - 10, 50, 30);

  strokeWeight(1);
  noStroke();
  fill(255, 255, 255);
  circle(mouseX, mouseY + 40, 30, 10);
}
