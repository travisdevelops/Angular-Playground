import {Vector} from '@classes/vector';
import {Sketch} from '@classes/sketch';
import {Cell, MazeCell} from '@app/modules/swarm/classes/maze-cell';
import {Strand} from '@app/modules/swarm/classes/strand';
import {AttackerStrand} from '@app/modules/swarm/classes/attacker-strand';
import {CanvasObject} from '@classes/canvas-object';

export class MazeCellManager {
  private mazeCells: MazeCell[] = [];
  private gridSpacing: number;
  private color: Vector;
  private position: Vector;
  private debug: boolean;
  private strands: Strand[] = [];
  private attackerStrands: AttackerStrand[] = [];
  private spawnPoints: Cell[] = [];
  private attackerStrandVisionLength: number;
  private attackerStrandVisionMinLength: number;
  private strandVisionLength: number;

  constructor({gridSpacing = 120, color = new Vector(), position = new Vector(), debug = false} = {}) {
    this.gridSpacing = gridSpacing;
    this.color = color;
    this.position = position;
    this.debug = debug;
    this.attackerStrandVisionMinLength = this.gridSpacing * 0.4;
    this.attackerStrandVisionLength = this.gridSpacing * 0.75;
    this.strandVisionLength = this.gridSpacing * 0.85;
  }

  // ------------------------------ Configuration ------------------------------
  addMazeCell(mazeCellParams): void {
    this.mazeCells.push(new MazeCell({...mazeCellParams, rootPosition: this.position, gridSpacing: this.gridSpacing}));
  }

