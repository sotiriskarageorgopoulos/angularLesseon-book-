import { Component } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj';

  model = new Model();

  getName():string{
    return this.model.user;
  }

  getItems():string[]{
    return this.model.items;
  }
}
