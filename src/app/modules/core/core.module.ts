import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PlaygroundPickerComponent } from './components/playground-picker/playground-picker.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PlaygroundPickerComponent,
    HomeComponent
  ],
  entryComponents: [
    PlaygroundPickerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
