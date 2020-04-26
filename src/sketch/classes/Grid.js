export default class Grid {
  constructor(vWidth, vHeight) {
    this.vWidth = vWidth;
    this.vHeight = vHeight;
    this.offSet = 0.9;
    this.r = vHeight * this.offSet;
    P$.noFill();
    P$.stroke(165, 91, 66);
    P$.strokeWeight(4);
  }

  drawGrid = (x, y, r, circleLinesSpacing, horizontalLinesSpacing) => {
    this.drawCircle(x, y, r, circleLinesSpacing, horizontalLinesSpacing);
  };
  drawCircle = (x, y, r, circleLinesSpacing, horizontalLinesSpacing) => {
    P$.circle(x, y, r * 0.9);
    this.drawCircleLines(circleLinesSpacing);
    this.drawHorizontalLines(horizontalLinesSpacing);
  };

  drawCircleLines = (circleLinesSpacing) => {
    for (let theta = 0; theta < P$.TWO_PI; theta += circleLinesSpacing) {
      let lineR = (this.offSet * this.vHeight) / 2;
      let x1 = lineR * P$.sin(theta);
      let x2 = x1 * this.offSet;
      let y1 = lineR * P$.cos(theta);
      let y2 = y1 * this.offSet;
      P$.line(x1, y1, x2, y2);
    }
  };

  drawHorizontalLines = (horizontalLinesSpacing) => {
    let flag = false;
    let startPos = -this.r / 2;
    let endPos = this.r / 2;
    for (let i = startPos; i < endPos; i += horizontalLinesSpacing) {
      if (flag === true) {
        P$.line(-this.vWidth / 2, i, this.vWidth / 2, i);
      }
      flag = !flag;
    }
  };
}
