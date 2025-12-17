function getStatus(value) {
  if (value > 85) return { text: 'Critical', color: 'var(--critical)' };
  if (value > 70) return { text: 'Warning', color: 'var(--warning)' };
  return { text: 'Normal', color: 'var(--accent)' };
}
