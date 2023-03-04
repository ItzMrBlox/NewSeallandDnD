import { Component } from '@angular/core';
import { Locations } from 'src/data/locations';
import { NonPlayerCharacter, NonPlayerCharacters } from 'src/data/npcs';

@Component({
	selector: 'app-npcs',
	templateUrl: './npcs.component.html',
	styleUrls: ['./npcs.component.scss']
})
export class NPCsComponent {
	NonPlayerCharacters = NonPlayerCharacters;

	getLocation(npc: NonPlayerCharacter) {
		return Locations.find(location => location.Id === npc.Location)?.Name;
	}
}
