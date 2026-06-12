const randomScalingFactor = function() {
    return Math.random()*101;
};
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
    type: 'line',
    data: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
        datasets: [
            {
                lineTension: 0, // straight line
                label: 'Group 1',
                fill: false,
                backgroundColor: chartColors.green,
                borderColor: chartColors.green,
                data: [
                    ,
                    3,
                    4,
                    3,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    
                ],
            }, 
            {
                lineTension: 0, // straight line
                label: 'Group 2',
                fill: false,
                backgroundColor: chartColors.blue,
                borderColor: chartColors.blue,
                data: [
                    ,
                    ,
                    ,
                    ,
                    6,
                    7,
                    8,
                    10,
                    14,
                    15,
                    17,
                    18,
                    19,
                    19
                ],
            }, 
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Session-Value Graph'
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
                    labelString: 'Session'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
};

var chart1ConfigWithAnswer = {
    type: 'line',
    data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        datasets: [
            {
                lineTension: 0, // straight line
                label: 'Group 1',
                fill: false,
                backgroundColor: chartColors.green,
                borderColor: chartColors.green,
                data: [
                    ,
                    3,
                    4,
                    3,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    
                ],
            }, 
            {
                lineTension: 0, // straight line
                label: 'Group 1 Variability',
                fill: false,
                backgroundColor: chartColors.black,
                borderColor: chartColors.black,
                pointRadius:0,
                borderWidth: 1,
                data: [
                    ,
                    2.64,
                    2.64,
                    2.64,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    
                ],
            }, 
            {
                lineTension: 0, // straight line
                label: 'Group 1 Variability',
                fill: false,
                backgroundColor: chartColors.black,
                borderColor: chartColors.black,
                pointRadius:0,
                borderWidth: 1,
                data: [
                    ,
                    3.36,
                    3.36,
                    3.36,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    
                ],
            }, 
            {
                lineTension: 0, // straight line
                label: 'Group 2',
                fill: false,
                backgroundColor: chartColors.blue,
                borderColor: chartColors.blue,
                data: [
                    ,
                    ,
                    ,
                    ,
                    6,
                    7,
                    8,
                    10,
                    14,
                    15,
                    17,
                    18,
                    19,
                    19
                ],
            }, 
            {
                lineTension: 0, // straight line
                label: 'Level',
                fill: false,
                backgroundColor: chartColors.red,
                borderColor: chartColors.red,
                pointRadius:0,
                borderWidth: 1,
                data: [
                    ,
                    ,
                    ,
                    ,
                    14,
                    14,
                    14,
                    14,
                    14,
                    14,
                    14,
                    14,
                    14,
                    14
                ],
            }, 
            {
                lineTension: 0, // straight line
                label: 'Trend',
                fill: false,
                backgroundColor: chartColors.purple,
                borderColor: chartColors.purple,
                pointRadius:0,
                borderWidth: 1,
                data: [
                    ,
                    ,
                    ,
                    ,
                    5.8544,
                    7.5089,
                    9.1634,
                    10.8179,
                    12.4724,
                    14.1269,
                    15.7814,
                    17.4359,
                    19.0904,
                    20.7449
                ],
            }, 
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Session-Value Graph'
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
            x: {
                type: 'linear',
                position: 'bottom',
                ticks: {
                        min: 1,  
                        max: 13,
                        stepSize: 1,
                 }
            },
            y: {
                display: true,
            },
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Session'
                },
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        },
    }
};

var chart2Config = {
    type: 'line',
    data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
            {
                lineTension: 0, // straight line
                label: 'Group 1',
                fill: false,
                backgroundColor: chartColors.blue,
                borderColor: chartColors.blue,
                data: [
                    ,
                    6,
                    7,
                    8,
                    10,
                    14,
                    15,
                    17,
                    18,
                    19,
                    19
                ],
            }, 
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Session-Value Graph'
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
            x: {
                display: true,
            },
            y: {
                display: true,
            },
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Session'
                },
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        },
    }
};

var chart2ConfigWithAnswer = {
    type: 'line',
    data: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [
            {
                lineTension: 0, // straight line
                label: 'Group 1',
                fill: false,
                backgroundColor: chartColors.blue,
                borderColor: chartColors.blue,
                data: [
                    ,
                    6,
                    7,
                    8,
                    10,
                    14,
                    15,
                    17,
                    18,
                    19,
                    19
                ],
            }, 
            {
                lineTension: 0, // straight line
                label: '9',
                fill: false,
                backgroundColor: chartColors.grey,
                borderColor: chartColors.grey,
                data: [
                    ,
                    9,
                    9,
                    9,
                    9,
                    9,
                    ,
                    ,
                    ,
                    ,
                    
                ],
            }, 
            {
                lineTension: 0, // straight line
                label: '17',
                fill: false,
                backgroundColor: chartColors.grey,
                borderColor: chartColors.grey,
                data: [
                    ,
                    ,
                    ,
                    ,
                    ,
                    ,
                    17,
                    17,
                    17,
                    17,
                    17
                ],
            }, 
            {
                lineTension: 0, // straight line
                label: 'Line',
                fill: false,
                backgroundColor: chartColors.black,
                borderColor: chartColors.black,
                data: [
                    ,
                    5.5117,
                    7.2234,
                    8.9351,
                    10.6468,
                    12.3585,
                    14.0702,
                    15.7819,
                    17.4936,
                    19.2053,
                    20.917
                ],
            }, 
        ]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Session-Value Graph'
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
            x: {
                display: true,
                type: 'linear',
                position: 'bottom',
                ticks: {
                        min: 0,  
                        max: 10,
                        stepSize: 1,
                 }
            },
            y: {
                display: true,
                type: 'linear',
                position: 'bottom',
                ticks: {
                        min: 0,  
                        max: 20,
                        stepSize: 1,
                 }
            },
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Session'
                },
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        annotation: {
            drawTime: 'afterDatasetsDraw',
            annotations: [
              {
                type: "line",
                mode: "vertical",
                scaleID: "x-axis-0",
                value: 5.5,
                borderColor: "black",
              },
              {
                type: "line",
                mode: "vertical",
                scaleID: "x-axis-0",
                value: 3,
                borderColor: "black",
              },
              {
                type: "line",
                mode: "vertical",
                scaleID: "x-axis-0",
                value: 8,
                borderColor: "black",
              },
            ]
        }
    }
};




window.onload = function() {
    const ctx1 = document.getElementById('chart1').getContext('2d');
    const ctx2 = document.getElementById('chart2').getContext('2d');
    let chart1 = new Chart(ctx1, chart1Config);
    let chart2 = new Chart(ctx2, chart2Config);
    const btnAnswer1 = document.getElementById('btnAnswer1')
    const btnAnswer2 = document.getElementById('btnAnswer2')
    const hint1 = document.getElementById('hint1')
    btnAnswer1.addEventListener("click", ()=>{
        hint1.innerHTML = `
        Variability. Median of baseline is 3 <br/>
        3x 0.125 = 0.36 (add and subtract this to the median) <br/>
        3.36 and 2.64 <br/>
        2 out of 3 data points or 67% of the data points fall within 25% of the median, indicating a variable baseline.
        `
        chart1.destroy();
        chart1 = new Chart(ctx1, chart1ConfigWithAnswer);
    })
    btnAnswer2.addEventListener("click", ()=>{
        chart2.destroy();
        chart2 = new Chart(ctx2, chart2ConfigWithAnswer);
    })

};
