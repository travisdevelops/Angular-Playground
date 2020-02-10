import {Strand} from '@app/modules/swarm/classes/strand';
import {Vector} from '@classes/vector';

export class AttackerStrand extends Strand {

  constructor(props) {
    super(props);
  }

  eatStrand(strand: Strand): void {
    const newSize = this.size.x + (strand.size.x / 4);
    const newSpeed = this.maxSpeed.x + (strand.maxSpeed.x / 4);
    this.visionRadius += 2;
    this.size = new Vector({x: newSize, y: newSize });
    this.maxSpeed = new Vector({x: newSpeed, y: newSpeed});
  }

}
