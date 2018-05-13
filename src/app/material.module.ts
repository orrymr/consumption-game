import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
	imports: [
	  MatCardModule,
	  MatIconModule,
	  MatButtonModule
	],
	exports: [
	  MatCardModule,
	  MatIconModule,
	  MatButtonModule
	]
})
export class MaterialModule {

}