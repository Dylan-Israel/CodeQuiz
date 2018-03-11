import { Component } from '@angular/core';
import { navigation, NavigationLink } from '../models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public navigation: NavigationLink[] = navigation; 
}
