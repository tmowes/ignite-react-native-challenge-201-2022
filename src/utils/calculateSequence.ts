const highestStringSequence = (sample: string, delimiter: '|') =>
  sample
    .split(delimiter)
    .reduce((acc, curr) => (curr.length > acc ? curr.length : acc), 0)

export const calculateSequenceByKeyValue = <T>(arr: T[], key: keyof T, value: string) =>
  highestStringSequence(
    arr.map((item) => (item[key] === value ? '-' : '|')).join(''),
    '|',
  )
