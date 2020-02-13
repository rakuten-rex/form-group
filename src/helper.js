/* eslint-disable import/prefer-default-export */
export function joinClassName(array) {
  return array
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}
