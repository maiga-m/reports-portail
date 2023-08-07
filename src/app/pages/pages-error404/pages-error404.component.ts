import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages-error404',
  templateUrl: './pages-error404.component.html',
  styleUrls: ['./pages-error404.component.css']
})
export class PagesError404Component implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  backHome(): void {
    this.route.navigateByUrl("http://10.10.1.187:9090");
  }

}
