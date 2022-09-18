export const sameDate = (date1: string, date2: string): boolean => {
  const date1ISO = new Date(date1).toISOString().split(':')[0] // 2021-05-01T00:00:00
  const date2ISO = new Date(date2).toISOString().split(':')[0]
  return date1ISO === date2ISO
}
