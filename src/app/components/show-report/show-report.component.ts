import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PowerBIReportService } from 'src/app/services/powerbireport/power-bireport.service';
import { ICatalogItem } from 'src/app/models/catalogItem.model';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-show-report',
  templateUrl: './show-report.component.html',
  styleUrls: ['./show-report.component.css']
})
export class ShowReportComponent implements OnInit {

  id: string = "";
  catalogItem?: ICatalogItem;
  url = "http://localhost:8089/reports/powerbi";
  urlWithSpaces: string = "";

  
  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute, private s: PowerBIReportService) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      
      const id = params['id']; // Récupère l'ID à partir des paramètres de la route
      this.id = id;
      this.s.getById(id).subscribe((data: any) => {
        this.catalogItem = data.body
        
        
        this.urlWithSpaces = encodeURIComponent(this.catalogItem!.Path).replace(/ /, "%20");
        this.urlWithSpaces = encodeURIComponent(this.catalogItem!.Path).replace(/%C3%A9/g, "é");
        this.urlWithSpaces = encodeURIComponent(this.catalogItem!.Path).replace(/%2F/g, "/");

        this.url = this.url;

        this.url = `${this.url}${this.urlWithSpaces}?rs:embed=true`;        
      })
    }); 
    
  } 

  transform(url: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
   
}
