import { regions } from './data/regions.js';
console.log(regions);

document.querySelectorAll('area').forEach((area) => {
    area.addEventListener('click', (e) => {
        console.log(e)
        e = e || window.event;
        var id = e.target.id;

        let region = regions.find(region => region.Id == id);

        let infoBox = document.getElementsByClassName('infobox')[0];
        let infoName = document.getElementById('infobox_name');
        let infoDescription = document.getElementById('infobox_desc');

        infoName.innerHTML = region.Name;
        infoDescription.innerHTML = region.Description;

        infoBox.style.top = e.pageY + 'px';
        infoBox.style.left = e.pageX - (infoBox.offsetWidth / 2) + 'px';

    });
});