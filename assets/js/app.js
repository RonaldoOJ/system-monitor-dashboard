const cpuChart = createChart(
  document.getElementById('cpuChart'),
  'CPU',
  metrics.cpu
);

const memoryChart = createChart(
  document.getElementById('memoryChart'),
  'Memory',
  metrics.memory
);

const diskChart = createChart(
  document.getElementById('diskChart'),
  'Disk',
  metrics.disk
);

const networkChart = createChart(
  document.getElementById('networkChart'),
  'Network',
  metrics.network
);

setInterval(() => {
  metrics.cpu = simulateMetric(metrics.cpu);
  metrics.memory = simulateMetric(metrics.memory);
  metrics.disk = simulateMetric(metrics.disk);
  metrics.network = simulateMetric(metrics.network);

  update(cpuChart, metrics.cpu, 'cpuStatus');
  update(memoryChart, metrics.memory, 'memoryStatus');
  update(diskChart, metrics.disk, 'diskStatus');
  update(networkChart, metrics.network, 'networkStatus');
}, 2000);

function update(chart, value, statusId) {
  chart.data.datasets[0].data.push(value);
  chart.data.datasets[0].data.shift();
  chart.update();

  const status = getStatus(value);
  const el = document.getElementById(statusId);
  el.textContent = `${status.text} (${value.toFixed(1)}%)`;
  el.style.color = status.color;
}
