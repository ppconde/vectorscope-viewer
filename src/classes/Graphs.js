class Graph {
  constructor(tempNumPts, tempDisplace, tempWidth, tempColor) {
    this.numPts = tempNumPts;
    this.displace = tempDisplace;
    this.width = tempWidth;
    this.xPositions = [];
    this.yPositions = [];
    this.color = tempColor;

    for (let i = 0; i < this.numPts; i++) {
      let rand = random(-this.displace, this.displace);

      let x = cos(map(i, 0, this.numPts, 0, TWO_PI)) * this.width + width / 2;
      let y = sin(map(i, 0, this.numPts, 0, TWO_PI)) * this.width + height / 2;
      let angle = atan2(y - height / 2, x - width / 2);

      x += cos(angle) * rand;
      y += sin(angle) * rand;

      this.xPositions.push(x);
      this.yPositions.push(y);
    }
  }

  drawCircles() {
    noStroke();
    fill(this.color);
    for (let i = 0; i < this.numPts; i++) {
      let x = this.xPositions[i];
      let y = this.yPositions[i];

      ellipse(x, y, 5);
    }
  }

  drawLines() {
    stroke(this.color);
    for (let i = 0; i < this.numPts; i++) {
      let x = this.xPositions[(i + 1) % this.numPts];
      let y = this.yPositions[(i + 1) % this.numPts];
      let px = this.xPositions[i];
      let py = this.yPositions[i];

      line(x, y, px, py);
    }
  }
}

export default Graph;
