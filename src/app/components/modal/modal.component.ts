import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @HostListener('modalComponent') modalComponent: any;
  @HostListener('componentRef') componentRef: any;
  @ViewChild('modalTemplate', {read: ViewContainerRef, static: true}) modalTemplate: ViewContainerRef;
  @ViewChild('modalContainer', {static: true}) modalContainer: ElementRef;

  constructor(private resolver: ComponentFactoryResolver, private elem: ElementRef) { }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(this.modalComponent);
    this.modalTemplate.createComponent(factory);
    $(this.modalContainer.nativeElement).modal();
    $(this.modalContainer.nativeElement).on('hidden.bs.modal', (e) => {
      this.componentRef.destroy();
    });
  }

}
