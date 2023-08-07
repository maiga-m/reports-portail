import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ICatalogItem } from 'src/app/models/catalogItem.model';

export type EntityArrayResponseType = HttpResponse<ICatalogItem[]>;

@Injectable({
  providedIn: 'root'
})
export class CatalogItemService {

  protected resourceUrl = 'http://localhost:8089/reports/api/v2.0/CatalogItems';

  constructor(protected http: HttpClient) {}

  list(): Observable<EntityArrayResponseType> {
    return this.http.get<ICatalogItem[]>(this.resourceUrl, { withCredentials: true, observe: 'response' }).pipe(map((res: EntityArrayResponseType) => res));
  }

}
