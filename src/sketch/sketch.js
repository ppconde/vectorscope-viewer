import Grid from "./classes/Grid";
import * as Tone from "tone";

export default function sketch(s) {
  const vHeight = 800;
  const vWidth = vHeight;

  const circleLinesSpacing = s.PI / 20;
  const horizontalLinesSpacing = 72;
  s.setup = () => {
    s.createCanvas(vHeight, vWidth);
  };

  s.draw = () => {
    s.background(83, 76, 48);
    // Translate the origin point to the center of the screen
    s.translate(s.width / 2, s.height / 2);
    const grid = new Grid(vWidth, vHeight);
    grid.drawGrid(0, 0, vWidth, circleLinesSpacing, horizontalLinesSpacing);
    var synth = new Tone.Synth().toMaster();

    s.drawVectors(1, 2);
  };

  s.drawVectors = (x, y) => {
    s.noFill();
    s.stroke(113, 255, 250);
    s.strokeWeight(5);
    s.drawingContext.shadowBlur = 10;
    s.drawingContext.shadowColor = "green";
    s.line(0, 0, x, y);
    s.drawingContext.shadowOffsetX = 0;
    s.drawingContext.shadowOffsetY = 0;
    s.drawingContext.shadowBlur = 0;
    s.drawingContext.shadowColor = 0;
  };
}
