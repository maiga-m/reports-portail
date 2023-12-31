import { Injectable } from '@angular/core';
import { IFolder } from 'src/app/models/folder.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IPowerBIReport } from 'src/app/models/powerbireport.model';
export type EntityResponseType = HttpResponse<IFolder>;
export type EntityArrayResponseType = HttpResponse<IFolder[]>;
export type EntityArrayResponseTypePB = HttpResponse<IPowerBIReport[]>;




@Injectable({
  providedIn: 'root'
})
export class FolderService {

  protected resourceUrl = 'http://10.10.1.187/reports/api/v2.0/Folders';

  constructor(protected http: HttpClient) {}

  list(): Observable<EntityArrayResponseType> {
    return this.http.get<IFolder[]>(this.resourceUrl, { withCredentials: true, observe: 'response'}).pipe(map((res: EntityArrayResponseType) => res));
  }

  listOfReport(id: string): Observable<EntityArrayResponseTypePB> {
    return this.http.get<IPowerBIReport[]>(this.resourceUrl+'/'+id+'/CatalogItems', { withCredentials: true, observe: 'response' }).pipe(map((res: EntityArrayResponseTypePB) => res));
  }

}
