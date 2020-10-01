import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'add-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {
  public isComicsCurrentUrl = false;
  public isCharactersCurrentUrl = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isComicsCurrentUrl = location.href.includes('/comics');
    this.isCharactersCurrentUrl = location.href.includes('/characters');
  }

  public handleRoute(route: string) {
    this.router.navigate([route]);
  }

}
