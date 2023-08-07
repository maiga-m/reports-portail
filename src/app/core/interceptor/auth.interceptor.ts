import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Buffer} from 'buffer';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  constructor(){}
 

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    

    const username = "MAZA-LAZA";
    const password = "";

    const authBase64 =  Buffer.from(username + ':' + password).toString('base64');
    
    /*req = req.clone({
      withCredentials : true,
      headers: req.headers.set('Authorization', `Basic ${authBase64}`),
    });*/

    console.log(authBase64); 
    
    return next.handle(req);
  }

}

