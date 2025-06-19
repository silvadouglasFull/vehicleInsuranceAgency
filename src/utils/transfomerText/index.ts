import type { FormatCEP, FormatCPF, FunctionSplitString, MaskCodFipe, SplitStringProps, TransformerInFirstWord } from "@utils/transfomerText/types"
export const transformerInFirstWord = ({ world }: TransformerInFirstWord): string => {
    return String(world).substring(0, 1)
}
export const maskCodFipe = ({ codFipe }: MaskCodFipe): string => {
    const lastDigit = codFipe.substring(codFipe.length - 1)
    const replacedTexy = codFipe.replace(lastDigit, `-${lastDigit}`)
    return replacedTexy
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
/**
 * Formats a string into the Brazilian CPF format: XXX.XXX.XXX-XX
 *
 * @param {string} cpf - The string representing the CPF number (only digits).
 * @returns {string} The formatted CPF string or the original string if it cannot be formatted.
 *
 * @example
 * formatCpf('12345678901'); // returns '123.456.789-01'
 * formatCpf('12345678'); // returns '12345678'
 */
export function formatCpf({ cpf }: FormatCPF): string {
    const digits = cpf.replace(/\D/g, '');
    if (digits.length !== 11) {
        return cpf;
    }
    return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}
/**
 * Formata uma string para o padrão de CEP brasileiro (00000-000).
 * @param params.cep CEP não formatado
 * @returns CEP formatado
 */
export function formatCep({ cep }: FormatCEP): string {
    const digits = cep.replace(/\D/g, '').slice(0, 8); // Remove não-dígitos e limita a 8 caracteres
    return digits.replace(/^(\d{5})(\d{0,3})$/, '$1-$2');
}

/**
 * Remove todos os caracteres não numéricos de uma string.
 * @param input Texto de entrada
 * @returns Apenas os dígitos numéricos
 */
export function onlyNumbers(input: string): string {
    return input.replace(/\D/g, '');
}
