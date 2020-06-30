import { Component, OnInit } from '@angular/core';
import { Theme } from '@classes/theme';

@Component({
  selector: 'app-playground-picker',
  templateUrl: './playground-picker.component.html',
  styleUrls: ['./playground-picker.component.scss']
})
export class PlaygroundPickerComponent implements OnInit {
  Theme: any;

  constructor() {
    this.Theme = Theme;
  }

  ngOnInit() {
  }

}
