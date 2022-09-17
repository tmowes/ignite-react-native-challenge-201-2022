export const toPercentage = (number: number) =>
  `${String((number * 100).toFixed(2))
    .replace('.', ',')
    .padStart(2, '0')}%`
