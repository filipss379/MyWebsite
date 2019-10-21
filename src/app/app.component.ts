import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clickedMenu: boolean = false;


  changeMenuStatus(): void {
    this.clickedMenu = !this.clickedMenu;
  }

}
