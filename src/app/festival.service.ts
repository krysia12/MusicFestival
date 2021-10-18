import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FestivalService {

  festivals: Observable<any>;

  constructor(private httpClient: HttpClient) { }

  getFestivals() {
    if(!this.festivals){
       let headers = new HttpHeaders();
           headers.append('Content-Type','application/json');
             return this.httpClient.get('/api/v1/festivals',{
               headers: headers
             }).pipe(
                    shareReplay(1)
                 );
    }
    return this.festivals;

    }
 }
