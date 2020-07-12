import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundPickerComponent } from './components/playground-picker/playground-picker.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {faSun, faMoon, faChevronCircleLeft, faSyncAlt} from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundPickerComponent,
    ModalComponent,
    HomeComponent
  ],
  entryComponents: [
    ModalComponent,
    PlaygroundPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faSun, faMoon, faChevronCircleLeft, faSyncAlt);
  }
}
