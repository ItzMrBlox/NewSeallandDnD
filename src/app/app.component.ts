import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'New Sealland';

	constructor(public router: Router) { }

	isQuestsPage() {
		return this.router.url.includes('quests');
	}
}
