import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Theme } from '@shared/classes/theme';

@Component({
  selector: 'app-playground-picker',
  templateUrl: './playground-picker.component.html',
  styleUrls: ['./playground-picker.component.scss']
})
export class PlaygroundPickerComponent implements OnInit {
  Theme: any;

  constructor(private activeModal: NgbActiveModal, private router: Router) {
    this.Theme = Theme;
  }

  ngOnInit() {
  }

  dismiss(): void {
    this.activeModal.dismiss();
  }

  navigate(url: string): void {
    this.router.navigate([url]);
    this.dismiss();
  }

}
