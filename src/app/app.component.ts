import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  template:`
	  <h1>{{title}}</h1>
	  <h2>{{hero.name}} details!</h2>
	  <div>
	  	<label>id: </label>{{hero.id}}
	  </div>
	  <div>
	    <label>name: </label>
	    <input value="{{hero.name}}" placeholder="name">
	  </div>
	  <div>
	    <label>name: </label>
	    <input value="{{hero.age}}" placeholder="age">
	  </div>
	`,
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  	  title = 'Tour of Heros';
	  hero: Hero = {
	  id: 1,
	  name: 'Windstorm',
	  age: 23
	};
}
