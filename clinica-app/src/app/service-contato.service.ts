import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceContatoService {


  constructor(private http: HttpClient) {  }

  save(data: any){
    let url = 'http://localhost:8080/medico'
    return this.http.post(url, data);
  }

  getAll(){
    let url = 'http://localhost:8080/medico'
    return this.http.get(url)
  }

 

}