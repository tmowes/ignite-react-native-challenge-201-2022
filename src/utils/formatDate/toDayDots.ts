export function toDayDots(date: Date): string {
  const year = date.getFullYear() % 1000
  const month = date.getMonth() + 1
  const day = date.getDate()

  const monthString = month.toString().padStart(2, '0')
  const dayString = day.toString().padStart(2, '0')

  return `${dayString}.${monthString}.${year}`
}
