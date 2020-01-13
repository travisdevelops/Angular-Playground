import {Vector} from '@classes/vector';
import {Sketch} from '@classes/sketch';
import {Wall} from '@app/modules/swarm/classes/wall';
import {Strand} from '@app/modules/swarm/classes/strand';

export class WallManager {
  private walls: Wall[] = [];
  private gridSpacing: number;
  private color: Vector;
  private position: Vector;
  private debug: boolean;
  private strands: Strand[] = [];
  private strandEntrances: Wall[] = [];

  constructor({gridSpacing = 120, color = new Vector(), position = new Vector(), debug = false} = {}) {
    this.gridSpacing = gridSpacing;
    this.color = color;
    this.position = position;
    this.debug = debug;
  }

  display() {
    this.walls.forEach((wall) => {
      Sketch.p5.noFill();
      Sketch.p5.strokeWeight(5);
      Sketch.p5.stroke(this.color.x, this.color.y, this.color.z);
      Sketch.p5.beginShape(Sketch.p5.LINES);
      const wallPosition = this.convertColRowToPosition(wall.col, wall.row);
      if (wall.top) {
        Sketch.p5.vertex(wallPosition.x, wallPosition.y);
        Sketch.p5.vertex(wallPosition.x + this.gridSpacing, wallPosition.y);
      }
      if (wall.right) {
        Sketch.p5.vertex(wallPosition.x + this.gridSpacing, wallPosition.y);
        Sketch.p5.vertex(wallPosition.x + this.gridSpacing, wallPosition.y + this.gridSpacing);
      }
      if (wall.bottom) {
        Sketch.p5.vertex(wallPosition.x, wallPosition.y + this.gridSpacing);
        Sketch.p5.vertex(wallPosition.x + this.gridSpacing, wallPosition.y + this.gridSpacing);
      }
      if (wall.left) {
        Sketch.p5.vertex(wallPosition.x, wallPosition.y);
        Sketch.p5.vertex(wallPosition.x, wallPosition.y + this.gridSpacing);
      }
      Sketch.p5.endShape();
      if (this.debug) {
        this.debugMode(wall, wallPosition);
      }
    });

    this.strands.forEach((strand) => {
      if (!this.positionIsOutsideWallCell(strand.position, strand.getPositionUsingSpeed())) {
        strand.move();
      } else {
        strand.randomizeMovements();
      }
      strand.display();
    });
  }

  convertColRowToPosition(col, row) {
    return new Vector({x: this.position.x + (this.gridSpacing * col), y: this.position.y +
        (this.gridSpacing * row)});
  }

  convertPositionToColRow(position) {
    return new Vector({x: Math.floor((position.x - this.position.x) / this.gridSpacing), y: Math.floor((position.y - this.position.y) / this.gridSpacing)});
  }

  debugMode(wall, wallPosition) {
    Sketch.p5.strokeWeight(1);
    const textOffset = 5;
    if (wall.top) {
      Sketch.p5.textAlign(Sketch.p5.CENTER, Sketch.p5.TOP);
      Sketch.p5.text('Top', wallPosition.x + (this.gridSpacing / 2), wallPosition.y + textOffset);
    }
    if (wall.right) {
      Sketch.p5.textAlign(Sketch.p5.RIGHT, Sketch.p5.CENTER);
      Sketch.p5.text('Right', wallPosition.x + this.gridSpacing - textOffset, wallPosition.y + (this.gridSpacing / 2));
    }
    if (wall.bottom) {
      Sketch.p5.textAlign(Sketch.p5.CENTER, Sketch.p5.BOTTOM);
      Sketch.p5.text('Bottom', wallPosition.x + (this.gridSpacing / 2), wallPosition.y + this.gridSpacing - textOffset + 2);
    }
    if (wall.left) {
      Sketch.p5.textAlign(Sketch.p5.LEFT, Sketch.p5.CENTER);
      Sketch.p5.text('Left', wallPosition.x + textOffset, wallPosition.y + (this.gridSpacing / 2));
    }
    Sketch.p5.textAlign(Sketch.p5.CENTER, Sketch.p5.CENTER);
    Sketch.p5.text('(' + wall.col + ',' + wall.row + ')', wallPosition.x + (this.gridSpacing / 2), wallPosition.y + (this.gridSpacing / 2));
  }

  addWall(wallParams) {
    this.walls.push(new Wall(wallParams));
  }

  addStrandEntrance(wallParams) {
    this.strandEntrances.push(new Wall(wallParams));
  }

  // Create Strands
  createStrands(count: number, color: Vector) {
    for (let i = 0; i < count; i++) {
      const strand = new Strand({color: color});
      strand.position = this.getRandomStrandEntrancePosition();
      strand.randomizeMovements();
      this.strands.push(strand);
    }
  }

  // Get Position That Is Inside Strand Entrance
  getRandomStrandEntrancePosition() {
    const randomEntrance = this.strandEntrances.length > 1 ? Sketch.p5.random(0, this.strandEntrances.length) : 0;
    const entrancePosition = this.convertColRowToPosition(this.strandEntrances[randomEntrance].col,
      this.strandEntrances[randomEntrance].row);
    const xRangeL = entrancePosition.x;
    const xRangeR = entrancePosition.x + this.gridSpacing;
    const yRangeT = entrancePosition.y;
    const yRangeB = entrancePosition.y + this.gridSpacing;
    return new Vector({x: Sketch.p5.random(xRangeL + 5, xRangeR - 5), y: Sketch.p5.random(yRangeT + 5, yRangeB - 5)});
  }

  // Check If Strand Position is Outside
  positionIsOutsideWallCell(currentPosition, potentialPosition) {
    const nearestCellFromPosition = this.convertPositionToColRow(currentPosition);
    const currentCellPosition = this.convertColRowToPosition(nearestCellFromPosition.x, nearestCellFromPosition.y);
    const actualCurrentCell = this.walls.find((wall) => {
      return wall.col === nearestCellFromPosition.x && wall.row === nearestCellFromPosition.y;
    });
    if (actualCurrentCell == null) {
      return false;
    }
    const topOfCurrentCell = actualCurrentCell.top && potentialPosition.y < currentCellPosition.y;
    const bottomOfCurrentCell = actualCurrentCell.bottom && potentialPosition.y > currentCellPosition.y + this.gridSpacing;
    const leftOfCurrentCell = actualCurrentCell.left && potentialPosition.x < currentCellPosition.x;
    const rightOfCurrentCell = actualCurrentCell.right && potentialPosition.x > currentCellPosition.x + this.gridSpacing;
    const outsideOfCellBorders = topOfCurrentCell || rightOfCurrentCell || bottomOfCurrentCell || leftOfCurrentCell;
    if (outsideOfCellBorders) {
      return true;
    }
    // Check Neighbors Borders
    const nearestCellFromPotentialPosition = this.convertPositionToColRow(potentialPosition);
    const actualNeighborCell = this.walls.find((wall) => {
      return wall.col === nearestCellFromPotentialPosition.x && wall.row === nearestCellFromPotentialPosition.y;
    });
    if (actualNeighborCell == null) {
      return false;
    }
    const topOfNeighborCell = bottomOfCurrentCell && actualNeighborCell.top;
    const bottomOfNeighborCell = topOfCurrentCell && actualNeighborCell.bottom;
    const leftOfNeighborCell = rightOfCurrentCell && actualNeighborCell.left;
    const rightOfNeighborCell = leftOfCurrentCell && actualNeighborCell.right;
    return topOfNeighborCell || rightOfNeighborCell || bottomOfNeighborCell || leftOfNeighborCell;
  }

}
