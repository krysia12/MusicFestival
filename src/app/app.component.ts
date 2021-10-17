import { Component } from '@angular/core';
import { FestivalService } from './festival.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Music Festival';
  festivals;
  constructor(service: FestivalService) {
    this.festivals = service.getFestivals();
  }

  mapBandDetailsToLabelnFestival(band:any,fest:any){
    return band.map((val:any) => {
      val.recordLabel = val.recordLabel ? val.recordLabel : 'No Record Label' ;
      val['festival']= fest?fest: null;
      return val;
    });
  }

  mapRecordLabelToBandDetails(flatArr: any,label: any){
    let tempArrBand: any = [];
    flatArr.map((band:any)=>{
      if(label == band.recordLabel){
        let bandDetails: any = {};
        bandDetails['bandname'] = band.name?band.name:null;
        bandDetails['festival'] = band.festival?band.festival:null;
        tempArrBand.push(bandDetails);
      }
    });
    return tempArrBand;
  }

  getRecordLabels(festivals:any){
    let recordLabels:any = [];
    for(let fest of festivals){
      recordLabels.push(this.mapBandDetailsToLabelnFestival(fest.bands, fest.name));
    }
    let oneDRecordDetails = recordLabels.flat();
    /* Formatting of array */
    let reformattedArr:any=[];
    let checkList: any =[];
    for(let record of oneDRecordDetails){
      let tempObj: any ={};
      if(checkList.indexOf(record.recordLabel)< 0){
        tempObj['label'] = record.recordLabel;
        tempObj['bands'] = this.mapRecordLabelToBandDetails(oneDRecordDetails,record.recordLabel);
        reformattedArr.push(tempObj);
        checkList.push(record.recordLabel);
      }
    }
    /* end formatting */
    return reformattedArr;
  }
}
