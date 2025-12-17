const metrics = {
  cpu: 35,
  memory: 55,
  disk: 70,
  network: 40
};

function simulateMetric(value, max = 100) {
  const change = Math.random() * 6 - 3;
  let newValue = value + change;
  return Math.min(Math.max(newValue, 0), max);
}
