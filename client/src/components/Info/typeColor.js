export default (type) => {
  return [
    '#7895C0',
    '#B5D6D6',
    '#E3BBA9',
    '#C2E7CB',
    '#FEF1A7',
  ][type.length % 5]
}
