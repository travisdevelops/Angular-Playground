import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import { PlaygroundPickerComponent } from './modules/core/components/playground-picker/playground-picker.component';
import { Theme } from '@shared/classes/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public Theme: any;

  constructor(private resolver: ComponentFactoryResolver, private modalService: NgbModal) {
    this.Theme = Theme;
    Theme.init();
  }

  // Open Playground Picker As A Modal Window
  openPlaygroundPicker() {
    this.modalService.open(PlaygroundPickerComponent);
  }
}
