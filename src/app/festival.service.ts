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
  //Using the output of the API directly as Cross-Origin Requests are Blocked
    /* return [{
               "name": "LOL-palooza",
               "bands": [{
                 "name": "Winter Primates",
                 "recordLabel": ""
               },
               {
                 "name": "Frank Jupiter",
                 "recordLabel": "Pacific Records"
               },
               {
                 "name": "Jill Black",
                 "recordLabel": "Fourth Woman Records"
               },
               {
                 "name": "Werewolf Weekday",
                 "recordLabel": "XS Recordings"
               }]
             },
             {  "name": "Small Night In",
                "bands": [{
                  "name": "Squint-281",
                  "recordLabel": "Outerscope"
                },
                {
                  "name": "The Black Dashes",
                  "recordLabel": "Fourth Woman Records"
                },
                {
                  "name": "Green Mild Cold Capsicum",
                  "recordLabel": "Marner Sis. Recording"
                },
                {
                  "name": "Yanke East",
                  "recordLabel": "MEDIOCRE Music"
                },
                {
                  "name": "Wild Antelope",
                  "recordLabel": "Marner Sis. Recording"
                }]
             },
             {
               "name": "Trainerella",
               "bands":
               [{
                 "name": "Wild Antelope",
                 "recordLabel": "Still Bottom Records"
               },
               {
                 "name": "Manish Ditch",
                 "recordLabel": "ACR"
               },
               {
                 "name": "Adrian Venti",
                 "recordLabel": "Monocracy Records"
               },
               {
                 "name": "YOUKRANE",
                 "recordLabel": "Anti Records"
               }]
             },
             {
               "name": "Twisted Tour",
               "bands": [
                 {
                   "name": "Summon",
                   "recordLabel": "Outerscope"
                 },
                 {
                   "name": "Auditones",
                   "recordLabel": "Marner Sis. Recording"
                 },
                 {
                   "name": "Squint-281"
                 }]
               },
               {
                 "bands": [
                   {
                     "name": "Critter Girls",
                     "recordLabel": "ACR"
                   },
                   {
                     "name": "Propeller",
                     "recordLabel": "Pacific Records"
                   }]
                 }
               ]; */
    }
 }
