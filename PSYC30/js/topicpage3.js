const chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)',
    black: 'rgb(100, 100, 100)'
};

var chart1Config = {
    type: 'bar',
    data: {
        labels: ['5', '10', '15', '20', '25', '30', '35', '40', '45'],
        datasets: [
            {
                lineTension: 0, // straight line
                label: 'Group 1',
                fill: false,
                backgroundColor: chartColors.green,
                borderColor: chartColors.green,
                data: [
                    5,
                    10,
                    15,
                    14,
                    10,
                    5,
                    4,
                    3,
                    1
                ],
            }, 
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Histogram of Reaction Time'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Reaction Time(sec)'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Frequency'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
};

window.onload = function() {
    const ctx1 = document.getElementById('chart1').getContext('2d');
    const btnAnswer1 = document.getElementById('btnAnswer1')

    let chart1 = null;
    btnAnswer1.addEventListener("click", ()=>{
        if(chart1 == null){
            chart1 = new Chart(ctx1, chart1Config);
        }
    })
}