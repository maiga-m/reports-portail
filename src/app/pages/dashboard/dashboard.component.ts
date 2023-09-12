import { Component, OnInit, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { KeycloakService } from 'keycloak-angular';
import { IFolder } from 'src/app/models/folder.model';
import { FolderService } from 'src/app/services/folder/folder.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  folders: IFolder[] = [];
  items:any;
  url = "http://10.10.1.187/reports/powerbi";
  
  constructor(private sanitizer: DomSanitizer, private elementRef: ElementRef, protected s: FolderService, private keycloackService: KeycloakService) { }

  ngOnInit(): void {

    this.s.list().subscribe((data: any) => {
      //console.log(data)
      this.folders = data.body.value;

      this.folders.forEach(c =>{
        this.s.listOfReport(c.Id).subscribe((data: any) => {
         c.catalogItems = data.body.value;
        });
      });

    });

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

  hasRole(r: string): boolean {
    return this.keycloackService.isUserInRole(r);
  }

  public extractSubString(text: string): string {
    const splitArray = text.split(" - ");
    return splitArray[1] || ""; // Retourne la sous-chaîne ou une chaîne vide si elle est absente
  }

  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
