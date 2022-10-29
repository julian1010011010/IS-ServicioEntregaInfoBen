import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getMunicipios(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/InfoBenController/GetMunicipios`);
  }

  getBeneficiariosByFilters(pCedula: string, pMunicipio: string): Observable<any[]>
  {
    return this.http.get<any[]>(`${environment.apiUrl}/InfoBenController/GetBeneficiariosByFilters?pCedula=${pCedula}&pMunicipio=${pMunicipio}`);
  }

  getBeneficiarios(): Observable<any[]>{
    return this.http.get<any[]>(`${environment.apiUrl}/InfoBenController`);
  }
}
