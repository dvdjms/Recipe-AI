import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from '../shared-Service/shared.service';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css'],
	providers: [],
})

export class ModalComponent{

	constructor(private modalService: NgbModal, private sharedService: SharedService) {}

	openScrollableContent(longContent: any) {
		const ingredients = this.sharedService.onFetchRecipe();
		console.log('this empty array ', ingredients);

		this.modalService.open(longContent, { scrollable: true });
	}
}

