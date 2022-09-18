export function toDayDash(date: Date): string {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const monthString = month.toString().padStart(2, '0')
  const dayString = day.toString().padStart(2, '0')

  return `${year}-${monthString}-${dayString}`
}
