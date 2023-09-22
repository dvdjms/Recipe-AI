import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';


@Injectable()
export class FetchService {
  public APIResponse: string = '';

  constructor(private http: HttpClient, private sharedService: SharedService) {}

  initializeData(baseUrl: string) {
    this.http.get<ChatGPTRequestDTO[]>(baseUrl + 'api/chatgpt').subscribe(
      (result) => {
        console.log('Initial API response:', result);
      },
      (error) => console.error(error)
    );
  }

  fetchRecipe() {
    const sentence = this.sharedService.onFetchRecipe();
    const requestPayload = {
      SearchText: sentence
    };
    return this.http.post<any>('https://localhost:44417/api/chatgpt', requestPayload)
  }

}

interface ChatGPTRequestDTO {
  response: string;
}
