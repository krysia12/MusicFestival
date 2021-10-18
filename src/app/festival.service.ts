import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FestivalService {

  constructor(private httpClient: HttpClient) {}

  getFestivals() {
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
      return this.httpClient.get('/api/v1/festivals',{
        headers: headers
      });
    }
 }
