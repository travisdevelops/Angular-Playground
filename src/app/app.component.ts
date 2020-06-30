import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import { PlaygroundPickerComponent } from './components/playground-picker/playground-picker.component';
import { Theme } from '@classes/theme';
import { ModalComponent } from '@app/components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public Theme: any;
  @ViewChild('modalContainer', { read: ViewContainerRef, static: false }) modalContainer: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {
    this.Theme = Theme;
    Theme.init();
  }

  // Open Playground Picker As A Modal Window
  openPlaygroundPicker() {
    const factory = this.resolver.resolveComponentFactory(ModalComponent);
    const componentRef = this.modalContainer.createComponent(factory);
    componentRef.instance.modalComponent = PlaygroundPickerComponent;
    componentRef.instance.componentRef = componentRef;
  }
}
