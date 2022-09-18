export function toDateDetails(dateISO: string): string {
  const date = new Date(dateISO)

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const hour = date.getHours()
  const minutes = date.getMinutes()

  const dayString = day.toString().padStart(2, '0')
  const monthString = month.toString().padStart(2, '0')
  const hourString = hour.toString().padStart(2, '0')
  const minutesString = minutes.toString().padStart(2, '0')

  return `${dayString}/${monthString}/${year} às ${hourString}:${minutesString}`
}
