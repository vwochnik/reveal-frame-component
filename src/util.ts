export function cssDimension(dim: string): string {
  const match = /^([0-9]*)(.*)$/.exec(dim);

  if (match === null) {
    return dim;
  }

  const [, num, unit ] = match;

  if (unit === '') {
    return `${num}px`;
  }

  return dim;
}