  addSpawnPoint(cellParams): void {
    this.spawnPoints.push(new Cell({...cellParams, rootPosition: this.position, gridSpacing: this.gridSpacing}));
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

  getRandomSpawnPoint(): Vector {
    const randomSpawnPoint: number = this.spawnPoints.length > 1 ? Math.floor(Sketch.p5.random(0, this.spawnPoints.length)) : 0;
    const selectedSpawnPoint: Cell = this.spawnPoints[randomSpawnPoint];
    const xRangeL = selectedSpawnPoint.position.x;
    const xRangeR = selectedSpawnPoint.position.x + this.gridSpacing;
    const yRangeT = selectedSpawnPoint.position.y;
    const yRangeB = selectedSpawnPoint.position.y + this.gridSpacing;
    return new Vector({x: Sketch.p5.random(xRangeL + 5, xRangeR - 5), y: Sketch.p5.random(yRangeT + 5, yRangeB - 5)});
  }

  // ------------------------------ Display & AI Behavior --------------------
  display(): void {
    this.mazeCells.forEach((mazeCell: MazeCell) => {
      this.displayMazeCell(mazeCell);
      this.displayStrandsWithAIBehavior(mazeCell);
    });
  }

  displayMazeCell(mazeCell: MazeCell): void {
    Sketch.p5.noFill();
    Sketch.p5.strokeWeight(5);
    Sketch.p5.stroke(this.color.x, this.color.y, this.color.z);
    Sketch.p5.beginShape(Sketch.p5.LINES);
    if (mazeCell.top) {
      Sketch.p5.vertex(mazeCell.position.x, mazeCell.position.y);
      Sketch.p5.vertex(mazeCell.position.x + this.gridSpacing, mazeCell.position.y);
    }
    if (mazeCell.right) {
      Sketch.p5.vertex(mazeCell.position.x + this.gridSpacing, mazeCell.position.y);
      Sketch.p5.vertex(mazeCell.position.x + this.gridSpacing, mazeCell.position.y + this.gridSpacing);
    }
    if (mazeCell.bottom) {
      Sketch.p5.vertex(mazeCell.position.x, mazeCell.position.y + this.gridSpacing);
      Sketch.p5.vertex(mazeCell.position.x + this.gridSpacing, mazeCell.position.y + this.gridSpacing);
    }
    if (mazeCell.left) {
      Sketch.p5.vertex(mazeCell.position.x, mazeCell.position.y);
      Sketch.p5.vertex(mazeCell.position.x, mazeCell.position.y + this.gridSpacing);
    }
    Sketch.p5.endShape();
    if (this.debug) {
      this.displayDebugMode(mazeCell);
    }
  }

  displayDebugMode(mazeCell): void {
    Sketch.p5.strokeWeight(1);
    const textOffset = 5;
    if (mazeCell.top) {
      Sketch.p5.textAlign(Sketch.p5.CENTER, Sketch.p5.TOP);
      Sketch.p5.text('Top', mazeCell.position.x + (this.gridSpacing / 2), mazeCell.position.y + textOffset);
    }
    if (mazeCell.right) {
      Sketch.p5.textAlign(Sketch.p5.RIGHT, Sketch.p5.CENTER);
      Sketch.p5.text('Right', mazeCell.position.x + this.gridSpacing - textOffset, mazeCell.position.y + (this.gridSpacing / 2));
    }
    if (mazeCell.bottom) {
      Sketch.p5.textAlign(Sketch.p5.CENTER, Sketch.p5.BOTTOM);
      Sketch.p5.text('Bottom', mazeCell.position.x + (this.gridSpacing / 2), mazeCell.position.y + this.gridSpacing - textOffset + 2);
    }
    if (mazeCell.left) {
      Sketch.p5.textAlign(Sketch.p5.LEFT, Sketch.p5.CENTER);
      Sketch.p5.text('Left', mazeCell.position.x + textOffset, mazeCell.position.y + (this.gridSpacing / 2));
    }
    Sketch.p5.textAlign(Sketch.p5.CENTER, Sketch.p5.CENTER);
    Sketch.p5.text('(' + mazeCell.col + ',' + mazeCell.row + ')', mazeCell.position.x + (this.gridSpacing / 2), mazeCell.position.y + (this.gridSpacing / 2));
  }

  displayStrandsWithAIBehavior(mazeCell: MazeCell) {
    // Get All Attacker Strands In Cell
    const attackerStrandsInCell = this.attackerStrands.filter((attackerStrand: AttackerStrand) => {
      return this.positionIsInsideCell(mazeCell.position, attackerStrand.position);
    });
    // Get All Strands In Cell
    const strandsInCell = this.strands.filter((strand: Strand) => {
      return this.positionIsInsideCell(mazeCell.position, strand.position);
    });

    if (attackerStrandsInCell.length === 0 && strandsInCell.length > 0) { // Only Strands In Cell
      this.moveStrandsInsideCell(strandsInCell);
    } else if (strandsInCell.length === 0 && attackerStrandsInCell.length > 0) { // Only Attackers In Cell
      this.moveStrandsInsideCell(attackerStrandsInCell);
    } else {
      // Make Attackers Move Towards The Closest Strand in Cell
      attackerStrandsInCell.forEach((attackerStrand: AttackerStrand) => {
        const closestStrand: Strand = this.getClosestStrandToAttacker(attackerStrand, strandsInCell);
        if (closestStrand != null) {
          this.moveAttackerStrandInsideCellTowardsStrand(attackerStrand, closestStrand);
        } else {
          this.moveStrandRandomly(attackerStrand);
        }
      });
      // Make Strands Move Away From The Closest Strand in Cell
      strandsInCell.forEach((strand: Strand) => {
        const closestAttacker: AttackerStrand = this.getClosestAttackerToStrand(strand, attackerStrandsInCell);
        if (closestAttacker != null) {
          this.moveStrandInsideCellAwayFromAttackerStrand(strand, closestAttacker);
        } else {
          this.moveStrandRandomly(strand);
        }
      });
    }
  }

  positionIsInsideCell(cellPosition: Vector, strandPosition: Vector): boolean {
    return strandPosition.y > cellPosition.y &&
      strandPosition.y < cellPosition.y + this.gridSpacing &&
      strandPosition.x > cellPosition.x &&
      strandPosition.x < cellPosition.x + this.gridSpacing;
  }

  getClosestStrandToAttacker(attackerStrand: AttackerStrand, strands: Strand[]): Strand {
    let closestStrand: Strand = null;
    let smallestDistance: Vector = null;
    strands.forEach((strand: Strand) => {
      const distance = Sketch.p5.dist(attackerStrand.position.x, attackerStrand.position.y, strand.position.x, strand.position.y);
      if (closestStrand == null || (distance > this.attackerStrandVisionMinLength && distance <= this.attackerStrandVisionLength && distance <= smallestDistance)) {
        smallestDistance = distance;
        closestStrand = strand;
      }
    });
    if (this.debug && closestStrand != null) {
      Sketch.p5.stroke(235, 120, 112);
      Sketch.p5.line(attackerStrand.position.x, attackerStrand.position.y, closestStrand.position.x, closestStrand.position.y);
    }
    return closestStrand;
  }

  getClosestAttackerToStrand(strand: Strand, attackerStrands: AttackerStrand[]): AttackerStrand {
    let closestAttacker: AttackerStrand = null;
    let smallestDistance: Vector = null;
    attackerStrands.forEach((attackerStrand: AttackerStrand) => {
      const distance = Sketch.p5.dist(strand.position.x, strand.position.y, attackerStrand.position.x, attackerStrand.position.y);
      if (closestAttacker == null || (distance <= this.strandVisionLength && distance <= smallestDistance)) {
        smallestDistance = distance;
        closestAttacker = attackerStrand;
      }
    });
    return closestAttacker;
  }

  moveAttackerStrandInsideCellTowardsStrand(attackerStrand: AttackerStrand, strand: Strand): void {
    let attackerStrandPotentialPos = null, currentDistance = 0, potentialDistance = 1;
    while (potentialDistance > currentDistance) {
      // attackerStrand.speed = this.getSpeedInsideBorder(attackerStrand);
      attackerStrand.setSpeedTowardsPosition(strand.position);
      attackerStrandPotentialPos = attackerStrand.getPositionUsingSpeed();
      currentDistance = Sketch.p5.dist(strand.position.x, strand.position.y,
        attackerStrand.position.x, attackerStrand.position.y);
      potentialDistance = Sketch.p5.dist(strand.position.x, strand.position.y,
        attackerStrandPotentialPos.x, attackerStrandPotentialPos.y);
    }
    attackerStrand.move();
    attackerStrand.display();
    /*if (potentialDistance <= currentDistance) {
      attackerStrand.move();
      attackerStrand.display();
    } else {
      attackerStrand.setSpeedTowardsPosition(strand.position);
      this.moveAttackerStrandInsideCellTowardsStrand(attackerStrand, strand);
    }*/
  }

  moveStrandInsideCellAwayFromAttackerStrand(strand: Strand, attackerStrand: AttackerStrand): void {
    let strandPotentialPos = null, currentDistance = 0, potentialDistance = 1;
    while (potentialDistance < currentDistance) {
      // strand.speed = this.getSpeedInsideBorder(strand);
      strand.setSpeedAwayFromPosition(attackerStrand.position);
      strandPotentialPos = strand.getPositionUsingSpeed();
      currentDistance = Sketch.p5.dist(attackerStrand.position.x, attackerStrand.position.y, strand.position.x,
        strand.position.y);
      potentialDistance = Sketch.p5.dist(attackerStrand.position.x, attackerStrand.position.y,
        strandPotentialPos.x, strandPotentialPos.y);
    }
    strand.move();
    strand.display();

    /*strand.speed = this.getSpeedInsideBorder(strand);
    const strandPotentialPos = strand.getPositionUsingSpeed();
    const currentDistance = Sketch.p5.dist(attackerStrand.position.x, attackerStrand.position.y, strand.position.x,
      strand.position.y);
    const potentialDistance = Sketch.p5.dist(attackerStrand.position.x, attackerStrand.position.y,
      strandPotentialPos.x, strandPotentialPos.y);

    if (potentialDistance <= currentDistance) {
      strand.move();
      strand.display();
    } else {
      strand.setSpeedAwayFromPosition(attackerStrand.position);
      this.moveStrandInsideCellAwayFromAttackerStrand(strand, attackerStrand);
    }*/
  }

  getSpeedInsideBorder(attackerStrand) {
    /*if (!this.positionIsCrossingCellBorders(attackerStrand.position, attackerStrand.getPositionUsingSpeed())) {
      return attackerStrand.speed;
    }
    attackerStrand.randomizeSpeed();
    return this.getSpeedInsideBorder(attackerStrand);*/
    while (this.positionIsCrossingCellBorders(attackerStrand.position, attackerStrand.getPositionUsingSpeed())) {
      attackerStrand.randomizeSpeed();
    }
    return attackerStrand.speed;
  }

  moveStrandsInsideCell(strands: Strand[]): void {
    strands.forEach((strand: Strand) => {
      this.moveStrandRandomly(strand);
    });
  }

  moveStrandRandomly(strand: Strand): void {
    strand.speed = this.getSpeedInsideBorder(strand);
    strand.move();
    strand.display();
  }

  // ------------------------------ Wall Cell Crossing Borders ------------------------------
  // Check If Strand Position is Crossing Any Borders
  positionIsCrossingCellBorders(currentPosition, potentialPosition): boolean {
    const currentCell: Cell = this.convertPositionToColRow(currentPosition);

    // Get Current Direction
    const headingTowardsTopOfCell = potentialPosition.y < currentCell.position.y;
    const headingTowardsBottomOfCell = potentialPosition.y > currentCell.position.y + this.gridSpacing;
    const headingTowardsLeftOfCell = potentialPosition.x < currentCell.position.x;
    const headingTowardsRightOfCell = potentialPosition.x > currentCell.position.x + this.gridSpacing;

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

  // ------------------------------ Helpers ------------------------------
  convertPositionToColRow(position: Vector): Cell {
    return new Cell({col: Math.floor((position.x - this.position.x) / this.gridSpacing),
      row: Math.floor((position.y - this.position.y) / this.gridSpacing), rootPosition: this.position, gridSpacing: this.gridSpacing});
  }

  getCellByColAndRow(colRow): MazeCell {
    return this.mazeCells.find((mazeCell: MazeCell) => {
      return mazeCell.col === colRow.col && mazeCell.row === colRow.row;
    });
  }







}
