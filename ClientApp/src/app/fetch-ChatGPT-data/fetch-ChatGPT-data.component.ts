import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-ChatGPT-data.component.html'
})

export class FetchChatDataComponent {

  public APIResponse: ChatGPTRequestDTO[] = [];

  public SearchText = '';

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<ChatGPTRequestDTO[]>(baseUrl + 'api/chatgpt').subscribe(result => {
      this.APIResponse = result;
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
}


interface ChatGPTRequestDTO {
  response: string;
}
