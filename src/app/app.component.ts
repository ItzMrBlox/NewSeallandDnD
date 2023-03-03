import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'New Sealland';

	constructor(public router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private httpClient: HttpClient) { 
		iconRegistry.addSvgIcon('artificer', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/Artificer Icon.svg'));
		iconRegistry.addSvgIcon('barbarian', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/Barbarian Icon.svg'));
		iconRegistry.addSvgIcon('bard', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/Bard Icon.svg'));
		iconRegistry.addSvgIcon('cleric', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/Cleric Icon.svg'));
		iconRegistry.addSvgIcon('druid', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/Druid Icon.svg'));
		iconRegistry.addSvgIcon('fighter', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/Fighter Icon.svg'));
		iconRegistry.addSvgIcon('monk', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/Monk Icon.svg'));
		iconRegistry.addSvgIcon('paladin', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/Paladin Icon.svg'));
		iconRegistry.addSvgIcon('ranger', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/Ranger Icon.svg'));
		iconRegistry.addSvgIcon('rogue', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/Rogue Icon.svg'));
		iconRegistry.addSvgIcon('sorcerer', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/Sorcerer Icon.svg'));
		iconRegistry.addSvgIcon('warlock', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/Warlock Icon.svg'));
		iconRegistry.addSvgIcon('wizard', sanitizer.bypassSecurityTrustResourceUrl('./assets/icons/Wizard Icon.svg'));
	}

	isQuestsPage() {
		return this.router.url.includes('quests');
	}
}
