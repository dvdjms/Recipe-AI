import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
      providedIn: 'root'
    })

    export class FoodService {
    
      genericFoodUrl = 'assets/generic_food.csv';
    
      constructor(private http: HttpClient) {}
    
      getInfo() {
        return this.http.get(this.genericFoodUrl, { responseType: 'text' })
          .pipe(
            map(csvData => this.parseCsvToJson(csvData))
          );
      }
    
      private parseCsvToJson(csvData: string): any[] {
        const lines = csvData.split('\n');
        const result: Record<string, any>[] = [];
        const csvHeaders = lines[0].split(',');
    
        for (let i = 1; i < lines.length; i++) {
          const obj: Record<string, any> = {};
          const currentLine = lines[i].split(',');
    
          for (let j = 0; j < csvHeaders.length; j++) {
            obj[csvHeaders[j]] = currentLine[j];
          }
    
          result.push(obj);
        }
    
        return result;
      }
    }
    