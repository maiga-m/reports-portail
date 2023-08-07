import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IPowerBIReport } from 'src/app/models/powerbireport.model';

export type EntityResponseType = HttpResponse<IPowerBIReport>;
export type EntityArrayResponseType = HttpResponse<IPowerBIReport[]>;

@Injectable({
  providedIn: 'root'
})
export class PowerBIReportService {

  protected resourceUrl = 'http://localhost:8089/reports/api/v2.0/PowerBIReports';

  constructor(protected http: HttpClient) {}

  list(): Observable<EntityArrayResponseType> {
    return this.http.get<IPowerBIReport[]>(this.resourceUrl, { withCredentials: true, observe: 'response' }).pipe(map((res: EntityArrayResponseType) => res));
  }

  getById(id: string): Observable<EntityResponseType> {
    return this.http.get<IPowerBIReport>(this.resourceUrl+'/'+id, { withCredentials: true, observe: 'response' }).pipe(map((res: EntityResponseType) => res));
  }

}
