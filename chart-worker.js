/**
 *
 * @author `Caleb Adepitan`
 * @param {HTMLCanvasElement} canvas
 * @param {{subjects: string[], scores: {high: number[], student: number[], low: number[]}}} data
 */
function buildChart(canvas, data) {
  // ['#28A745', '#6610F2', '#DC3545']
  var chart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: data.subjects,
      datasets: [{
        label: 'Highest in class',
        backgroundColor: 'purple',
        data: data.scores.high,
      }, {
        label: 'Student\'s score',
        backgroundColor: '#62C4EB',
        data: data.scores.student,
      }, {
        label: 'Lowest in class',
        backgroundColor: '#DC3545',
        data: data.scores.low,
      },]
    },
    options: {
      scales: {
        xAxes: [{
          barPercentage: 0.2
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            showLabelBackdrop: true
          }
        }]
      }
    }
  })
}
