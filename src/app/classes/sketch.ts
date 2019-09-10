export class Sketch {
    public static p5: any;
    public static showFPS = () => {
    const fps = Sketch.p5.frameRate();
    Sketch.p5.fill(0);
    Sketch.p5.noStroke();
    Sketch.p5.text('FPS: ' + fps.toFixed(2), 10, Sketch.p5.height - 20);
  };
}
