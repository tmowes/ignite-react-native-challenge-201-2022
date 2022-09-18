export function toDateUID(date: Date): string {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  const monthString = month.toString().padStart(2, '0')
  const dayString = day.toString().padStart(2, '0')
  const hoursString = hours.toString().padStart(2, '0')
  const minutesString = minutes.toString().padStart(2, '0')

  return `${hoursString}:${minutesString}|${dayString}.${monthString}.${year}`
}
