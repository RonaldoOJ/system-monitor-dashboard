const metrics = {
  cpu: 35,
  memory: 55,
  disk: 70,
  network: 40
};

function simulateMetric(value, max = 100) {
  const change = Math.random() * 6 - 3;
  return Math.min(Math.max(value + change, 0), max);
}

