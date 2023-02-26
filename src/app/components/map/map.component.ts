import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { locations, Location } from 'src/data/locations';
import { regions, Region } from 'src/data/regions';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
	infoBox: any;
	mapAreas: HTMLAreaElement[] = [];
	currentHover: {title: string, description: string} = {title: '', description: ''};
	data: { [key: string]: any } = {
		region: regions,
		location: locations
	}
	
	ngAfterViewInit(): void {
		this.infoBox = document.querySelector('.info-box');
		this.mapAreas = Array.from(document.querySelectorAll('area'));

		this.mapAreas.forEach((area) => {
			area.addEventListener('mousemove', (e) => {
				var element = e.target as HTMLAreaElement;
				var type = element.getAttribute('type');


				if(type == 'region' || type == 'location') {
					var id = element.getAttribute('id') as unknown as number;
					var section = this.data[type].find((item: Region | Location) => item.Id == id);
					this.currentHover = {
						title: section.Name,
						description: section.Description
					}
					// set infobox display to block
					this.infoBox.style.display = 'block';
					this.infoBox.style.top = e.pageY + 5 + 'px';
					this.infoBox.style.left = e.pageX - (this.infoBox.offsetWidth / 2) + 'px';
				}
			});

			area.addEventListener('mouseout', (e) => {
				this.infoBox.style.display = 'none';
			});
		});
	}
}
