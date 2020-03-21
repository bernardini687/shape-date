module.exports = (value, separator = '-') => {
  let now = new Date()
  if (!value) {
    return now
  }

  const [d, m, y] = value
    .toString()
    .split(separator)
    .map(x => x.padStart(2, '0'))

  now = now.toISOString()
  now = now.slice(0, 8) + d + now.slice(10)

  if (m) {
    now = now.slice(0, 5) + m + now.slice(7)
  }
  if (y) {
    now = y + now.slice(4)
  }

  return new Date(now)
}
