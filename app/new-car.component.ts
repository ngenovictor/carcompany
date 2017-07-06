import { Component, Input,EventEmitter,Output } from '@angular/core';
import { Car } from './car.model'

@Component({
  selector: 'add-car',
  template:`
    <button  (click)="addNewClick()" *ngIf="createNew===false" class="btn btn-primary form">Add A Car</button>
	  <div *ngIf="createNew===true" class="form">
	  	<h2>Add A New Car</h2>
	  	<div class="form-group">
	  		<label>ID:</label>
	  		<input value ="{{existingCars.length}}" type="number" #newCarId readonly class="form-control">
	  	</div>
	  	<div class="form-group">
	  		<label>Name:</label>
	  		<input #newCarName class="form-control">
	  	</div>
	  	<div class="form-group">
	  		<label>Price:</label>
	  		<input type="number" #newCarPrice class="form-control">
	  	</div>
	  	<div class="form-group">
	  		<label>Type:</label>
	  		<input #newCarType class="form-control">
	  	</div>
	  	<div class="form-group">
	  		<label>Pic Url:</label>
	  		<input #newCarPicUrl class="form-control">
	  	</div>
	  	<button class="btn btn-primary" (click)='addNewcar(newCarId.value,newCarName.value,newCarPrice.value,newCarType.value,newCarPicUrl.value); 
	    newCarName.value=""; 
	    newCarPrice.value=""; 
	    newCarType.value=""; 
	    newCarPicUrl.value="";'>Done</button>
	  </div>

  `
})


export class NewCarComponent {
	@Input() existingCars: Car[];
	@Output() newCarSender = new EventEmitter();

	public createNew:boolean = false;

	addNewClick(){
		this.createNew = true;
	} 
	addNewcar(newCarId,newCarName,newCarPrice,newCarType,newCarPicUrl){
		var newCarToAdd: Car = new Car(newCarId,newCarName,newCarPrice,newCarType,newCarPicUrl);
    this.newCarSender.emit(newCarToAdd);
    this.createNew = false;
	}
}