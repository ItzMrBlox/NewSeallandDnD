import { Component } from '@angular/core';
import { quests, Status } from 'src/data/quests';

@Component({
	selector: 'app-quests',
	templateUrl: './quests.component.html',
	styleUrls: ['./quests.component.scss']
})
export class QuestsComponent {

	get inActiveQuests() {
		return quests.filter(quest => quest.Status === Status.Inactive);
	}

	get finishedQuests() {
		return quests.filter(quest => quest.Status == Status.Completed || quest.Status == Status.Failed);
	}
}