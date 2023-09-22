import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-fetch-ChatGPT-data',
  templateUrl: './fetch-ChatGPT-data.component.html',
  styleUrls: ['./fetch-ChatGPT-data.component.css'],
})


export class FetchChatDataComponent {

  public APIResponse: string = '';
  public SearchText = '';

  // constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private sharedService: SharedService) {
  //   http.get<ChatGPTRequestDTO[]>(baseUrl + 'api/chatgpt').subscribe(result => {
  //     this.APIResponse += result;
  //   }, error => console.error(error));
  // }


  // onSubmit() {

  //   const sentence = this.sharedService.onFetchRecipe();
  //   const requestPayload = {
  //     SearchText: sentence
  //   };

  //   console.log(requestPayload.SearchText)

  //   this.http.post<any>('https://localhost:44417/api/chatgpt', requestPayload).subscribe(response => {
  //   console.log(response.answer)
  //   this.APIResponse = response.answer;
  //   }, error => console.error(error));
  // }

  // public formatResponse(response: string): string {
  //   return response.replace(/\n/g, '<br>');
  // }

}


interface ChatGPTRequestDTO {
  response: string;
}
