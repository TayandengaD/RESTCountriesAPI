import { Component } from '@angular/core';
import {ThemeService} from '../../service/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {

  constructor(private themeService: ThemeService) { }

  toggleTheme() {
    this.themeService.toggleMode();
  }

}
