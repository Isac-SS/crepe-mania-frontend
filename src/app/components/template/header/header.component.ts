import { title } from 'process';
import { HeaderData } from './header-data-model';
import { HeaderService } from './heade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
  }

  get title() {
    return this.headerService.headerData.title
  }

  get icon() {
    return this.headerService.headerData.icon
  }

  get routeUrl() {
    return this.headerService.headerData.routeUrl
  }
}
