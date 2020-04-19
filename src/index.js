import Graph from "./classes/Graphs";

let waves = [];
let nWaves = 20;

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < nWaves; i++) {
    let numPts = random(10, 500);

    let circleWidth = 10 + i * (width / 2 / nWaves);
    let displacement = circleWidth / 8;
    let col = map(i, 0, nWaves, 0, 255);

    let wave = new Graph(numPts, displacement, circleWidth, col);
    waves.push(wave);
  }
}

function draw() {
  background(180, 220, 220);
  noStroke();

  for (let wave of waves) {
    wave.drawCircles();
    wave.drawLines();
  }
}
