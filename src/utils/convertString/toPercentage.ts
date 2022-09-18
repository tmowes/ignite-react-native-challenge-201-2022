export const toPercentage = (number: number) => {
  if (number) {
    return `${String((number * 100).toFixed(2))
      .replace('.', ',')
      .padStart(2, '0')}%`
  }
  return '0,00%'
}
