export function toHourDoubleDots(date: Date): string {
  const hours = date.getHours()
  const minutes = date.getMinutes()

  const hoursString = hours.toString().padStart(2, '0')
  const minutesString = minutes.toString().padStart(2, '0')

  return `${hoursString}:${minutesString}`
}
