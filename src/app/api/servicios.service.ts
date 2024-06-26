import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) { }

  get = ():Observable<Response | any> => {
    return this.http.get<Response | any>(`${environment.apiUrl}/servicios`);
  }
}
