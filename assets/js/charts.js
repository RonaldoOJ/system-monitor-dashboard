function createChart(ctx, label, initialValue) {
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array(10).fill(''),
      datasets: [{
        label,
        data: Array(10).fill(initialValue),
        borderColor: '#3b82f6',
        tension: 0.4
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { display: false },
        y: { min: 0, max: 100 }
      }
    }
  });
}
