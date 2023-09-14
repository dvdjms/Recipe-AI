import { Component } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css'],
})

export class NgbModalComponent{
	closeResult = '';

	constructor(private modalService: NgbModal) {}


	openScrollableContent(longContent: any) {
		this.modalService.open(longContent, { scrollable: true });
	}
      
}