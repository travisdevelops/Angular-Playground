import {Vector} from '@classes/vector';

export class MazeCell {
  position: Vector;
  visited: boolean;
  type: number;

  constructor(pos) {
    this.position = new Vector({x: pos.x, y: pos.y});
    this.visited = false;
    this.type = 1;
  }
}
