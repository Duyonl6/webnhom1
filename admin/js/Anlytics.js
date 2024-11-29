// Sample Data for Charts
const usersGrowthData = [1200, 1300, 1400, 1600, 1700, 1800];
const revenueGrowthData = [10000, 11000, 12000, 13000, 13500, 14500];
const userTypeInteractionsData = {
    labels: ['Likes', 'Comments', 'Shares'],
    datasets: [{
        label: 'User Interaction Types',
        data: [1500, 1200, 800],
        backgroundColor: ['#007bff', '#28a745', '#ffc107'],
        hoverOffset: 4
    }]
};
const userLocationData = {
    labels: ['USA', 'India', 'Brazil', 'UK', 'Australia'],
    datasets: [{
        label: 'Users by Location',
        data: [3500, 2900, 1800, 1200, 900],
        backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8'],
    }]
};

// Users Growth Chart
const ctx1 = document.getElementById('usersGrowthChart').getContext('2d');
const usersGrowthChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Users Growth',
            data: usersGrowthData,
            borderColor: '#007bff',
            fill: false,
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Revenue Growth Chart
const ctx2 = document.getElementById('revenueGrowthChart').getContext('2d');
const revenueGrowthChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Revenue Growth',
            data: revenueGrowthData,
            borderColor: '#28a745',
            fill: false,
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// User Type Interactions Chart
const ctx3 = document.getElementById('userTypeInteractionsChart').getContext('2d');
const userTypeInteractionsChart = new Chart(ctx3, {
    type: 'pie',
    data: userTypeInteractionsData,
    options: {
        responsive: true
    }
});

// User Location Distribution Chart
const ctx4 = document.getElementById('userLocationChart').getContext('2d');
const userLocationChart = new Chart(ctx4, {
    type: 'doughnut',
    data: userLocationData,
    options: {
        responsive: true
    }
});
