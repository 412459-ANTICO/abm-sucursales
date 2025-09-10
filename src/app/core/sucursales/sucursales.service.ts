import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sucursal} from '../../models/sucursal';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  constructor(private http: HttpClient) { }

  private apiUrl: string = 'http://localhost:3000/sucursales';

  postSucursal(sucursal: Sucursal): Observable<Sucursal> {
    return this.http.post<Sucursal>(this.apiUrl, sucursal);
  }

  getSucursales(): Observable<Sucursal[]> {
    return this.http.get<Sucursal[]>(this.apiUrl);
  }
}
