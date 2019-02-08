import { Vector } from '@app/classes/vector';
import { Helper } from '@app/classes/helper';
import { CanvasObject } from '@app/classes/canvas-object';
import { Emission } from './emission';

export class Emitter extends CanvasObject {
    public emissions: Emission[];
    public emissionCount: number;
    public active: boolean;

    constructor({position = new Vector(), emissionCount = 0} = {}) {
        super({position: position});
        this.emissions = [];
        this.emissionCount = emissionCount;
        this.active = false;
    }

    // Set New Count Of Emissions
    setEmissionsCount(emissionCount: number): void {
        this.emissionCount = emissionCount;
    }

    // Add Emissions
    emit(): void {
        if (this.active) {
            if (this.emissions.length > this.emissionCount) {// Remove A Single Emission (Immediately)
                this.emissions.pop();
                this.emit();
            } else {
                const _self = this;
                setTimeout(function() {
                    if (_self.active) {
                        if (_self.emissions.length < _self.emissionCount) {// Add A Single Emission (After Delay)
                            _self.emissions.push(new Emission({ position: new Vector(_self.position) }));
                        }
                        _self.emit();
                    }
                }, Helper.randomNumber(0, 100)); // Add Emissions At Random Intervals
            }
        }
    }

    // Display All Emissions
    display(): void {
        const activeEmissions: Emission[] = [];
        this.emissions.forEach((emission) => {
            emission.move();
            emission.display();
            const canRespawn: boolean = emission.opacity <= 0 || emission.isOutsideCanvas(emission.position);

            if (this.active && canRespawn) {// If Emitter Active & Can Respawn
                emission.respawn(this.position);
            }

            // If Emitter Active & Can Respawn Then Add To Active Emissions
            // If Not Respawned Then Add To Active Emissions
            if ((this.active && canRespawn) || !canRespawn) {
                 activeEmissions.push(emission);
            }
        });
        this.emissions = activeEmissions;
    }



}

