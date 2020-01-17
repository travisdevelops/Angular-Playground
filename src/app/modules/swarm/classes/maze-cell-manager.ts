import {Vector} from '@classes/vector';
import {Sketch} from '@classes/sketch';
import {Cell, MazeCell} from '@app/modules/swarm/classes/maze-cell';
import {Strand} from '@app/modules/swarm/classes/strand';
import {stripSummaryForJitNameSuffix} from '@angular/compiler/src/aot/util';
import {AttackerStrand} from '@app/modules/swarm/classes/attacker-strand';

export class MazeCellManager {
  private mazeCells: MazeCell[] = [];
  private gridSpacing: number;
  private color: Vector;
  private position: Vector;
  private debug: boolean;
  private strands: Strand[] = [];
  private attackerStrands: AttackerStrand[] = [];
  private spawnPoints: Cell[] = [];

  constructor({gridSpacing = 120, color = new Vector(), position = new Vector(), debug = false} = {}) {
    this.gridSpacing = gridSpacing;
    this.color = color;
    this.position = position;
    this.debug = debug;
  }

  display(): void {
    this.mazeCells.forEach((mazeCell: MazeCell) => {
      Sketch.p5.noFill();
      Sketch.p5.strokeWeight(5);
      Sketch.p5.stroke(this.color.x, this.color.y, this.color.z);
      Sketch.p5.beginShape(Sketch.p5.LINES);
      const mazeCellPosition = this.convertColRowToPosition(mazeCell);
      if (mazeCell.top) {
        Sketch.p5.vertex(mazeCellPosition.x, mazeCellPosition.y);
        Sketch.p5.vertex(mazeCellPosition.x + this.gridSpacing, mazeCellPosition.y);
      }
      if (mazeCell.right) {
        Sketch.p5.vertex(mazeCellPosition.x + this.gridSpacing, mazeCellPosition.y);
        Sketch.p5.vertex(mazeCellPosition.x + this.gridSpacing, mazeCellPosition.y + this.gridSpacing);
      }
      if (mazeCell.bottom) {
        Sketch.p5.vertex(mazeCellPosition.x, mazeCellPosition.y + this.gridSpacing);
        Sketch.p5.vertex(mazeCellPosition.x + this.gridSpacing, mazeCellPosition.y + this.gridSpacing);
      }
      if (mazeCell.left) {
        Sketch.p5.vertex(mazeCellPosition.x, mazeCellPosition.y);
        Sketch.p5.vertex(mazeCellPosition.x, mazeCellPosition.y + this.gridSpacing);
      }
      Sketch.p5.endShape();
      if (this.debug) {
        this.debugMode(mazeCell, mazeCellPosition);
      }
    });

    this.displayStrands();
    this.displayAttackerStrands();
    // TODO: Convert Speed To Degree Then Use That To Choose Another Degree Then Convert Back to Speed
  }

  displayStrands(): void {
    this.strands.forEach((strand: Strand) => {
      if (!this.positionIsCrossingCellBorders(strand.position, strand.getPositionUsingSpeed())) {
        strand.move();
      } else {
        strand.randomizeMovements();
      }
      strand.display();
    });
  }

  displayAttackerStrands(): void {
    this.attackerStrands.forEach((strand: AttackerStrand) => {
      if (!this.positionIsCrossingCellBorders(strand.position, strand.getPositionUsingSpeed())) {
        strand.move();
      } else {
        strand.randomizeMovements();
      }
      strand.display();
    });
  }

  connectStrandsInCell(mazeCell: MazeCell): void {
    // Get All Attacker Strands In Cell
    const cellPosition = this.convertColRowToPosition(mazeCell);
    const attackerStrandsInCell = this.attackerStrands.filter((attackerStrand: AttackerStrand) => {
      return this.positionIsInsideCell(cellPosition, attackerStrand.position);
    });
    // Get All Strands In Cell
    const strandsInCell = this.strands.filter((strand: Strand) => {
      return this.positionIsInsideCell(cellPosition, strand.position);
    });
    attackerStrandsInCell.forEach((attackerStrand: AttackerStrand) => {
      strandsInCell.forEach((strand: Strand) => {
        this.connectStrands(attackerStrand, strand);
      });
    });
  }

  connectStrands(attackStrand: AttackerStrand, strand: Strand): void {
    const xDif = Sketch.p5.abs(attackStrand.position.x - strand.position.x);
    const yDif = Sketch.p5.abs(attackStrand.position.y - strand.position.y);
    const lengthOfStrandsVision = this.gridSpacing * 0.75;
    if (xDif <= lengthOfStrandsVision && yDif <= lengthOfStrandsVision) {
      Sketch.p5.stroke(235, 120, 112);
      Sketch.p5.line(attackStrand.position.x, attackStrand.position.y, strand.position.x, strand.position.y);
    }
  }

