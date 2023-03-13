const ctx2 = document.getElementById('myChart').getContext('2d');
const doughnut = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        datasets: [{
            label: '# of Votes',
            data: [12, 11, 4, 4, 6, 8],
            backgroundColor: [
                '#3D88FB',
                '#5637C8',
                '#00D199',
                '#C87B07',
                '#A92535',
                '#9116CD'
            ],
            borderColor: [
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            ],
        }]
    },

});