import { Component } from '@angular/core';
import { Quest, Quests, Status } from 'src/data/quests';

@Component({
	selector: 'app-quests',
	templateUrl: './quests.component.html',
	styleUrls: ['./quests.component.scss']
})
export class QuestsComponent {
	get activeQuests() {
		return Quests.filter(quest => quest.Status === Status.Active);
	}

	get inActiveQuests() {
		return Quests.filter(quest => quest.Status === Status.Inactive);
	}

	get finishedQuests() {
		return Quests.filter(quest => quest.Status == Status.Completed || quest.Status == Status.Failure);
	}
}