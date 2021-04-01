import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface CvModel {

}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getCv(): Promise<CvModel> {
    return this.httpClient.get<CvModel>('assets/cv-sample.json')
    .toPromise();
  }
}
