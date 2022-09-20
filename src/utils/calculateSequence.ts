const highestStringSequence = (sample: string, char: '-', delimiter: '|') => {
  const split = sample.split(delimiter)
  const highestSequence = split.reduce((acc, curr) => {
    const sequence = curr.length
    return sequence > acc ? sequence : acc
  }, 0)
  return highestSequence
}

export const calculateSequenceByKeyValue = <T>(arr: T[], key: keyof T, value: string) =>
  highestStringSequence(
    arr.map((item) => (item[key] === value ? '-' : '|')).join(''),
    '-',
    '|',
  )
