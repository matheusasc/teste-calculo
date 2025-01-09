import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  calcularSoma(form: any): Promise<{ resultado: number }> {
    return lastValueFrom(this.http.post<{ resultado: number }>(`${this.apiUrl}/calculo`, form));
  }

}
