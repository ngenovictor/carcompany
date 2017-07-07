import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { NewCarComponent } from './new-car.component';
import { EditCarComponent } from './edit-car.component';
import { CarListComponent } from './car-list.component'; 

@NgModule({
	 imports: [
    BrowserModule,
    FormsModule
  ],
	declarations:[
	AppComponent,
	NewCarComponent,
	EditCarComponent,
	CarListComponent
	],
	bootstrap:[AppComponent]
})

export class AppModule{

}
