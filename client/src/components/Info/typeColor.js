export default (type) => {
  return [
    '#7895C0',
    '#b86e6e',
    '#E3BBA9',
    '#C2E7CB',
  ][type.length % 4]
}
