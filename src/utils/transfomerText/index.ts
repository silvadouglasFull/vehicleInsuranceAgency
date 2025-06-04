import type { AddDots, TransformerInFirstWord } from "@utils/transfomerText/types"
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