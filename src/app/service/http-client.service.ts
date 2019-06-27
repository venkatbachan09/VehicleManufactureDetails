import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Manufacturer{
  constructor(
    public Count:any,
    public Message:string,
    public SearchCriteria:string,
    public Results:Array<Results>,
  ) {}
  
}
export class Results{
  constructor(
    public Country:string,
    public Mfr_CommonName:string,
    public Mfr_ID:string,
    public Mfr_Name:string,
    public VehicleTypes:Array<VehicleTypes>,
  ) {}
  
}
export class VehicleTypes{
  constructor(
    public primary:boolean,
    public IsPrimary:boolean,
    public Name:string,
  ) {}
  
}

export class ManufacturerDet{
  constructor(
  public Count:any,
  public Message:string,
  public SearchCriteria:string,
  public Results:Array<VehicleDet>,
  ){}
}
export class VehicleDet{
  constructor(
    public MakeId:number,
    public MakeName:string,
    public VehicleTypeId: string,
    public VehicleTypeName: string,
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getVehiclesTypesByManufacturers()
  {
    console.log("test call");
    return this.httpClient.get<Manufacturer>('http://localhost:8080/auto/vehicles');
  }

  getVehiclesTypesByManufacturerName(mafacturerName)
  {
    console.log("test call");
    return this.httpClient.get<ManufacturerDet>(`http://localhost:8080/auto/vehicles/${mafacturerName}`);
  }

}
