const CHART = document.getElementById("LineChart");
console.log(CHART);

Chart.defaults.global.animation.duration = 2000;
Chart.defaults.global.defaultFontFamily = "Muli";
Chart.defaults.global.defaultFontSize = 10;
Chart.defaults.global.elements.arc.borderWidth = 0;



let lineChart = new Chart(CHART, {
    type: 'line',
    data:{
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
        {
            label: "My First dataset",
            fill: true,
            lineTension: 0.5,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'round',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [50, 40, 50, 70],
            spanGaps: false,
        },
          {
            label: "My Second dataset",
            fill: true,
            lineTension: 0.5,
            backgroundColor: "rgba(75,75,192,0.4)",
            borderColor: "rgba(75,72,192,1)",
            borderCapStyle: 'round',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,72,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,72,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [40, 55, 30, 35],
            spanGaps: false,
        }
    ]
},
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 100
                }
            }]
        }
    }
});
