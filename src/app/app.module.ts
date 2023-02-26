import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		CharactersComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
