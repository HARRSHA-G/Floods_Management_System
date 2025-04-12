// Toggle theme using switch
const toggleButton = document.getElementById('theme-toggle'); // Get the theme toggle checkbox
const body = document.body; // Get the body element of the document

// Add click event listener to the toggle button
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode'); // Toggle 'dark-mode' class on body
});

// Sample Chart.js Graphs (Replace XYZ data with actual later)
const dubaiChart = document.getElementById('dubai-chart').getContext('2d'); // Get context for Dubai chart
const indiaChart = document.getElementById('india-chart').getContext('2d'); // Get context for India chart
const comparisonChart = document.getElementById('comparison-chart').getContext('2d'); // Get context for comparison chart
const graphsChart = document.getElementById('graphs-chart').getContext('2d'); // Get context for additional graphs
const extraChart = document.getElementById('extra-chart').getContext('2d'); // Get context for extra metrics chart

// Dubai Chart Configuration
new Chart(dubaiChart, {
    type: 'bar', // Specify the chart type
    data: {
        labels: ['Recovery Time', 'Resources Available', 'Technology Used', 'Community Involvement', 'Government Support', 'Emergency Response'],
        datasets: [{
            label: 'Dubai Flood Management Data (%)',
            data: [85, 90, 95, 80, 70, 85], // Data for the chart
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)', 
                'rgba(75, 192, 192, 0.2)', 
                'rgba(153, 102, 255, 0.2)', 
                'rgba(255, 206, 86, 0.2)', 
                'rgba(255, 159, 64, 0.2)', 
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)', 
                'rgba(75, 192, 192, 1)', 
                'rgba(153, 102, 255, 1)', 
                'rgba(255, 206, 86, 1)', 
                'rgba(255, 159, 64, 1)', 
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1 // Width of the border for each bar
        }]
    },
    options: {
        responsive: false, // Disable responsive behavior
        maintainAspectRatio: false, // Allow chart to resize
        scales: {
            y: { beginAtZero: true } // Ensure y-axis starts at zero
        },
        tooltips: {
            callbacks: {
                title: function(tooltipItem, data) {
                    return data.labels[tooltipItem[0].index]; // Tooltip title corresponds to the label
                },
                label: function(tooltipItem, data) {
                    var dataset = data.datasets[tooltipItem.datasetIndex];
                    var label = dataset.label || ''; // Get dataset label
                    var value = dataset.data[tooltipItem.index]; // Get data value
                    return `${label}: ${value}%`; // Return formatted label and value
                },
                afterLabel: function(tooltipItem, data) {
                    var percentage = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    var moreInfo = [
                        'High recovery efficiency',
                        'Abundant resources',
                        'Advanced technology',
                        'Strong community involvement',
                        'Moderate government support',
                        'Effective emergency response'
                    ];
                    return moreInfo[tooltipItem.index] || ''; // Provide additional information
                }
            },
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Background color for tooltips
            titleFontSize: 14, // Title font size in tooltips
            titleFontColor: '#ffffff', // Title font color in tooltips
            bodyFontColor: '#ffffff', // Body font color in tooltips
            bodyFontSize: 12, // Body font size in tooltips
            displayColors: false // Disable color boxes in tooltips
        }
    }
});

// India Chart Configuration
new Chart(indiaChart, {
    type: 'bar',
    data: {
        labels: ['Recovery Time', 'Resources Available', 'Technology Used', 'Community Involvement', 'Government Support', 'Emergency Response'],
        datasets: [{
            label: 'India Flood Management Data (%)',
            data: [30, 50, 60, 40, 45, 55], // Data for India chart
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)', 
                'rgba(75, 192, 192, 0.2)', 
                'rgba(153, 102, 255, 0.2)', 
                'rgba(255, 206, 86, 0.2)', 
                'rgba(255, 159, 64, 0.2)', 
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)', 
                'rgba(75, 192, 192, 1)', 
                'rgba(153, 102, 255, 1)', 
                'rgba(255, 206, 86, 1)', 
                'rgba(255, 159, 64, 1)', 
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Comparison Chart Configuration
new Chart(comparisonChart, {
    type: 'bar',
    data: {
        labels: ['Dubai', 'India'],
        datasets: [{
            label: 'Flood Recovery Time',
            data: [48, 336], // Recovery time data for comparison
            backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Additional Charts Configuration for yearly floods data
new Chart(graphsChart, {
    type: 'bar',
    data: {
        labels: ['2019', '2020', '2021', '2022', '2023'],
        datasets: [{
            label: 'Floods in Dubai',
            data: [1, 2, 1, 3, 2], // Flood count data for Dubai
            backgroundColor: ['rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(54, 162, 235, 1)'],
            borderWidth: 1
        }, {
            label: 'Floods in India',
            data: [5, 7, 6, 8, 10], // Flood count data for India
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Additional Metrics Chart Configuration
new Chart(extraChart, {
    type: 'line',
    data: {
        labels: ['Planning', 'Infrastructure', 'Response Time', 'Public Awareness'],
        datasets: [{
            label: 'Dubai Flood Management Metrics',
            data: [85, 90, 95, 80], // Data for Dubai metrics
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false // Line chart with no fill
        }, {
            label: 'India Flood Management Metrics',
            data: [70, 65, 80, 50], // Data for India metrics
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            fill: false // Line chart with no fill
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Read More Functionality
document.getElementById("read-more").addEventListener("click", function() {
    document.getElementById("paragraph").style.overflow = "visible"; // Allow overflow to be visible
    document.getElementById("paragraph").style.textOverflow = "clip"; // Disable text overflow clipping
    document.getElementById("paragraph").style.display = "block"; // Make paragraph display block
    document.getElementById("read-more").style.display = "none"; // Hide the "Read More" button
});
