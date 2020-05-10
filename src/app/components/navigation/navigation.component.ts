import { Component, OnInit } from '@angular/core';
import { routes as appRoutes } from '@env/environment';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  routes = appRoutes;

  ngOnInit() {
  }

}