  debugMode(mazeCell, mazeCellPosition): void {
    Sketch.p5.strokeWeight(1);
    const textOffset = 5;
    if (mazeCell.top) {
      Sketch.p5.textAlign(Sketch.p5.CENTER, Sketch.p5.TOP);
      Sketch.p5.text('Top', mazeCellPosition.x + (this.gridSpacing / 2), mazeCellPosition.y + textOffset);
    }
    if (mazeCell.right) {
      Sketch.p5.textAlign(Sketch.p5.RIGHT, Sketch.p5.CENTER);
      Sketch.p5.text('Right', mazeCellPosition.x + this.gridSpacing - textOffset, mazeCellPosition.y + (this.gridSpacing / 2));
    }
    if (mazeCell.bottom) {
      Sketch.p5.textAlign(Sketch.p5.CENTER, Sketch.p5.BOTTOM);
      Sketch.p5.text('Bottom', mazeCellPosition.x + (this.gridSpacing / 2), mazeCellPosition.y + this.gridSpacing - textOffset + 2);
    }
    if (mazeCell.left) {
      Sketch.p5.textAlign(Sketch.p5.LEFT, Sketch.p5.CENTER);
      Sketch.p5.text('Left', mazeCellPosition.x + textOffset, mazeCellPosition.y + (this.gridSpacing / 2));
    }
    Sketch.p5.textAlign(Sketch.p5.CENTER, Sketch.p5.CENTER);
    Sketch.p5.text('(' + mazeCell.col + ',' + mazeCell.row + ')', mazeCellPosition.x + (this.gridSpacing / 2), mazeCellPosition.y + (this.gridSpacing / 2));
    this.connectStrandsInCell(mazeCell);
  }

  convertColRowToPosition(cell: Cell) {
    return new Vector({x: this.position.x + (this.gridSpacing * cell.col), y: this.position.y +
        (this.gridSpacing * cell.row)});
  }

  convertPositionToColRow(position: Vector): Cell {
    return new Cell({col: Math.floor((position.x - this.position.x) / this.gridSpacing),
      row: Math.floor((position.y - this.position.y) / this.gridSpacing)});
  }

  addMazeCell(mazeCellParams): void {
    this.mazeCells.push(new MazeCell(mazeCellParams));
  }

  addSpawnPoint(cellParams): void {
    this.spawnPoints.push(new Cell(cellParams));
  }

  getCellByColAndRow(colRow): MazeCell {
    return this.mazeCells.find((mazeCell: MazeCell) => {
      return mazeCell.col === colRow.col && mazeCell.row === colRow.row;
    });
  }

  // Create Strands
  createStrands(count: number, color: Vector): void {
    for (let i = 0; i < count; i++) {
      const strand = new Strand({color: color});
      strand.position = this.getRandomSpawnPoint();
      strand.randomizeMovements();
      this.strands.push(strand);
    }
  }

  createAttackers(count: number, color: Vector): void {
    for (let i = 0; i < count; i++) {
      const attackerStrand = new AttackerStrand({color: color});
      attackerStrand.position = this.getRandomSpawnPoint();
      attackerStrand.randomizeMovements();
      this.attackerStrands.push(attackerStrand);
    }
  }

  // Get Position Inside Spawn Point
  getRandomSpawnPoint(): Vector {
    const randomSpawnPoint: number = this.spawnPoints.length > 1 ? Math.floor(Sketch.p5.random(0, this.spawnPoints.length)) : 0;
    const cell: Cell = this.spawnPoints[randomSpawnPoint];
    const entrancePosition: Vector = this.convertColRowToPosition(cell);
    const xRangeL = entrancePosition.x;
    const xRangeR = entrancePosition.x + this.gridSpacing;
    const yRangeT = entrancePosition.y;
    const yRangeB = entrancePosition.y + this.gridSpacing;
    return new Vector({x: Sketch.p5.random(xRangeL + 5, xRangeR - 5), y: Sketch.p5.random(yRangeT + 5, yRangeB - 5)});
  }

  positionIsInsideCell(cellPosition: Vector, strandPosition: Vector): boolean {
    return strandPosition.y > cellPosition.y &&
      strandPosition.y < cellPosition.y + this.gridSpacing &&
      strandPosition.x > cellPosition.x &&
      strandPosition.x < cellPosition.x + this.gridSpacing;
  }

  // Check If Strand Position is Crossing Any Borders
  positionIsCrossingCellBorders(currentPosition, potentialPosition): boolean {
    const currentCell: Cell = this.convertPositionToColRow(currentPosition);
    const currentCellPosition = this.convertColRowToPosition(currentCell);

    // Get Current Direction
    const headingTowardsTopOfCell = potentialPosition.y < currentCellPosition.y;
    const headingTowardsBottomOfCell = potentialPosition.y > currentCellPosition.y + this.gridSpacing;
    const headingTowardsLeftOfCell = potentialPosition.x < currentCellPosition.x;
    const headingTowardsRightOfCell = potentialPosition.x > currentCellPosition.x + this.gridSpacing;

    if (this.positionIsCrossingCurrentCellBorders(currentCell, headingTowardsTopOfCell, headingTowardsBottomOfCell, headingTowardsLeftOfCell, headingTowardsRightOfCell)) {
      return true;
    }
    if (this.positionIsCrossingPotentialCellBorders(potentialPosition, headingTowardsTopOfCell, headingTowardsBottomOfCell, headingTowardsLeftOfCell, headingTowardsRightOfCell)) {
      return true;
    }
    return this.positionIsCrossingDiagonalCellBorders(currentCell, headingTowardsTopOfCell, headingTowardsBottomOfCell, headingTowardsLeftOfCell, headingTowardsRightOfCell);
  }

