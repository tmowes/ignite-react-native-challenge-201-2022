const highestStringSequence = (sample: string, char: '-', delimiter: '|') => {
  const split = sample.split(delimiter)
  const highestSequence = split.reduce((acc, curr) => {
    const sequence = curr.split(char).length
    return sequence > acc ? sequence : acc
  }, 0)
  return Math.max(highestSequence - 1, 0)
}

export const calculateSequenceByKeyValue = <T>(arr: T[], key: keyof T, value: string) =>
  highestStringSequence(
    arr.map((item) => (item[key] === value ? '-' : '|')).join(''),
    '-',
    '|',
  )
