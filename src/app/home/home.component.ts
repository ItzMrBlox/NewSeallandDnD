import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { locations } from 'src/data/locations';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

	constructor(public router: Router) { }

	ngOnInit(): void {
		console.log(locations)
		console.log("test")
	}

}
