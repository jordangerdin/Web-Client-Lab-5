let bridges = [ // Array of the longest bridges in the US information
    {'name': "Verrazano-Narrows Bridge", 'coordinates': [40.6066, -74.0447], 'span': 1298.4, 'city/state': "New York, NY"},
    {'name': "Golden Gate Bridge", 'coordinates': [37.8199, -122.4783], 'span': 1280.2, 'city/state': "San Francisco and Marin, CA"},
    {'name': "Mackinac Bridge", 'coordinates': [45.8174, -84.7278], 'span': 1158.0, 'city/state': "Mackinaw and St Ignace, MI"},
    {'name': "George Washington Bridge", 'coordinates': [40.8517, -73.9527], 'span': 1067.0, 'city/state': "New York, NY and New Jersey, NJ"},
    {'name': "Tacoma Narrows Bridge", 'coordinates': [47.2690, -122.5517], 'span': 853.44, 'city/state': "Tacoma and Kitsap, WA"}
]

var bridgeIcon = L.icon({ // Setting up custom icon
    iconUrl: 'bridge.png',
    iconSize: '[24, 24]',
    iconAnchor: '[22, 28]'
})

let coordinates = [39.8283, -98.5795] // Center of US coordinates
let zoom = 4 // Initial zoom, displays entire of US

let map = L.map('bridge-map').setView(coordinates, zoom) // Center at 0, 0 and max zoom out
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 7,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoiam9yZGFuZ2VyZGluIiwiYSI6ImNrNnZneWtpZjAxcmUza21oMnFwa3Z3cHcifQ.CYn0s22P2gLmy8Ysioibxg'}
    ).addTo(map)

let bridgeMarker = 0

bridges.forEach(function(bridge){ // Place the bridge icon on map for each bridge
    bridgeMarker = L.marker(bridge.coordinates, {icon: bridgeIcon})
                    .bindPopup("<b>" + bridge.name + "</b><br>Span: " + bridge.span + "m")
                    .addTo(map)
})