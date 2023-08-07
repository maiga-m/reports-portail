import { Component ,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
//import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CAISFF - BI';
  user: any;
  authenticated = false;
  isUser = false;
  isAdmin = false;

  constructor(private elementRef: ElementRef,  public  _router: Router /*, private readonly keycloak: KeycloakService*/) { 

    /*this.keycloak.isLoggedIn().then((authenticated) => {
      this.authenticated = authenticated;
      if (authenticated) {
        const roles = this.keycloak.getUserRoles();
        console.log('Roles' + roles);
        this.isUser = roles.includes('USER');
        this.isAdmin = roles.includes('ADMIN');
      }
    });*/

  }

  ngOnInit() {

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

  login() {
    //this.keycloak.login();
  }

  logout() {
    //this.keycloak.logout();
  }
  
}
