const capitalize = (value: string): string =>
  value.length > 0 ? value.substring(0, 1).toUpperCase() + value.substring(1) : value;

export const greet = (target: string): string => `Hello ${capitalize(target)}!`;
