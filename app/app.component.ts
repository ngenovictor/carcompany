import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
  <nav>
  	<h1>Banana Car Selling Company</h1>
  </nav>
  <div>
  	<add-car></add-car>
  </div>
  `
})


export class AppComponent {
	title:string = "Car Companys";

}
