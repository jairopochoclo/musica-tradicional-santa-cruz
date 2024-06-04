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
// Matrix effect
const matrixEffectContainer = document.getElementById('matrix-effect');

function generateRandomBinary() {
    return Math.floor(Math.random() * 2);
}

function generateMatrixLine() {
    const line = [];
    for (let i = 0; i < 50; i++) {
        line.push(generateRandomBinary());
    }
    return line.join('');
}

function generateMatrixEffect() {
    const lines = [];
    for (let i = 0; i < 30; i++) {
        lines.push(generateMatrixLine());
    }
    return lines.join('<br>');
}

function updateMatrixEffect() {
    matrixEffectContainer.innerHTML = generateMatrixEffect();
}

setInterval(updateMatrixEffect, 100);
