/**
 * Converts kilojoules into kilocalories, rounding to the nearest whole number
 * @param kj - Value in kilojoules.
 * @returns The value converted into kilocalories, rounded to the nearest whole number.
 */
export const toKcal = (kj: number): number => {
  if (isNaN(kj) || kj < 0) {
    throw new Error('La valeur doit être un nombre positif.');
  }
  const kcal = kj / 4.184;
  return Math.round(kcal);
};
