import { Component, OnInit } from '@angular/core';
import { CatalogItemService } from 'src/app/services/catalogitem/catalog-item.service';


@Component({
  selector: 'app-list-catalogue-item',
  templateUrl: './list-catalogue-item.component.html',
  styleUrls: ['./list-catalogue-item.component.css']
})
export class ListCatalogueItemComponent implements OnInit {

  CatalogItems: any;

  constructor(private s: CatalogItemService) { }

  ngOnInit(): void {
    
    this.s.list().subscribe((data: any) => {
      //console.log(data.body);
      this.CatalogItems = data.body;
      //console.log(this.clients);
    });
  }

}
