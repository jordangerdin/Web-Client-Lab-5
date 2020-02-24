var canvas = document.getElementById('bridge-chart')
var ctx = canvas.getContext('2d')

let bridges = [ // Array of the longest bridges in the US information
    {'name': "Verrazano-Narrows Bridge", 'coordinates': [40.6066, -74.0447], 'span': 1298.4, 'city/state': "New York, NY"},
    {'name': "Golden Gate Bridge", 'coordinates': [37.8199, -122.4783], 'span': 1280.2, 'city/state': "San Francisco and Marin, CA"},
    {'name': "Mackinac Bridge", 'coordinates': [45.8174, -84.7278], 'span': 1158.0, 'city/state': "Mackinaw and St Ignace, MI"},
    {'name': "George Washington Bridge", 'coordinates': [40.8517, -73.9527], 'span': 1067.0, 'city/state': "New York, NY and New Jersey, NJ"},
    {'name': "Tacoma Narrows Bridge", 'coordinates': [47.2690, -122.5517], 'span': 853.44, 'city/state': "Tacoma and Kitsap, WA"}
]

var names = []
var lengths = []

bridges.forEach(function(bridge){
    names.push(bridge.name) // Getting array of bridge names for labels
    lengths.push(bridge.span) // Getting data of bridge lengths
})

chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names, // from array of bridge names
        datasets: [{
            label: 'Length of bridge',
            data: lengths, // from array of bridge lengths
            backgroundColor: ['green', 'blue', 'purple', 'red', 'orange'] // colors of bars in graph
        }]
    }, options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})