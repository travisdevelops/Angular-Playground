import { Component } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { PlaygroundPickerComponent } from './components/playground-picker/playground-picker.component';
import { Theme } from './classes/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public Theme: any;

  constructor(private modalService: NgbModal) {
    this.Theme = Theme;
    Theme.init();
  }

  // Open Playground Picker As A Modal Window
  openPlaygroundPicker() {
    this.modalService.open(PlaygroundPickerComponent).result.then((closed) => {
    }, (dismissed) => {
    });
  }
}
