import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { characters } from 'src/data/characters';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
	constructor(public router: Router) { }

	ngOnInit(): void {
	}

	get random3Characters() {
		return characters.sort(() => Math.random() - 0.5).slice(0, 3);
	}

}
