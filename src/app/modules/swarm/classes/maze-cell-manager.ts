import {Vector} from '@classes/vector';
import {Sketch} from '@classes/sketch';
import {MazeCell} from '@app/modules/swarm/classes/maze-cell';
import {Strand} from '@app/modules/swarm/classes/strand';

export class MazeCellManager {
  private mazeCells: MazeCell[] = [];
  private gridSpacing: number;
  private color: Vector;
  private position: Vector;
  private debug: boolean;
  private strands: Strand[] = [];
  private strandEntrances: MazeCell[] = [];

  constructor({gridSpacing = 120, color = new Vector(), position = new Vector(), debug = false} = {}) {
    this.gridSpacing = gridSpacing;
    this.color = color;
    this.position = position;
    this.debug = debug;
  }

  display() {
    this.mazeCells.forEach((wall) => {
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
      if (!this.positionIsOutsideCell(strand.position, strand.getPositionUsingSpeed())) {
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

  addCell(wallParams) {
    this.mazeCells.push(new MazeCell(wallParams));
  }

  addStrandEntrance(wallParams) {
    this.strandEntrances.push(new MazeCell(wallParams));
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
  positionIsOutsideCell(currentPosition, potentialPosition) {
    const currentCellColAndRow = this.convertPositionToColRow(currentPosition);
    const currentCellPosition = this.convertColRowToPosition(currentCellColAndRow.x, currentCellColAndRow.y);

    // Get Current Direction
    const headingTowardsTopOfCell = potentialPosition.y < currentCellPosition.y;
    const headingTowardsBottomOfCell = potentialPosition.y > currentCellPosition.y + this.gridSpacing;
    const headingTowardsLeftOfCell = potentialPosition.x < currentCellPosition.x;
    const headingTowardsRightOfCell = potentialPosition.x > currentCellPosition.x + this.gridSpacing;

    // Get Current Cell Borders
    const currentCell = this.mazeCells.find((wall) => {
      return wall.col === currentCellColAndRow.x && wall.row === currentCellColAndRow.y;
    });
    if (currentCell != null) {
      const outsideTopOfCurrentCell = currentCell.top && headingTowardsTopOfCell;
      const bottomOfCurrentCell = currentCell.bottom && headingTowardsBottomOfCell;
      const leftOfCurrentCell = currentCell.left && headingTowardsLeftOfCell;
      const rightOfCurrentCell = currentCell.right && headingTowardsRightOfCell;
      const outsideOfCellBorders = outsideTopOfCurrentCell || rightOfCurrentCell || bottomOfCurrentCell || leftOfCurrentCell;
      if (outsideOfCellBorders) {
        return true;
      }
    }
    // Check Neighbors Borders
    const neighborCellColAndRow = this.convertPositionToColRow(potentialPosition);
    const neighborCell = this.mazeCells.find((mazeCell) => {
      return mazeCell.col === neighborCellColAndRow.x && mazeCell.row === neighborCellColAndRow.y;
    });
    if (neighborCell != null) {
      const outsideTopOfNeighborCell = headingTowardsBottomOfCell && neighborCell.top;
      const outsideBottomOfNeighborCell = headingTowardsTopOfCell && neighborCell.bottom;
      const outsideLeftOfNeighborCell = headingTowardsRightOfCell && neighborCell.left;
      const outsideRightOfNeighborCell = headingTowardsLeftOfCell && neighborCell.right;
      return outsideTopOfNeighborCell || outsideBottomOfNeighborCell || outsideLeftOfNeighborCell || outsideRightOfNeighborCell;
    }
    return false;
  }

}
