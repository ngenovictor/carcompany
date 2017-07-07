import { Component, Input} from '@angular/core';
import { Car } from './car.model';
import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'my-app',
  template: `
  <nav>
  	<h1>Banana Car Selling Company [BCSC]</h1>
  </nav>  
  <edit-car
  	[carToEdit]="carToEdit"
  	(doneEditClickSender)="doneEdit($event)"
  ></edit-car>
	<add-car
		[allCars]="cars"
		[viewAddButtonValue]="viewAddButton"
		(newCarSender)="addCar($event)"
	></add-car>
	<car-list
		[allCars]="cars"
		(editCarSender)="editCar($event)"
	></car-list>
  `
})


export class AppComponent {
	public cars: Car[] = [
		new Car(0,"Mazda CX-5",200000,"salon","https://www.mazdausa.com/siteassets/vehicles/2017/cx-52/trims/sport/2017-cx5-sp-snowflakewhite-frontangle-global.png"),
		new Car(1,"Toyota Vitz",200000,"salon","https://static.pakwheels.com/2016/01/1999-2001_Toyota_Vitz-e1451999825967.jpg")
	]
  public selectedCar:Car = null;
  public carToEdit:Car = null;
  public viewAddButton:boolean = true;

	addCar(newCarFromChild: Car) {
    this.cars.push(newCarFromChild);
  }
  editCar(carToEditFromChild: Car){
  	this.carToEdit = carToEditFromChild;
  	this.viewAddButton = false;
  }
  doneEdit(){
  	this.carToEdit = null;
  	this.viewAddButton = true;
  }

}
