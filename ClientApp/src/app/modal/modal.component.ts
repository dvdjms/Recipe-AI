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
	public isButtonVisible = true;
	public isLoaderVisible = false;

	constructor(private modalService: NgbModal, private sharedService: SharedService, private fetchService: FetchService) {}

	openScrollableContent(longContent: any) {

		this.isButtonVisible = false;
		this.isLoaderVisible = true;

		this.fetchService.fetchRecipe().subscribe(
			(data) => {
				this.recipeData = data;
				this.isButtonVisible = true;
				this.modalService.open(longContent, { scrollable: true });
				this.isLoaderVisible = false;
			},
			(error) => {
				console.error('Error fetching recipe:', error);
			}
		);
		this.sharedService.clearSentence();
	}

	public formatResponse(response: string): string {
		return response.replace(/\n/g, '<br>');
	}

}

