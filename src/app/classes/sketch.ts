import {Theme} from '@classes/theme';

export class Sketch {
    public static p5: any;
    public static canvas: any;
    public static windowOffset: number;

    public static showFPS() {
      const fps = Sketch.p5.frameRate();
      Sketch.p5.fill(0);
      Sketch.p5.noStroke();
      Sketch.p5.text('FPS: ' + fps.toFixed(2), 10, Sketch.p5.height - 20);
    }

  // Resize Canvas - Responsive
    public static resize() {
      if (Sketch.canvas.width !== Sketch.p5.windowWidth || Sketch.canvas.height !== Sketch.p5.windowHeight - Sketch.windowOffset) {
        Sketch.p5.resizeCanvas(Sketch.p5.windowWidth, Sketch.p5.windowHeight - Sketch.windowOffset);
      }
    }

    public static draw() {
      if (Sketch.p5 != null && Sketch.canvas != null) {
        Sketch.resize();
        Sketch.showFPS();
        Sketch.p5.background(Theme.bgColor.x, Theme.bgColor.y, Theme.bgColor.z);
      }
    }

    public static reset() {
      Sketch.p5.remove();
      Sketch.p5 = null;
      Sketch.canvas = null;
      Sketch.windowOffset = 0;
    }
}
