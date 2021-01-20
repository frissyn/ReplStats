var DATA = {{ stats["raw_hits"] | safe }};
var LABELS = {{ stats["raw_days"] | safe }};
var ZOOM = {
    zoom: {
        pan: {
            enabled: true,
            mode: 'xy',
            rangeMin: {
                x: null,
                y: null
            },
            rangeMax: {
                x: null,
                y: null
            },
            speed: 20,
            threshold: 10,
            onPan: function({chart}) { console.log(`I'm panning!!!`); },
            onPanComplete: function({chart}) { console.log(`I was panned!!!`); }
        },

        zoom: {
            enabled: true,
            drag: true,
            mode: 'xy',

            rangeMin: {
                x: null,
                y: null
            },
            rangeMax: {
                x: null,
                y: null
            },

            speed: 0.1,
            threshold: 2,
            sensitivity: 3,

            onZoom: function({chart}) { console.log(`I'm zooming!!!`); },
            onZoomComplete: function({chart}) { console.log(`I was zoomed!!!`); }
        }
    }
};
    
window.onload = function() {
    window.statsChart = new Chart(
        document.getElementById("replStats"),
        {
            type: "line",
            scaleFontColor: "white",
            data: {
                labels: LABELS,
                datasets: [{ 
                    data: DATA,
                    fill: true,
                    lineTension: 0,
                    label: "Visit Count",
                    borderColor: "#FF5AAC",
                    backgroudColor: "#3E95CD"
                }]
            },
            options: {
                legend: {
                    fontColor: "white",
                    labels: {fontColor: "whitesmoke"}
                },
                scales: {
                    yAxes: [{
                        ticks: {fontColor: "white"},
                        gridLines: {color: "#262626"}
                    }],
                    xAxes: [{
                        ticks: {fontColor: "white"},
                        gridLines: {color: "#262626"}
                    }]
                }
            },
            plugins: [ZOOM]
        }
    );
};