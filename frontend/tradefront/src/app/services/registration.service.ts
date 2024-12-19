import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from '../models/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
servrurl="http://localhost:9009/registration"
  constructor(private http:HttpClient) { }
  getAll():Observable<Registration[]>
  {
  return this.http.get<Registration[]>(this.servrurl+"/registrations")
  }
  save(r:Registration):Observable<Registration>
  {
    return this.http.post<Registration>(this.servrurl+"/addreg",r)
  }
  login(e:any,p:any):Observable<Registration[]>
  {
    return this.http.get<Registration[]>(this.servrurl+"/login/"+e+"/"+p)
  }
}
