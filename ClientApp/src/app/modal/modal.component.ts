import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from '../services/shared.service';
import { FetchService } from '../services/fetch.service';


@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.css'],
})

export class ModalComponent{
	recipeData: any;
	constructor(private modalService: NgbModal, private sharedService: SharedService, private fetchService: FetchService) {}

	openScrollableContent(longContent: any) {
		// this.sharedService.onFetchRecipe();
		// this.fetchService.fetchRecipe().subscribe(
		// 	(data) => {
		// 	  	this.recipeData = data;
		// 		this.modalService.open(longContent, { scrollable: true });
		// 	},
		// 	(error) => {
		// 	  console.error('Error fetching recipe:', error);
		// 	}
		// );
		this.modalService.open(longContent, { scrollable: true });
	}


	public formatResponse(response: string): string {
		return response.replace(/\n/g, '<br>');
	}

}

