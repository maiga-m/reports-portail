import { Component, OnInit } from '@angular/core';
import { PowerBIReportService } from 'src/app/services/powerbireport/power-bireport.service';

@Component({
  selector: 'app-list-power-bi-report',
  templateUrl: './list-power-bi-report.component.html',
  styleUrls: ['./list-power-bi-report.component.css']
})
export class ListPowerBiReportComponent implements OnInit {

  reports: any;

  constructor(private s: PowerBIReportService) { }

  ngOnInit(): void {
    
    this.s.list().subscribe((data: any) => {
      console.log(data.body);
      this.reports = data.body;
      //console.log(this.clients);
    });
  }

  getAllCatalogItems(){
    this.s.list().subscribe((data: any) => {
      this.reports = data;
    });
  }
}
