import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from './car.model';

@Component({
	selector:'car-list',
	template:`
	<div class="col-md-6">
	  <div class='col-sm-6 cars' *ngFor="let car of allCars">
	  	<p>{{car.name}}</p>
      <p>Price: {{car.price}}</p>
	  	<img src="{{car.pic_url}}">
	  	<button (click)="editCarClick(car)" class="btn btn-primary">Edit</button>
	  	<div class="car-status" *ngIf="car.sold===false">Buy</div>
	  	<div class="car-status" *ngIf="car.sold===true">Sold</div>
	  </div>
	</div>
	`
})

export class CarListComponent{
	@Input() allCars: Car[];
	@Output() editCarSender = new EventEmitter();

	editCarClick(carToEdit){
		this.editCarSender.emit(carToEdit);
	}

}