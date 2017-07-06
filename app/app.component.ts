import { Component, Input} from '@angular/core';
import { Car } from './car.model';
import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'my-app',
  template: `
  <nav>
  	<h1>Banana Car Selling Company</h1>
  </nav>
  <div class="col-md-4">
  	<add-car
  		[existingCars]="cars"
  		(newCarSender)="addCar($event)"
  	></add-car>
  </div>
  <div class="col-md-6">
	  <div class='col-sm-6 cars' *ngFor="let car of cars">
	  	<p>{{car.name}}</p>
	  	<img src="{{car.pic_url}}">
	  	<button (click)="editclick" class="btn btn-primary">Edit</button>
	  	<div class="car-status" *ngIf="car.sold===false">Buy</div>
	  	<div class="car-status" *ngIf="car.sold===true">Sold</div>
	  </div>
	</div>

  `
})


export class AppComponent {



	public cars: Car[] = [
		new Car(0,"Mazda CX-5",200000,"salon","https://www.mazdausa.com/siteassets/vehicles/2017/cx-52/trims/sport/2017-cx5-sp-snowflakewhite-frontangle-global.png"),
		new Car(1,"Toyota Vitz",200000,"salon","https://static.pakwheels.com/2016/01/1999-2001_Toyota_Vitz-e1451999825967.jpg")
	] 
	addCar(newTaskFromChild: Car) {
    this.cars.push(newTaskFromChild);
  }

}
