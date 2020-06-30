import {StrandContainer} from './strand-container';

export class StrandContainerManager {
  public strandContainers: StrandContainer[];

  constructor() {
    this.strandContainers = [];
  }

  // Remove Strand From A Single Strand Container
  static removeStrandFromStrandContainer(strandContainer, strandToRemove) {
    strandContainer.strands = strandContainer.strands.filter((strand) => {
      return strand !== strandToRemove;
    });
  }

  // Add Strand To A Single Strand Container
  static addStrandToStrandContainer(strandContainer, strandToAdd) {
    strandContainer.strands.push(strandToAdd);
  }

  addStrandContainer(strandContainerParams) {
    this.strandContainers.push(new StrandContainer(strandContainerParams));
  }

  // Display All Strand Containers & Strands
  display() {
    this.strandContainers.forEach((strandContainer) => {
      strandContainer.display();
      strandContainer.strands.forEach((strand) => {
        this.setStrandStrandContainer(strandContainer, strand, strand.getPositionUsingSpeed());
      });
    });
  }

  // Set Strand Strand Container To The First Strand Container That Its Not Outside Of or Teleport Back To Original Strand Container If Outside All
  setStrandStrandContainer(strandContainer, strand, pos) {
    let outsideStrandContainerCount = 0;

    for (let i = 0; i < this.strandContainers.length; i++) {
      if (!this.strandContainers[i].isPositionOutsideOfStrandContainer(pos)) {
        strand.move();
        if (this.strandContainers[i] !== strandContainer) {
          StrandContainerManager.addStrandToStrandContainer(this.strandContainers[i], strand);
          StrandContainerManager.removeStrandFromStrandContainer(strandContainer, strand);
        }
        break;
      } else { outsideStrandContainerCount++; }
    }
    if (outsideStrandContainerCount === this.strandContainers.length) {// Outside All Strand Containers
      strand.randomizeMovements();
    }
  }





}

