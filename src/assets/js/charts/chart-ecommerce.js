document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('donut-chart').getContext('2d');

    var data = {
        labels: ["Hoàn thành", "Đang chạy ", "Hủy đơn     "],
        datasets: [{
            data: [1, 1, 1],
            backgroundColor: ["#1297e0", "#ffcf38", "#ff512b"],
        }]
    };

    var options = {
        cutout: '70%',
        responsive: true,
        maintainAspectRatio: false,
    };

    var donutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });


});

new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
        labels: ["Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10"],
        datasets: [
            {
                label: "Tổng nạp",
                backgroundColor: "#1297e0",
                data: [2000, 1000, 3400, 500, 600, 200]
            }, {
                label: "Tổng chi tiêu",
                backgroundColor: "#ff582c",
                data: [1900, 500, 6000, 700, 200, 1500]
            }
        ]
    },
    options: {
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
            }
        },
        responsive: true,
        maintainAspectRatio: false,

    }
});
