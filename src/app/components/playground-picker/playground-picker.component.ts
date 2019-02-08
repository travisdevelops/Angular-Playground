import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-playground-picker',
  templateUrl: './playground-picker.component.html',
  styleUrls: ['./playground-picker.component.scss']
})
export class PlaygroundPickerComponent implements OnInit {

  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
  }

}