  // Check Current Cell Borders
  positionIsCrossingCurrentCellBorders(currentCell: Cell, headingTowardsTopOfCell: boolean, headingTowardsBottomOfCell: boolean, headingTowardsLeftOfCell: boolean, headingTowardsRightOfCell: boolean): boolean {
    const currentMazeCell: MazeCell = this.getCellByColAndRow(currentCell);
    if (currentMazeCell != null) {
      const outsideTopOfCurrentCell = currentMazeCell.top && headingTowardsTopOfCell;
      const bottomOfCurrentCell = currentMazeCell.bottom && headingTowardsBottomOfCell;
      const leftOfCurrentCell = currentMazeCell.left && headingTowardsLeftOfCell;
      const rightOfCurrentCell = currentMazeCell.right && headingTowardsRightOfCell;
      return outsideTopOfCurrentCell || rightOfCurrentCell || bottomOfCurrentCell || leftOfCurrentCell;
    }
    return false;
  }

  // Check Potential Cell Borders
  positionIsCrossingPotentialCellBorders(potentialPosition: Vector, headingTowardsTopOfCell: boolean, headingTowardsBottomOfCell: boolean, headingTowardsLeftOfCell: boolean, headingTowardsRightOfCell: boolean): boolean {
    const potentialCell = this.convertPositionToColRow(potentialPosition);
    const potentialMazeCell = this.getCellByColAndRow(potentialCell);
    if (potentialMazeCell != null) {
      const outsideTopOfPotentialCell = headingTowardsBottomOfCell && potentialMazeCell.top;
      const outsideBottomOfPotentialCell = headingTowardsTopOfCell && potentialMazeCell.bottom;
      const outsideLeftOfPotentialCell = headingTowardsRightOfCell && potentialMazeCell.left;
      const outsideRightOfPotentialCell = headingTowardsLeftOfCell && potentialMazeCell.right;
      return outsideTopOfPotentialCell || outsideBottomOfPotentialCell || outsideLeftOfPotentialCell || outsideRightOfPotentialCell;
    }
    return false;
  }

  // Check 2 Surrounding Neighbors If Moving Diagonal
  positionIsCrossingDiagonalCellBorders(currentCell: Cell, headingTowardsTopOfCell: boolean, headingTowardsBottomOfCell: boolean, headingTowardsLeftOfCell: boolean, headingTowardsRightOfCell: boolean): boolean {
    const topNeighbor: MazeCell = headingTowardsTopOfCell ?
      this.getCellByColAndRow(new Cell({col: currentCell.col, row: currentCell.row - 1})) : null;
    const bottomNeighbor: MazeCell = headingTowardsBottomOfCell ?
      this.getCellByColAndRow(new Cell({col: currentCell.col, row: currentCell.row + 1})) : null;
    const leftNeighbor: MazeCell = headingTowardsLeftOfCell ?
      this.getCellByColAndRow(new Cell({col: currentCell.col - 1, row: currentCell.row})) : null;
    const rightNeighbor: MazeCell = headingTowardsRightOfCell ?
      this.getCellByColAndRow(new Cell({col: currentCell.col + 1, row: currentCell.row})) : null;

    if ((headingTowardsTopOfCell && headingTowardsLeftOfCell) ||
      (headingTowardsTopOfCell && headingTowardsRightOfCell) ||
      (headingTowardsBottomOfCell && headingTowardsLeftOfCell) ||
      (headingTowardsBottomOfCell && headingTowardsRightOfCell)) {
      debugger;
    }

    const outsideTopLeftCorner = headingTowardsTopOfCell && headingTowardsLeftOfCell && topNeighbor != null &&
      leftNeighbor != null && topNeighbor.left && leftNeighbor.top;
    const outsideTopRightCorner = headingTowardsTopOfCell && headingTowardsRightOfCell && topNeighbor != null &&
      rightNeighbor != null && topNeighbor.right && rightNeighbor.top;
    const outsideBottomLeftCorner = headingTowardsBottomOfCell && headingTowardsLeftOfCell && bottomNeighbor != null &&
      leftNeighbor != null && bottomNeighbor.left && leftNeighbor.bottom;
    const outsideBottomRightCorner = headingTowardsBottomOfCell && headingTowardsRightOfCell && bottomNeighbor != null &&
      rightNeighbor != null && bottomNeighbor.right && rightNeighbor.bottom;
    return outsideTopLeftCorner || outsideTopRightCorner || outsideBottomLeftCorner || outsideBottomRightCorner;
  }

}
