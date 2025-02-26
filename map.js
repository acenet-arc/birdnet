var map = L.map('map');
map.setView([0, 0], 2);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);

var marker = L.marker([0, 0]).addTo(map);

// Handle lat long field changes
latitude_field = document.getElementById("recording_latitude");
longitude_field = document.getElementById("recording_longitude");

latitude_field.addEventListener("change", refresh_map);
longitude_field.addEventListener("change", refresh_map);

function refresh_map() {
    lat = parseFloat(latitude_field.value);
    lng = parseFloat(longitude_field.value);

    marker.setLatLng([lat, lng]);
    map.setView([lat, lng]);
}

map.on('click', (e) => {
    latitude_field.value = e.latlng.lat;
    longitude_field.value = e.latlng.lng;
    refresh_map();
});

refresh_map();