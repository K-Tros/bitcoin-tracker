import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class PriceService {

  private basePath = 'https://blockchain.info';

  constructor(private httpClient: HttpClient) { }

  public getPrice() {
    let headers = new HttpHeaders();

    const httpHeaderAccepts: string[] = [
      'application/json',
    ];

    headers = headers.set('Accept', httpHeaderAccepts);

    // Hits an external API, so don't use the url in environments
    return this.httpClient.get<any>(`${this.basePath}/ticker`,
      {
        headers: headers
      }
    );
  }

}
