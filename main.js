module.exports = (value, separator = '-') => {
  const now = new Date(Date.now())
  if (!value) {
    return now
  }

  const [dd, mm, yyyy] = value
    .toString()
    .split(separator)
    .map(x => x.padStart(2, '0'))

  let nowISO = now.toISOString()
  nowISO = nowISO.slice(0, 8) + dd + nowISO.slice(10)

  if (mm) {
    nowISO = nowISO.slice(0, 5) + mm + nowISO.slice(7)
  }
  if (yyyy) {
    nowISO = yyyy + nowISO.slice(4)
  }

  return new Date(nowISO)
}
