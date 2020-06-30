import {Vector} from '@classes/vector';

export class Cell {
  public col: number;
  public row: number;
  public position: Vector;

  constructor({col = 0, row = 0, rootPosition = new Vector(), gridSpacing = 0} = {}) {
    this.col = col;
    this.row = row;
    this.position = new Vector({x: rootPosition.x + (gridSpacing * this.col),
      y: rootPosition.y + (gridSpacing * this.row)});
  }
}

export class MazeCell extends Cell {
  public top: boolean;
  public bottom: boolean;
  public left: boolean;
  public right: boolean;

  constructor({col = 0, row = 0, top = false, bottom = false, left = false, right = false, rootPosition = new Vector(),
                gridSpacing = 0} = {}) {
    super({col: col, row: row, rootPosition: rootPosition, gridSpacing: gridSpacing});
    this.col = col;
    this.row = row;
    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
  }
}
