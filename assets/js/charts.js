function createChart(ctx, label, initialValue) {
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array(12).fill(''),
      datasets: [{
        data: Array(12).fill(initialValue),
        borderColor: '#0a84ff',
        borderWidth: 2,
        tension: 0.45,
        fill: false
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { display: false },
        y: { min: 0, max: 100, ticks: { color: '#aaa' } }
      }
    }
  });
}

