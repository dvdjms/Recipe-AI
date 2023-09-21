import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
})
export class NgbdModalContent {

  constructor(public activeModal: NgbActiveModal) {}

  // Add your content-specific logic here.
}
