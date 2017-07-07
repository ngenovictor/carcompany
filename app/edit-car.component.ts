import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Car } from './car.model';

@Component({
	selector:'edit-car',
	template:`
	<div *ngIf="carToEdit" class="col-md-4">
		<div class="form-group">
			<label for="name">Name:</label>
			<input class="form-control" [(ngModel)]="carToEdit.name">
		</div>
		<div class="form-group">
			<label for="name">Price:</label>
			<input class="form-control" [(ngModel)]="carToEdit.price">
		<div class="form-group">
			<label for="name">Type:</label>
			<input class="form-control" [(ngModel)]="carToEdit.type">
		<div class="form-group">
			<label for="name">Pic URL:</label>
			<input class="form-control" [(ngModel)]="carToEdit.pic_url">
		<div class="form-group">
			<label for="name">Sold:</label>
			<input class="form-control" [(ngModel)]="carToEdit.sold">
		</div>
		<button class="btn btn-primary" (click)="doneEditClick()">Done</button>		
	</div>
	`
})

export class EditCarComponent{
	@Input() carToEdit: Car;
	@Output() doneEditClickSender = new EventEmitter;

	doneEditClick(){
		this.doneEditClickSender.emit();

	}
	

}
// id, name, price, type, pic_url, sold