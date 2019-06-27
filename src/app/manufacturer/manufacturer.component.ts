import { Component, OnInit } from '@angular/core';
import { HttpClientService, Manufacturer, ManufacturerDet } from '../service/http-client.service';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {
  selected = false;
  manufacturer: Manufacturer;
  manufacturerdet: ManufacturerDet;
  result: Manufacturer["Results"];
   
  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getVehiclesTypesByManufacturers().subscribe(
     response =>{this.manufacturer = response;
      console.log(this.manufacturer);}
     
    );
  }

  selectManufacturer(Mfr_CommonName: string): void {
    this.selected= true;
    this.httpClientService.getVehiclesTypesByManufacturerName(Mfr_CommonName).subscribe(
      response =>{this.manufacturerdet = response;
       console.log(this.manufacturerdet);}
    );
  };

 
}
