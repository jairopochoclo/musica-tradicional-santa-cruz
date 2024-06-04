document.addEventListener("DOMContentLoaded", () => {
    fetch('lugares.json')
        .then(response => response.json())
        .then(data => initializeMap(data));
});

function initializeMap(locations) {
    const map = document.getElementById('map');
    const locationList = document.getElementById('location-list');

    locations.forEach(location => {
        const listItem = document.createElement('li');
        listItem.textContent = location.name;
        listItem.addEventListener('click', () => {
            window.open(location.url, '_blank');
        });
        locationList.appendChild(listItem);
    });
}
