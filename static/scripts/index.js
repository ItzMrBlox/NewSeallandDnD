import { Regions } from './data/regions.js';
import { Locations } from './data/locations.js';
import { UniqueMonsters } from './data/uniqueMonsters.js';

console.log(Regions);
console.log(UniqueMonsters);
console.log(Locations);

document.querySelectorAll('area').forEach((area) => {
    area.addEventListener('mousemove', (e) => {
        e = e || window.event;
        var id = e.target.id;

        let type = e.target.getAttribute('type');
        let infoBox = document.getElementsByClassName('infobox')[0];
        let infoName = document.getElementById('infobox_name');
        let infoDescription = document.getElementById('infobox_desc');

        if(type == 'region') {
            let region = Regions.find(region => region.Id == id);
            if(region == undefined) return;
            infoName.innerHTML = region.Name;
            infoDescription.innerHTML = region.Description;
        } else if(type == 'location') {
            let location = Locations.find(location => location.Id == id);
            if(location == undefined) return;
            infoName.innerHTML = location.Name;
            infoDescription.innerHTML = location.Description;
        }
        
        infoBox.style.top = e.pageY + 5 + 'px';
        infoBox.style.left = e.pageX - (infoBox.offsetWidth / 2) + 'px';
        infoBox.style.display = 'block';

    });

    area.addEventListener('mouseout', (e) => {
        document.getElementsByClassName('infobox')[0].style.display = 'none';
    });
});
