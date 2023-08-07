import { Component, OnInit } from '@angular/core';
import { FolderService } from 'src/app/services/folder/folder.service';

@Component({
  selector: 'app-list-folder',
  templateUrl: './list-folder.component.html',
  styleUrls: ['./list-folder.component.css']
})
export class ListFolderComponent implements OnInit {

  folders: any;
  catalogItem: any;


  constructor(private s: FolderService) { }

  ngOnInit(): void {
    
    this.s.list().subscribe((data: any) => {
      this.folders = data.body;
      for(var r of this.folders.value) {
        this.s.listOfReport(r.Id).subscribe((data: any) =>{
          
          
          this.catalogItem = data;
        
        })
      }
      //console.log(this.clients);

      
    });

    console.log(this.folders);
    
  }



}
