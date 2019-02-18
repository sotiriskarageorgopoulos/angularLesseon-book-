import { Component } from '@angular/core';
import { Model, ToDoItem } from '../model';

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
  return this.model.items.filter(item => !item.getDone); //Display only items with values false,because !false = true
  }

  addItems(newItem){
    if(newItem !== "") this.model.items.push(new ToDoItem(newItem,false));
  }
}
