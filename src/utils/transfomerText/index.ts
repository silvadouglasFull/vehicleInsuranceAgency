import type { AddDots, FunctionSplitString, SplitStringProps, TransformerInFirstWord } from "@utils/transfomerText/types"
export const transformerInFirstWord = ({ world }: TransformerInFirstWord): string => {
    return String(world).substring(0, 1)
}
/**
   * Added a period to every three digits of a number.
   * @param {Object} params - The number that will be formatted.
   * @param {string} params.string - A string that will be formatted.
   * @param {number} params.padNumber - After 5 digits you want to add the points.
   * @returns {string} A string containing the number formatted with periods every three digits.
   * @example
   * const number = 1234567890;
   * const formattednumber = addPointToThreeDigits({sring: number, paddNumber:3});
   * console.log(FormattedNumber); //Output: '1,234,567,890'
   */
export const addDots = ({ text, padNumber, dot = '.' }: AddDots): string => {
    const parsedString = String(text)
    const partes = []
    let temp = ''
    for (let i = parsedString.length - 1; i >= 0; i--) {
        temp = parsedString[i] + temp
        if (temp.length === padNumber || i === 0) {
            partes.unshift(temp)
            temp = ''
        }
    }
    const result = partes.join(dot)
    return result
}
/**
 * Splits a string into two variables based on a specified separator.
 *
 * @param {string} fullString - The complete string to be split.
 * @param {string} separator - The character used to separate the string into parts.
 * @returns {Object} An object containing two variables, each representing a part of the split string.
 *
 * @example
 * const fullString = 'pedido_venda.ped_venda_cod';
 * const result = splitString(fullString, '.');
 * console.log(result);
 * // Output:
 * // {
 * //   firstPart: 'pedido_venda',
 * //   secondPart: 'ped_venda_cod',
 * // }
 */
export function splitString({ fullString, separator }: SplitStringProps): FunctionSplitString {
    try {
        const parts = fullString.split(separator)
        const firstPart = parts?.[0] || ''
        const secondPart = parts?.[1] || ''
        return {
            firstPart,
            secondPart,
        }
    } catch (error) {
        console.log(error)
        return {
            firstPart: '',
            secondPart: ''
        }
    }
}
