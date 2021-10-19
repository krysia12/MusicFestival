import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, shareReplay, catchError } from 'rxjs/operators';

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
                    shareReplay(1),
                    catchError(error => {
                                            let errorMsg: string;
                                            if (error.error instanceof ErrorEvent) {
                                                errorMsg = `Error: ${error.error.message}`;
                                            } else {
                                                errorMsg = this.getServerErrorMessage(error);
                                            }
                                            return throwError(errorMsg);
                                        }
                 ));
    }
    return this.festivals;

    }

    private getServerErrorMessage(error: any): string {
            switch (error.status) {
                case 404: {
                    return `Not Found: ${error.message}`;
                }
                case 403: {
                    return `Access Denied: ${error.message}`;
                }
                case 500: {
                    return `Internal Server Error: ${error.message}`;
                }
                default: {
                    return `Unknown Server Error: ${error.message}`;
                }

            }
        }
 }
