import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InfoConService {

  constructor(private http: HttpClient) { }

  getMunicipios(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/InfoConController/GetMunicipios`);
  }

  getBeneficiariosByFilters(pCedula: string, pMunicipio: string): Observable<any[]>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/InfoConController/GetBeneficiariosByFilters?pCedula=${pCedula}&pMunicipio=${pMunicipio}`);
  }

  getBeneficiarios(): Observable<any[]>{
    return this.http.get<any[]>(`${environment.apiUrl}/InfoConController`);
  }

}
