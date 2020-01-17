export class Cell {
  public col: number;
  public row: number;

  constructor({col = 0, row = 0} = {}) {
    this.col = col;
    this.row = row;
  }
}

export class MazeCell extends Cell {
  public top: boolean;
  public bottom: boolean;
  public left: boolean;
  public right: boolean;

  constructor({col = 0, row = 0, top = false, bottom = false, left = false, right = false} = {}) {
    super({col: col, row: row});
    this.col = col;
    this.row = row;
    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
  }
}
