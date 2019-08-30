import {MazeCell} from '@app/modules/swarm/classes/maze-cell';
import {Vector} from '@classes/vector';
import {Sketch} from '@classes/sketch';

export class Maze {
  cells: MazeCell[][] = [];
  width: number;
  height: number;
  cellSize: number;
  cellCount: Vector;
  startPos: Vector;

  constructor({width = 0, height = 0, cellSize = 0} = {}) {
    this.cells = [];
    this.width = width;
    this.height = height;
    this.cellSize = cellSize;
    this.cellCount = new Vector({x: this.width / this.cellSize, y: this.height / this.cellSize});
    this.generate();
  }

  // Draw Maze
  display() {
    Sketch.p5.fill(255);
    this.cells.forEach((row: MazeCell[], rIndex) => {
      row.forEach((cell: MazeCell, cIndex) => {
        if (cell.type === 1) {
          Sketch.p5.rect(this.cellSize * cIndex, this.cellSize * rIndex, this.cellSize, this.cellSize);
        }
      });
    });
  }

  // Generate Maze
  generate() {
    this.init();
    // Pick Random Cell To Start
    const randomCellIndexVector = new Vector({x: Math.floor(Sketch.p5.random(0, this.cellCount.x)),
      y: Math.floor(Sketch.p5.random(0, this.cellCount.y))});
    this.startPos = new Vector({x: this.cellSize * randomCellIndexVector.x + this.cellSize / 2,
      y: this.cellSize * randomCellIndexVector.y + this.cellSize / 2});
    // Mark As Visited And Open
    this.cells[randomCellIndexVector.y][randomCellIndexVector.x].visited = true;
    this.cells[randomCellIndexVector.y][randomCellIndexVector.x].type = 0;
    this.generateRecursive(this.cells[randomCellIndexVector.y][randomCellIndexVector.x], this.getCellNeighbors(randomCellIndexVector), []);
  }

  // For Each Neighbor - Random Order
  // Recursive Until neighbors array is empty
  generateRecursive(cell, neighbors, selectedNeighbors) {
    if (neighbors.length > 0) {
      const neighborIndex = Sketch.p5.random(0, neighbors.length);
      const selectedNeighbor = neighbors.splice(neighborIndex)[0];
      selectedNeighbors.push(selectedNeighbor);
      if (!selectedNeighbor.visited) { // If Neighbor Hasn't Been Visited Remove Wall Between Current Cell And Neighbor Then Recurse With Neighbor
        selectedNeighbor.visited = true;
        selectedNeighbor.type = 0;
        this.generateRecursive(selectedNeighbor, this.getCellNeighbors(selectedNeighbor.position), []);
      }
      this.generateRecursive(cell, neighbors, selectedNeighbors); // Recursive Until neighbors array is empty
    }
  }

  // Get Neighbors
  getCellNeighbors(cellIndexVector) {
    const neighbors = [];
    // Up
    if (cellIndexVector.y > 0 && this.cells[cellIndexVector.y - 1][cellIndexVector.x] != null) {
      neighbors.push(this.cells[cellIndexVector.y - 1][cellIndexVector.x]);
    }
    // Left
    if (cellIndexVector.x > 0 && this.cells[cellIndexVector.y][cellIndexVector.x - 1] != null) {
      neighbors.push(this.cells[cellIndexVector.y][cellIndexVector.x - 1]);
    }
    // Down
    if (cellIndexVector.y < this.cells.length - 1 && this.cells[cellIndexVector.y + 1][cellIndexVector.x] != null) {
      neighbors.push(this.cells[cellIndexVector.y + 1][cellIndexVector.x]);
    }
    // Right
    if (cellIndexVector.x < this.cells[cellIndexVector.y].length - 1 && this.cells[cellIndexVector.y][cellIndexVector.x + 1] != null) {
      neighbors.push(this.cells[cellIndexVector.y][cellIndexVector.x + 1]);
    }
    return neighbors;
  }

  // Create Maze Cell Objects
  init() {
    this.cells = [];
    this.cellCount = new Vector({x: this.width / this.cellSize, y: this.height / this.cellSize});
    for (let i = 0; i < this.cellCount.y; i++) {
      this.cells.push([]);
      for (let j = 0; j < this.cellCount.x; j++) {
        this.cells[i].push(new MazeCell(new Vector({x: j, y: i})));
      }
    }
  }

  getPlayerMazePos(playerPosition) {
    return new Vector({x: Math.round(Math.floor(playerPosition.x / this.cellSize)),
      y: Math.round(Math.floor(playerPosition.y / this.cellSize))});
  }

  playerCanMove(playerPosition) {
    try {
      const playerMazePos = this.getPlayerMazePos(playerPosition);
      if (this.cells[playerMazePos.y][playerMazePos.x].type === 0) {
        return true;
      }
    } catch (e) {
      return false;
    }
  }
}
