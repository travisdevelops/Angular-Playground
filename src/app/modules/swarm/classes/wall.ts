export class Wall {
  public col: number;
  public row: number;
  public top: boolean;
  public bottom: boolean;
  public left: boolean;
  public right: boolean;

  constructor({col = 0, row = 0, top = false, bottom = false, left = false, right = false} = {}) {
    this.col = col;
    this.row = row;
    this.top = top;
    this.bottom = bottom;
    this.left = left;
    this.right = right;
  }
}
