import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { CatalogItem } from 'src/app/models/catalogItem.model';
import { IFolder } from 'src/app/models/folder.model';
import { FolderService } from 'src/app/services/folder/folder.service';
import { PowerBIReportService } from 'src/app/services/powerbireport/power-bireport.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  folders: IFolder[] = [];
  items:any;
  
  constructor(protected s: FolderService, 
    protected rs: PowerBIReportService,
    private keycloackService: KeycloakService) { }

  ngOnInit(): void {

    this.s.list().subscribe((data: any) => {
      this.folders = data.body.value;

      this.folders.forEach(c =>{
        this.s.listOfReport(c.Id).subscribe((data: any) => {
         c.catalogItems = data.body.value;
        });
      });

    });
  }

  hasRole(r: string): boolean {
    return this.keycloackService.isUserInRole(r);
  }

  public extractSubString(text: string): string {
    const splitArray = text.split(" - ");
    return splitArray[1] || ""; // Retourne la sous-chaîne ou une chaîne vide si elle est absente
  }

}
