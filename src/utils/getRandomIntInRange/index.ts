/**
 * Gera um número inteiro aleatório entre min e max (inclusive).
 *
 * @param min - Valor mínimo (inclusivo)
 * @param max - Valor máximo (inclusivo)
 * @returns Número inteiro aleatório
 *
 * @example
 * const numero = getRandomIntInRange(10, 99);
 * console.log(numero); // ex: 42
 */
export function getRandomIntInRange(min: number, max: number): number {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil;
}
