import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { FoodService } from './food.service';


@Component({
  selector: 'app-fetch-ChatGPT-data',
  templateUrl: './fetch-ChatGPT-data.component.html',
  styleUrls: ['./fetch-ChatGPT-data.component.css'],
})


export class FetchChatDataComponent {

  public APIResponse: string = '';
  public SearchText = '';

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<ChatGPTRequestDTO[]>(baseUrl + 'api/chatgpt').subscribe(result => {
      this.APIResponse += result;
    }, error => console.error(error));
  }


  onSubmit() {
    const requestPayload = {
      SearchText: this.SearchText // Include user input in the request
    };
    console.log(requestPayload.SearchText)

    this.http.post<any>('https://localhost:44417/api/chatgpt', requestPayload).subscribe(response => {
    console.log(response.answer)
    this.APIResponse = response.answer;
    }, error => console.error(error));
  }

  public formatResponse(response: string): string {
    return response.replace(/\n/g, '<br>');
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }



}


interface ChatGPTRequestDTO {
  response: string;
}
