import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-home',
  templateUrl: './layout-home.component.html',
  styleUrls: ['./layout-home.component.scss']
})
export class LayoutHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  searchTextEmit(value: any): void {
    this.router.navigate(['home', 'search'], { queryParams: { stringSearch: value } })
  }
}
