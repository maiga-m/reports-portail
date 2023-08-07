import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  folders: any;
  username: any;

  constructor(@Inject(DOCUMENT) private document: Document, private route: Router, private keycloackService: KeycloakService) { }

  ngOnInit(): void {
    this.username = this.keycloackService.getUsername();
  }

  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }

  logout(): void {
    this.keycloackService.logout("http://localhost:4200");
  }
}
